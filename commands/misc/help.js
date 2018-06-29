const Discord = require('discord.js');
const { Command } = require('discord.js-commando');

module.exports = class helpCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'help',
			group: 'misc',
			memberName: 'help',
			description: 'Displays a list of available commands, or detailed information for a specified command.'

		});
	}

	async run(msg, args) {
    const { text } = args;


  const embed = new Discord.RichEmbed()
 .setDescription("hi")
 .setAuthor("S0n1c")
 .setColor(0x00AE86)
 .setTimestamp();
  msg.channel.send({embed});

	}

};
