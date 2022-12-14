const Discord = require('discord.js');
const client = new Discord.Client();

let replies = ["Something goes here"];
let random = mMath.floor(Math.random() * 3);

const prefix = '-';
const fs = require('fs');

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./commands/${file}`)

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('JustinBot is now on!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase()

    if (msg.content === "!justinbot"){
        msg.reply(random);

    }else if (command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }

});

client.login('key goes here!');