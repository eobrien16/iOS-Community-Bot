const Discord = require('discord.js');
const { Command } = require('discord.js-commando');
//const request = require("request");

module.exports = class ruleCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'allrules',
            group: 'misc',
            memberName: 'allrules',
            description: 'Fetches all rules.',
            examples: ['allrules']
        });
    }

    run(msg, args) {

      var request = require("request");
      var url = "https://raw.githubusercontent.com/S0n1cDev/iOS-Discord/master/rules.json";

      request({
          url: url,
          json: true
      }, function (error, response, body) {

          if (!error && response.statusCode === 200) {

            Object.keys(body).forEach(function(key) {
              if(!isNaN(key)) {
                var author = "Rule #"+ key;
              } else {
                var author = key;
              }

              const embed = new Discord.RichEmbed()
              .setDescription(body[key])
              .setAuthor(author)
              .setColor(0x007aff)
          //   .setTimestamp();
            msg.channel.send({embed});
            })



          }
        })
      }
    };
