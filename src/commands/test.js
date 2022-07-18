/*const { ReactionUserManager } = require("discord.js");
const command = require("../structures/command")

module.exports = new command({
    name: "test",
    descrption: "hehehe",
    permission: "SEND_MESSAGES",


    async run(message,args,client) {
        var VC = message.member.voiceChannel;
//        if (!VC)
//          return message.reply("not in vc")
    VC.join()
        .then(connection => {
            const dispatcher = connection.playFile('./src/testsong.mp3');
            dispatcher.on("end", end => {VC.leave()});
        })
        .catch(console.error);
        }

}); 
*/