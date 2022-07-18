const { ReactionUserManager } = require("discord.js");
const command = require("../structures/command")

module.exports = new command({
    name: "store",
    descrption: "hehehe",
    permission: "SEND_MESSAGES",


    async run(message,args,client) {
        
        message.reply('**buy the exclusive chencil for only 5,000,000 tao points!**')
        }

}); 