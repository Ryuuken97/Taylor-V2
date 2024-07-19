import fetch from "node-fetch";
import yts from "yt-search";
import _ from "lodash";
const handler = async (m, {
  conn,
  command,
  args,
  usedPrefix
}) => {
  try {
    const text = _.get(args, "length") ? args.join(" ") : _.get(m, "quoted.text") || _.get(m, "quoted.caption") || _.get(m, "quoted.description") || null;
    if (!text) return m.reply(`Masukkan teks atau balas pesan dengan teks yang ingin diolah.\nContoh penggunaan:\n*${usedPrefix}${command} Hai, apa kabar?*`);
    const isMP3 = /^y((outube|tb)audio|(outube|tb?)mp3|utubaudio|taudio|ta)$/i.test(command);
    m.react(wait);
    let data = null;
    const vid = /^(https?:\/\/)?(www\.)?((youtube\.com\/(?:embed\/|v\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11}))$/.test(text) ? (data = await ytdl(text, isMP3 ? "audio" : "video"), await ytsearch(data.title)) : await ytsearch(text);
    if (!vid.url) throw new Error("Video tidak ditemukan. Silakan coba kata kunci lain.");
    const {
      title = "Tidak Diketahui",
        thumbnail,
        timestamp = "Tidak Diketahui",
        views = "Tidak Diketahui",
        ago = "Tidak Diketahui",
        url
    } = vid;
    const captvid = `📺 *Judul:* ${title}\n⌛ *Durasi:* ${timestamp}\n👀 *Views:* ${(n => n.toLocaleString("id-ID", {
            maximumFractionDigits: 1
        }).replace(/\.0$/, "") + [ "", "rb", "jt", "m" ][Math.floor(Math.log10(parseInt(views)) / 3)])(parseInt(views) / Math.pow(1e3, Math.floor(Math.log10(parseInt(views)) / 3)))}\n📅 *Upload:* ${ago}\n🔗 *Link:* ${url}`;
    const ytthumb = (await conn.getFile(thumbnail))?.data;
    const infoReply = {
      contextInfo: {
        externalAdReply: {
          body: `Mengunduh ${isMP3 ? "audio" : "video"}, harap tunggu...`,
          mediaType: isMP3 ? 1 : 2,
          mediaUrl: url,
          previewType: 0,
          renderLargerThumbnail: true,
          sourceUrl: url,
          thumbnail: ytthumb,
          title: `Y O U T U B E - ${isMP3 ? "A U D I O" : "V I D E O"}`
        }
      }
    };
    await conn.reply(m.chat, captvid, m, infoReply);
    infoReply.contextInfo.externalAdReply.body = `Berhasil memutar ${isMP3 ? "audio" : "video"}`;
    if (!data) data = await ytdl(url, isMP3 ? "audio" : "video");
    await conn.sendMessage(m.chat, {
      [isMP3 ? "audio" : "video"]: data.buffer ? data.buffer : {
        url: data?.url
      },
      caption: captvid,
      mimetype: isMP3 ? "audio/mpeg" : "video/mp4",
      contextInfo: infoReply.contextInfo
    }, {
      quoted: m
    });
  } catch (e) {
    console.error(e);
    m.react(eror);
  }
};
handler.help = ["ytmp3", "yta"].map(v => `${v} <url> <tanpa pesan>`);
handler.tags = ["downloader"];
handler.command = /^y((outube|tb)audio|(outube|tb?)mp3|utubaudio|taudio|ta)$/i;
handler.exp = 0;
handler.register = false;
handler.limit = true;
export default handler;
async function ytdl(ytUrl, mediaType = "video") {
  const apiUrls = [`https://api.yowes.net/youtube/download?url=${encodeURIComponent(ytUrl)}`, `https://downloader-six.vercel.app/api/getVideoInfo/?url=${encodeURIComponent(ytUrl)}`, `https://api.freedl.cc/api/info?query=${encodeURIComponent(ytUrl)}`, `https://yozora.vercel.app/api/info?query=${encodeURIComponent(ytUrl)}`];
  const fetchResults = await Promise.all(apiUrls.map(url => fetch(url).then(res => res.json().catch(() => null))));
  let result, mediaList;
  for (const data of fetchResults) {
    if (data?.urls) {
      result = data;
      mediaList = data.urls.filter(item => item.mimeType && _.startsWith(item.mimeType, mediaType === "video" ? "video/mp4" : "audio"));
      break;
    } else if (data?.formats) {
      result = data;
      mediaList = data.formats.filter(item => item.quality && item.url);
      break;
    }
  }
  if (!result || !mediaList.length) {
    throw new Error("Failed to fetch video info. No formats or urls available.");
  }
  const media = await Promise.all(mediaList.map(async item => {
    try {
      const mediaResponse = await fetch(item.url);
      const contentType = mediaResponse.headers.get("content-type");
      if (mediaResponse.ok && _.startsWith(contentType, mediaType === "video" ? "video" : "audio")) {
        return {
          url: item.url,
          buffer: Buffer.from(await mediaResponse.arrayBuffer())
        };
      }
    } catch {}
    return null;
  }));
  const validMedia = media.find(m => m);
  if (!validMedia) {
    throw new Error(`No valid ${mediaType}s found.`);
  }
  return {
    title: result.metadata?.title || result.title,
    ...validMedia
  };
}
async function ytsearch(query, maxResults = 5, similarityThreshold = .5) {
  try {
    const res = await yts(query);
    const videos = _.filter(res.videos.slice(0, maxResults), video => {
      const titleWords = _.words(_.toLower(video.title));
      const queryWords = _.words(_.toLower(query));
      const matchedWords = _.intersection(titleWords, queryWords);
      const similarity = _.size(matchedWords) / _.size(titleWords);
      return similarity >= similarityThreshold || _.size(matchedWords) >= _.size(queryWords) - 1;
    });
    return _.isEmpty(videos) ? {} : _.first(videos);
  } catch (e) {
    console.error(e);
    return {};
  }
}