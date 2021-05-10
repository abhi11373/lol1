const Discord = require('discord.js');
const config = require('../../configs/config.json');


module.exports = {
    config: {
        name: 'invite',
        description: 'Link to invite me',
        aliases: [""],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setThumbnail(client.user.avatarURL())
    .setDescription(
      "**PIKACHU** \n\n**👋 Hey!\n Do you want Invite me? [Click Here](https://discord.com/api/oauth2/authorize?client_id=807963056805118042&permissions=2147086199&scope=bot) to Invite me!\nThanks for supporting me.** ❤️"
    )
    .addField(
      "Support Link: ",
      `**[Click Here!](NOT AVAILABLE)**`,
      true
    )
    .addField(
      "Vote Link:",
      `**[Click Here!](COMING SOON)**`,
      true
    )
    .setTimestamp()
    .setFooter(
      "ABHI"
    )
    .setColor(config.embedcolor);
    message.channel.send(embed)
    }
}

