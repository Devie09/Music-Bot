const {
    OwnerID
} = require("../../config.js");

module.exports.run = (client, message, args, Discord) => {
    const Link = `https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`,
        Owner = `<@${OwnerID || "576893842058641412"}>`,
        Developer = "DevinDoodleDoo#2242";

    const Embed = new Discord.MessageEmbed()
        .setColor(client.Color)
        .setAuthor("Invite", message.author.avatarURL({
            dynamic: true
        }))
        .addField("Link", `[Click Me](${Link})`, true)
        .addField("Source Code (replit)", "[Click Me](https://replit.com/@DevinDoole/DJ-Rumba)", true)
        .addField("Developer", Developer, true)
        .setFooter(`Requested By ${message.author.username}`)
        .setTimestamp();

    return message.channel.send(Embed);
};

module.exports.help = {
    name: "invite",
    aliases: ["iv", "info"],
    cooldown: 7000,
    category: "Other",
    description: "Get Bot Invite Link & Other Info!",
    usage: "Invite",
    examples: ["invite"]
};