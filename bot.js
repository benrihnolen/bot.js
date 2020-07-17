const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong') {

       }
     
     client.login(process.env.i5W1eUKaOzyMIE8x15_J1CA11rjJ_hI4);

});
