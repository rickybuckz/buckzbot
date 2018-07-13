const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = '!'
client.on('message', message => {
    if (message.author === client.user) return;
    if (message.content.startsWith(prefix + "gage")) {
        message.channel.send('is a scripting piece of shit');
      }
  });

var prefix = '!'
client.on('message', message => {
    if (message.author === client.user) return;
    if (message.content.startsWith(prefix + "chris")) {
        message.channel.send('look at this dumbass', {files:['C:/images/chris.jpg']});
    }
});



var prefix = '!'
client.on('message', message => {
    if (message.author === client.user) return;
    if (message.content.startsWith(prefix + "buckzop")) {
        message.channel.send('http://na.op.gg/summoner/userName=gandyribbs');
    }
});



var prefix = '!'
client.on('message', message => {
    if (message.author === client.user) return;
    if (message.content.startsWith(prefix + "gageop")) {
        message.channel.send('http://na.op.gg/summoner/userName=randygibbs');
    }
});



var prefix = '!'
client.on('message', message => {
    if (message.author === client.user) return;
    if (message.content.startsWith(prefix + "royaltyop")) {
        message.channel.send('http://na.op.gg/summoner/userName=senseiroyalty');
    }
});

client.login('NDY2ODc5MjE2MzQ5MDg1Njk3.DiievQ.UomYOhk2HtrUsmu18BYa3THT4yI')
