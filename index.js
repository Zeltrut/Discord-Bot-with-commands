const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'token goes here';

bot.on('ready', () => {
    console.log('random response is on!');
})
let replies = ["SHEEESH", "nice", ":0"];
let random = Math.floor(Math.random() * 3);

bot.on('message', msg=>{
    if (msg.content === "poggers"){
        msg.reply(random);
    }

})

bot.login(token);