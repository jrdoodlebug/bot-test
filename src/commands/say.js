const command = require("../structures/command")

module.exports = new command({
    name: "say",
    descrption: "hehehe",
    permission: "SEND_MESSAGES",
    

    async run(message,args,client) {
        if(!args[1]) return('fuk u ')

        message.delete()

        message.channel.send(args.slice(1).join(" "));
        }


}); 