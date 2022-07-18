
const { ReactionUserManager } = require("discord.js");
const command = require("../structures/command")

module.exports = new command({
    name: "bomb",
    descrption: "hehehe",
    permission: "SEND_MESSAGES",
    

    async run(message,args,client) {


        message.delete()
        message.channel.send('https://tenor.com/view/vasu-gif-5203484')
        message.channel.send(`<@${message.author.id}> just bombed ur house irl`)
        }

}); 
