const Discord = require('discord.js');
const { Command } = require('discord.js-commando');
const talkedRecently = new Set();

module.exports = class hmmmCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'hmmm',
			group: 'misc',
			memberName: 'hmmm',
			description: 'Pewdiepie hmmm??'

		});
	}

	async run(msg) {


    if (talkedRecently.has(msg.author.id)) {
            msg.channel.send("Wait 1 minute before typing this again. - " + msg.author)
              .then(botmsg => {
              botmsg.delete(1000)
          });

    } else {

      const embed = new Discord.RichEmbed()
     .setImage("https://media.discordapp.net/attachments/457612697358434315/458265468747251724/image.jpg")
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
