const Discord = require('discord.js');
const { Command } = require('discord.js-commando');
//const request = require("request");

module.exports = class ruleCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'rule',
            group: 'misc',
            memberName: 'rule',
            description: 'Fetches a rule.',
            examples: ['rule']
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
            //console.log(body);

          //  var rainbow = {"0x2769d1", "0x41d127", "0xd1be27", "0xd17927", "0xd12727", "0x2769d1", "0x41d127", "0xd1be27", "0xd17927", "0xd12727", "0x2769d1", "0x41d127", "0xd1be27", "0xd17927", "0xd12727", "0x2769d1"};

            var newRules = {};


            const embed = new Discord.RichEmbed()
             .setDescription(body[args])
             .setAuthor("Rule #"+ args)
             .setColor(0x007aff)

            msg.channel.send({embed});




          }
      })


      //  console.log(text);
    }
};
