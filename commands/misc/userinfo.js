const Discord = require('discord.js');
const { Command } = require('discord.js-commando');
//const request = require("request");

module.exports = class ruleCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'userinfo',
            group: 'misc',
            memberName: 'userinfo',
            description: 'get info... on the user',
            examples: ['userinfo']
        });
    }

    run(msg, args) {

      


    }
};
