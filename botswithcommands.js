const Discord = require('discord.js');
const client = new Discord.Client();

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

    if (message.author.id === '229070685153132544'){
        let replies = ["SHEEESH", "Something", "One More Response"];
        let random = mMath.floor(Math.random() * 3);

        bot.sendMessage({
            to: ChannelSplitterNode,
            message: replies[random]
        });
    }

});

client.login('Discord key goes here');