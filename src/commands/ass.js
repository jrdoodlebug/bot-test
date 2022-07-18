const { ReactionUserManager } = require("discord.js");
const command = require("../structures/command")

module.exports = new command({
    name: "ass",
    descrption: "hehehe",
    permission: "SEND_MESSAGES",


    async run(message,args,client) {
        
        message.reply('https://open.spotify.com/track/1HyKEziXzDtvnlg3dTLos2?si=hi6OOsnsTCWyVGbbR7HEBg&utm_source=copy-link')
        }

}); 