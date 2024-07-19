import {
  parsePhoneNumber
} from "awesome-phonenumber";
import _ from "lodash";
const handler = async (m, {
  conn
}) => {
  try {
    const chat = conn.chats[m.chat];
    const member = chat?.metadata?.participants;
    if (!member) {
      return m.reply("No participants found.");
    }
    const groupName = chat.metadata.subject;
    const participants = member.map(participant => {
      try {
        const regionCode = parsePhoneNumber("+" + participant.id).regionCode;
        return {
          countryName: regionCode ? new Intl.DisplayNames(["en"], {
            type: "region"
          }).of(regionCode) : "Unknown",
          regionCode: regionCode || "Unknown"
        };
      } catch {
        return {
          countryName: "Unknown",
          regionCode: "Unknown"
        };
      }
    });
    const groupedByCountry = _.groupBy(participants, "countryName");
    const totalUsers = _.sumBy(_.values(groupedByCountry), "length");
    const totalRegions = _.size(groupedByCountry);
    const regionMessage = _.map(groupedByCountry, (countryGroup, countryName) => {
      const regionCode = countryGroup[0].regionCode;
      const percentage = (countryGroup.length / totalUsers * 100).toFixed(2);
      return `│ *• Region :* ${countryName} *[ ${percentage}% ]*\n│ *• Total :* ${countryGroup.length} Member`;
    }).join("\n");
    const totalMessage = `┌─⭓「 *TOTAL MEMBER* 」\n│ *• Name :* ${groupName}\n│ *• Total :* ${totalUsers}\n│ *• Total Region :* ${totalRegions}\n└───────────────⭓\n\n`;
    const finalMessage = `${totalMessage}┌─⭓「 *REGION MEMBER* 」\n${regionMessage}\n└───────────────⭓`;
    return m.reply(finalMessage.trim());
  } catch (error) {
    console.error("Error in handler:", error);
    return m.reply("Terjadi kesalahan dalam mengolah data.");
  }
};
handler.help = ["totalmem", "totalmember"];
handler.tags = ["group"];
handler.command = /^(totalmem|totalmember)$/i;
handler.group = true;
export default handler;
