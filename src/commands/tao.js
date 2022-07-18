const { ReactionUserManager } = require("discord.js");
const command = require("../structures/command")

module.exports = new command({
    name: "tao",
    descrption: "hehehe",
    permission: "SEND_MESSAGES",


    async run(message,args,client) {
        
        message.channel.send('https://media.discordapp.net/attachments/755054753154859228/908146474137813002/1636589365-386796.gif')
        }

}); 