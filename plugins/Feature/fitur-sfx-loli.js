import fetch from "node-fetch";
const handler = async (m, {
  conn,
  text,
  usedPrefix,
  command
}) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender,
    pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom()),
    name = conn.getName(who),
    sololi = ["a", "abduzcan", "A bueno adios master", "admin-calzones", "admin", "antilink", "Ara", "asen", "Banate", "baneado", "basado", "bien-pensado-woody", "Bienvenido", "Blackpink in your area", "boanoite", "boatarde", "bot", "Buenas noches", "Buenos-dias-2", "bueno si", "Calla Fan de BTS", "callese", "Cambiate a Movistar", "cancion", "cancion2", "chica lgante", "comandogrupo", "concha tu madre", "contexto", "Corte Corte", "creador", "cuenta", "desamor", "descarga", "detengase admin", "DiagnosticadoConGay", "dylan1", "el amor", "Elmo", "Elmo sabe donde vives", "el pepe", "el rap de fernanfloo", "El Toxico", "entrada-epica-al-chat", "Eres Fuerte", "Es putoo", "Esta Zzzz", "esto va a hacer epico papus", "esto va para ti", "estupido", "Feliz cumple", "fiesta", "Fiesta1", "fino-senores", "fiu", "flash", "gay2", "gemi2", "gime Bot", "hablar primos", "hentai", "hola", "Homero chino", "infobot", "insultar", "invocar", "jai", "jesucristo", "joder", "juegos", "la-voz-de-hombre", "la bebecita", "la mamare", "Las reglas del grupo", "listas", "maau1", "masivo-cancion", "me-pican-los-cocos", "Me anda buscando anonymous", "medescarg", "menu", "mmm", "Momento equisde", "moshi moshi", "Motivacion", "Muchachos", "Nico Nico", "niconico", "no-digas-eso-papu", "Noche", "no chu", "no funciona", "no me hables", "no me hagas usar esto", "No Rompas Mas", "no soy pati", "nos vale", "Nuevo audio", "ohayo", "omaiga", "Onichan", "ora", "orale", "otaku", "Oxxo", "pato", "pero-esto-ya-es-otro-nivel", "pikachu", "pokemon", "Porque ta tite", "Potaxio", "Primo", "que linda noche", "Que tal Grupo", "rawr", "risa", "sabosito", "Se estan riendo de mi", "sempai", "siu", "Su nivel de pendejo", "sus", "suspenso", "Tal vez", "Te-amo", "te elimino", "Te gusta el Pepino", "temon", "te pasas", "te sabes", "Todo bien", "toma", "trabajo", "Traigan le una falda", "triste enojada toy", "Tu", "tunometecabrasaramambiche", "una-pregunta", "usted esta detenido", "UwU", "vengo", "verdad-que-te-engane", "vete a la verga", "viernes", "violin", "vivan", "wtf", "Ya antojaron", "Yamete-kudasai", "Y este quien es", "yokese", "yoshi-cancion"].getRandom();
  try {
    let sound = `https://raw.githubusercontent.com/elrebelde21/The-LoliBot-MD/main/media/${sololi}.mp3`;
    await conn.sendFile(m.chat, sound, sololi + ".mp3", "", m, null, {
      fileLength: fsizedoc,
      seconds: fsizedoc,
      contextInfo: {
        mimetype: "audio/mp4",
        externalAdReply: {
          mediaUrl: sig,
          mediaType: 2,
          description: wm,
          title: "👋 Hai, " + name + " " + ucapan,
          body: botdate,
          thumbnail: await (await fetch(pp)).arrayBuffer(),
          sourceUrl: sound
        }
      }
    });
  } catch (e) {
    return m.reply("Error kan");
  }
};
handler.customPrefix = /^(haaa)$/i, handler.command = new RegExp();
export default handler;
