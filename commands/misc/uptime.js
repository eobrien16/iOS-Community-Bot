const Discord = require('discord.js');
const { Command } = require('discord.js-commando');
const talkedRecently = new Set();

module.exports = class uptimeCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'uptime',
			group: 'misc',
			memberName: 'uptime',
			description: 'Get the uptime'

		});
	}

	async run(msg) {


    if (talkedRecently.has(msg.author.id)) {
            msg.channel.send("Wait 1 minute before typing this again. - " + msg.author)
              .then(botmsg => {
              botmsg.delete(1000)
          });

    } else {

      let totalSeconds = (this.client.uptime / 1000);
      let hours = Math.floor(totalSeconds / 3600);
      totalSeconds %= 3600;
      let minutes = Math.floor(totalSeconds / 60);
      let seconds = totalSeconds % 60;
      let uptime = `${hours} hours, ${minutes} minutes and ${seconds} seconds`;

    //  msg.channel.send(uptime);


      const embed = new Discord.RichEmbed()
     .setDescription(uptime)
     .setAuthor("Uptime")
     .setColor(0x007aff)
     .setTimestamp();
      msg.channel.send({embed});

        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(msg.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(msg.author.id);
        }, 60000);
    }
    msg.delete()





	}

};
