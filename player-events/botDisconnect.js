const Discord = require('discord.js');
const config = require('../configs/config.json');

module.exports = (client, message, queue) => {
	const embed = new Discord.MessageEmbed()
	.setTitle('PIKACHU Disconnected!')
	.setDescription(`${client.emotes.error} - Music stopped as i have been disconnected from the channel !`)
	.setFooter('PIKACHU')
	.setColor(config.embedcolor)
	.setTimestamp();
    message.channel.send(embed);

};