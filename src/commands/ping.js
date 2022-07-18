const { ReactionUserManager } = require("discord.js");
const command = require("../structures/command")

module.exports = new command({
    name: "ping",
    descrption: "hehehe",
    permission: "SEND_MESSAGES",
    

    async run(message,args,client) {
        
        const msg = await message.reply(`ping: ${client.ws.ping} ms.`);

        msg.edit(`ping: ${client.ws.ping} ms. \nmessage ping: ${msg.createdTimestamp - message.createdTimestamp} ms.`)
        }

}); 