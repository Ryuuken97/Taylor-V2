import {
  readFileSync,
  watchFile,
  unwatchFile
} from "fs";
import chalk from "chalk";
import {
  fileURLToPath
} from "url";
import moment from "moment-timezone";
moment.locale("id");
import colors from "colors";
import {
  WA_DEFAULT_EPHEMERAL
} from "@whiskeysockets/baileys";
const {
  cosplay,
  mountain,
  dynamic,
  flamming,
  galau,
  estetik,
  noelThumb,
  waifu,
  boneka
} = JSON.parse(readFileSync("./json/image/image.json"));
const imgSource = ["https://api.btstu.cn/sjbz/api.php?lx=1920x1080", "https://img.xjh.me/random_img.php?type=bg&ctype=acg&return=302&device=web", "https://minimalistic-wallpaper.demolab.com/?random", "https://www.loremflickr.com/1920/1080", "https://www.picsum.photos/1920/1080", "https://www.placebear.com/1920/1080", "https://www.placebeard.it/1920/1080"];
async function loadConfig() {
  try {
    colors.setTheme({
        main: ["brightBlue", "bold"],
        silly: "rainbow",
        input: "grey",
        verbose: "cyan",
        prompt: "grey",
        info: "green",
        data: "grey",
        help: "cyan",
        warn: "yellow",
        debug: "blue",
        error: "brightRed"
      }), global.owner = [
        ["6283897994452", "️𝙍𝙮𝙪𝙪𝙠𝙚𝙣 - 𝙊𝙬𝙣𝙚𝙧", !0]
      ],
      global.mods = ["6283897994452"], global.prems = ["6283897994452"], global.APIs = {
        amel: "https://melcanz.com",
        bg: "http://bochil.ddns.net",
        dhnjing: "https://dhnjing.xyz",
        fdci: "https://api.fdci.se",
        hardianto: "https://hardianto.xyz",
        lolhuman: "https://api.lolhuman.xyz",
        neoxr: "https://api.neoxr.eu",
        pencarikode: "https://pencarikode.xyz",
        zeks: "https://api.zeks.xyz",
        zenz: "https://api.zahwazein.xyz",
        btchx: "https://api.botcahx.eu.org"
      }, global.APIKeys = {
        "https://api.neoxr.eu": pickRandom(["5VC9rvNx", "lucycat"]),
        "https://api.lolhuman.xyz": pickRandom(["043c5de3b7cd6b1b8f2a0f90", "e1a815979e6adfc071b7eafc", "ed78c137a46873c5b8e5fe3b", "IchanZX", "GataDios", "elainaai"]),
        "https://api.zeks.xyz": "apivinz",
        "https://hardianto.xyz": "hardianto",
        "https://melcanz.com": "manHkmst",
        "https://pencarikode.xyz": "pais",
        "https://api.zahwazein.xyz": "zenzkey_1ec92f71d3bb",
        "https://api.botcahx.eu.org": "ngGdhzHk"
      }, global.lolkey = pickRandom(["043c5de3b7cd6b1b8f2a0f90", "e1a815979e6adfc071b7eafc", "ed78c137a46873c5b8e5fe3b", "IchanZX", "GataDios", "elainaai"]),
      global.prodiaKey = ["dc80a8a4-0b98-4d54-b3e4-b7c797bc2527"], global.nomorbot = "6285198276345",
      global.nomorown = "6283897994452", global.namebot = " 𝙉𝙤𝙚𝙡 𝙉𝙞𝙞𝙝𝙖𝙨𝙝𝙞 のえる あ⁩ ", global.nameown = "「 𝙍𝙮𝙪𝙪𝙠𝙚𝙣 」",
      global.pmenus = pickRandom(["乂", "◈", "➭", "ଓ", "⟆•", "⳻", "•", "↬", "◈", "⭑", "ᯬ", "◉", "᭻", "»", "〆", "々", "⛥", "✗", "⚜", "⚚", "♪"]),
      global.htjava = pickRandom(["乂", "⛶", "❏", "⫹⫺", "☰", "⎔", "✦", "⭔", "⬟", "⛊", "⚝"]),
      global.wm = "         「 𝙉𝙤𝙚𝙡 𝙉𝙞𝙞𝙝𝙖𝙨𝙝𝙞 のえる あ⁩ 」", global.wm2 = "꒷︶꒷꒥꒷ ‧₊˚ ꒰ฅ˘օառɛʀ˘ฅ ꒱ ‧₊˚꒷︶꒷꒥꒷",
      global.wm3 = htjava + " 𝙉𝙤𝙚𝙡 𝙉𝙞𝙞𝙝𝙖𝙨𝙝𝙞 のえる", global.giflogo = VideoGalau(), global.fla = pickRandom(ImgLogoFlam()),
      global.flaaa = ImgLogoFlam(), global.brandc = ImgLogoDynamic(), global.sig = "https://www.instagram.com/ryuuken97",
      global.sgh = "https://www.github.com/Ryuuken97", global.sgc = "https://s.id/noelai",
      global.sdc = "https://www.ryuuken.xyz", global.snh = "https://www.tiktok.com/ryuuken97",
      global.sfb = "https://www.facebook.com/ryuuken97", global.syt = "https://www.ryuuken.xyz",
      global.premnsfw = !0, global.dpptx = "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      global.ddocx = "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      global.dxlsx = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      global.dpdf = "application/pdf", global.drtf = "text/rtf", global.fsizedoc = SizeDoc(),
      global.fpagedoc = PageDoc(), global.dmenut = htjava + "───『", global.dmenub = "│" + pmenus,
      global.dmenub2 = "│" + pmenus, global.dmenuf = "╰──────────⳹", global.dashmenu = "☰ *D A S B O A R D* ☰",
      global.htki = htjava + "───『", global.htka = "』───" + htjava, global.hwaifu = ImgWaifu(),
      global.hbeach = ImgCosplay(), global.thumbnailUrl = ImgBoneka(), global.hoppai = ImgCosplay(),
      global.hloli = ImgCosplay(), global.hyuri = ImgCosplay(), global.hneko = ImgCosplay(),
      global.hLokun = ImgCosplay(), global.hbunny = ImgCosplay(), global.thumbs = ImgBoneka(),
      global.thumb = pickRandom([...imgSource, ImgNoelThumb()]), global.imagebot = pickRandom([...imgSource, ImgMountain()]),
      global.thumbdoc = pickRandom([...imgSource, ImgNoelThumb()]), global.logo = pickRandom([...imgSource, ImgMountain()]),
      global.ucapan = Pagi(), global.ephemeral = WA_DEFAULT_EPHEMERAL, global.doc = pickRandom(["application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.ms-excel", "application/msword", "application/pdf", "text/rtf"]),
      global.knimg = pickRandom([...imgSource, ImgMountain()]), global.lopr = "🅟",
      global.lolm = "Ⓛ", global.cmenut = htjava + "───『", global.cmenuh = "』───" + htjava,
      global.cmenub = "│" + pmenus, global.cmenuf = "╰──────────⳹", global.cmenua = "\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ",
      global.emojis = pickRandom(["👑", "🎗", "️🗿", "🕹", "️💡", "🪄", "🎈", "🎊", "🔖", "📍", "❤", "‍🔥", "💤", "💭", "🕚", "💬", "🚩", "🎐", "🍃", "🌿", "🥀", "✨", "⚡", "☂️"]),
      global.packname = "𝑴𝒂𝒅𝒆 𝒃𝒚", global.stickpack = packname, global.author = "𝙉𝙤𝙚𝙡 乂 𝙍𝙮𝙪𝙪𝙠𝙚𝙣",
      global.stickauth = author + "\nwa.me/" + nomorbot, global.multiplier = 69,
      global.eror = pickRandom(["❌", "🚫", "💥", "❎"]), global.wait = pickRandom(["⏳", "⌛", "⏰", "⏱️"]),
      global.sukses = pickRandom(["✨", "🌟", "🎉", "🥳", "✅", "👍"]), global.render = pickRandom(["_*`Rendering 📍`*_", "_*`Processing 📍`*_", "_*`Generating content 📍`*_"]),
      global.webs = "https://www.ryuuken.xyz", global.gcwangsaf = "https://s.id/noelai",
      global.saweria = "https://saweria.com/Ryuuken97", global.dana = "083897994452",
      global.pulsa = "083897994452", global.trakteer = "https://trakteer.id/ryuuken97",
      global.paypal = "wannngmg77@mail.com", global.gopay = "083897994452", global.pdana = "083897994452",
      global.povo = "083897994452", global.pgopay = "083897994452", global.ppulsa = "083897994452",
      global.ppulsa2 = "083117382284", global.psaweria = "https://saweria.com/Ryuuken97",
      global.rpg = {
        emoticon(string) {
          string = string.toLowerCase();
          const emot = {
              Fox: "🦊",
              agility: "🤸‍♂️",
              anggur: "🍇",
              apel: "🍎",
              aqua: "🥤",
              arc: "🏹",
              armor: "🥼",
              bank: "🏦",
              batu: "🧱",
              berlian: "💎",
              bibitanggur: "🍇",
              bibitapel: "🍎",
              bibitjeruk: "🍊",
              bibitmangga: "🥭",
              bibitpisang: "🍌",
              botol: "🍾",
              bow: "🏹",
              bull: "🐃",
              cat: "🐈",
              centaur: "🎠",
              chicken: "🐓",
              coal: "⚱️",
              common: "📦",
              cow: "🐄",
              crystal: "🔮",
              darkcrystal: "♠️",
              diamond: "💎",
              dog: "🐕",
              dragon: "🐉",
              eleksirb: "🧪",
              elephant: "🐘",
              emasbatang: "🪙",
              emasbiasa: "🥇",
              emerald: "💚",
              exp: "✉️",
              fishingrod: "🎣",
              foodpet: "🍱",
              fox: "🦊",
              gardenboc: "🗳️",
              gardenboxs: "📦",
              gems: "🍀",
              giraffe: "🦒",
              gold: "👑",
              griffin: "🦒",
              health: "❤️",
              healtmonster: "❤‍🔥",
              horse: "🐎",
              intelligence: "🧠",
              iron: "⛓️",
              jeruk: "🍊",
              kaleng: "🥫",
              kardus: "📦",
              kayu: "🪵",
              ketake: "💿",
              keygold: "🔑",
              keyiron: "🗝️",
              knife: "🔪",
              koinexpg: "👛",
              kucing: "🐈",
              kuda: "🐎",
              kyubi: "🦊",
              legendary: "🗃️",
              level: "🧬",
              limit: "🌌",
              lion: "🦁",
              magicwand: "⚕️",
              makanancentaur: "🥗",
              makanangriffin: "🥙",
              makanankyubi: "🍗",
              makanannaga: "🍖",
              makananpet: "🥩",
              makananphonix: "🧀",
              mana: "🪄",
              mangga: "🥭",
              money: "💵",
              mythic: "🗳️",
              mythic: "🪄",
              naga: "🐉",
              pancingan: "🎣",
              pet: "🎁",
              petFood: "🍖",
              phonix: "🦅",
              pickaxe: "⛏️",
              pisang: "🍌",
              pointxp: "📧",
              potion: "🥤",
              rock: "🪨",
              robo: "🤖",
              rubah: "🦊",
              sampah: "🗑️",
              serigala: "🐺",
              snake: "🐍",
              stamina: "⚡",
              strength: "🦹‍♀️",
              string: "🕸️",
              superior: "💼",
              sword: "⚔️",
              tiger: "🐅",
              tiketcoin: "🎟️",
              trash: "🗑",
              umpan: "🪱",
              uncommon: "🎁",
              upgrader: "🧰",
              wood: "🪵"
            },
            results = Object.keys(emot).map(v => [v, new RegExp(v, "gi")]).filter(v => v[1].test(string));
          return results.length ? emot[results[0][0]] : "";
        }
      };
  } catch (err) {
    console.error(`Error in Load Config: ${err.message}`);
  } finally {
    setTimeout(loadConfig, 9e5);
  }
}
export {
  loadConfig
};
const file = fileURLToPath(import.meta.url);

function Pagi() {
  const waktunya = moment.tz("Asia/Jakarta").format("HH");
  return waktunya >= 24 ? "Selamat Begadang 🗿" : waktunya >= 18 ? "Selamat malam 🌙" : waktunya >= 15 ? "Selamat sore 🌅" : waktunya > 10 ? "Selamat siang ☀️" : waktunya >= 4 ? "Selamat pagi 🌄" : "Selamat Pagi 🗿";
}

function pickRandom(list) {
  const shuffledList = list.slice().sort(() => Math.random() - .5);
  return shuffledList[Math.floor(Math.random() * shuffledList.length)];
}

function ImgCosplay() {
  return cosplay;
}

function ImgMountain() {
  return pickRandom(mountain);
}

function ImgLogoDynamic() {
  return dynamic.map(id => `https://dynamic.brandcrowd.com/asset/logo/${id}/logo?v=4&text=`);
}

function ImgLogoFlam() {
  return flamming.map(id => `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=${id}&doScale=true&scaleWidth=480&scaleHeight=240&fontsize=120&backgroundColor=%23000300&shadowType=2&text=`);
}

function VideoGalau() {
  return `https://telegra.ph/file/${pickRandom(galau)}.mp4`;
}

function ImgEstetik() {
  return pickRandom(estetik);
}

function ImgNoelThumb() {
  return pickRandom(noelThumb);
}

function ImgWaifu() {
  return waifu;
}

function ImgBoneka() {
  return boneka;
}

function Sapa() {
  return pickRandom(["Apa kabar ", "Halo ", "Hai "]);
}

function SizeDoc() {
  return Math.pow(10, 15);
}

function PageDoc() {
  return Math.pow(10, 10);
}

function businessOwnerJid() {
  return pickRandom([pickRandom([global.nomorown, "0", "6283897994452", "6283117382284"]) + "@s.whatsapp.net"]);
}
watchFile(file, () => {
  unwatchFile(file), console.log(chalk.redBright("Update config.js")), import(`${file}?update=${Date.now()}`);
});
