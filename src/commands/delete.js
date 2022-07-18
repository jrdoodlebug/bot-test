/**

const { ReactionUserManager } = require("discord.js");
const command = require("../structures/command")
const { Permissions } = require('discord.js');


module.exports = new command({
    name: "delete",
    descrption: "hehehe",
    permission: "MANAGE_MESSAGES",
    

    async run(message,args,client) {
        
        const amount = args[1];
        if(!amount || isNaN(amount)) return message.reply(`i agree man. '${amount}' is for sure a real thing`);
        const amountparsed = parseInt(amount)

        if(amountparsed > 100) return message.reply(`i agree man. ${amountparsed} is for sure a real thing.`);

        message.channel.bulkDelete(amountparsed);

        message.channel.send(`${amountparsed} messages were deleted`);



}
}); 
 */