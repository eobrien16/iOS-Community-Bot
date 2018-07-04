const { authToken, embedColor, prefix } = require('./config');
const { CommandoClient } = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
    commandPrefix: prefix,
    owner: '211160171945263105',
    disableEveryone: true,
    unknownCommandResponse: false,
    embedColor: embedColor
});



client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['misc', 'All the stuff']
        ['enforcement', 'Maintaining order']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands({
      help: false
    })
    .registerCommandsIn(path.join(__dirname, 'commands'));


    client.on('ready', () => {
        console.log('Logged in!');
        client.user.setActivity('iOS Bot | prefix: /');
    });
client.login(authToken);
