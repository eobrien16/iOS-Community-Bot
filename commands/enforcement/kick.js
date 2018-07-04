const Discord = require('discord.js');
const { Command } = require('discord.js-commando');
//const request = require("request");

module.exports = class kick extends Command {
    constructor(client) {
        super(client, {
            name: 'kick',
            group: 'enforcement',
            memberName: 'kick',
            description: 'Kick that gdmfsob',
            examples: ['kick [username]']
        });
    }

    run(msg, args) {
        message.delete(0);
        if(!message.member.roles.some(r=>["Admins", "Mods", "Bot Managers"].includes(r.name)) )
          message.channel.send({embed: {
            color: 16711680,
            description: "***Your not a high enough rank you inbred piece of shit.***"
          }})
    
        member = message.mentions.members.first() || message.guild.members.get(args[0]);
        if(!member)
          message.channel.send({embed: {
            color: 16711680,
            description: "***Pick a member you fucking vegetable.***"
          }})
        if(!member.kickable)
          message.channel.send({embed: {
            color: 16711680,
            description: "***Don't try to kick higher ranks fucknut.***"
          }})
        reason = args.slice(1).join(' ');
        if(!reason) reason = "No reason provided";
          user = message.mentions.users.first();
          member.kick(reason)
            .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
          for (i = 0; i <= 1; i++){
            message.guild.channels.find("name", "public-mod-logs").send({embed: {
              color: 1638655,
              title: "Member Kicked",
              thumbnail: {
                url: user.avatarURL
              },
              fields: [{
                  name: "Member",
                  value: arguments[1]
                },
                {
                  name: "Moderator",
                  value: `${message.author}`
                },
                {
                  name: "Reason",
                  value: reason
                }
              ],
              timestamp: new Date(),
              footer: {
                icon_url: client.user.avatarURL,
                text: "~~EOBot~~ iOS Community ModUtils"
              }
            }})
    }
    }
};
