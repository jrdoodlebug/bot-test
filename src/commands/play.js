
const { ReactionUserManager } = require("discord.js");
const {CommandInteraction, MessageEmbed} = require('discord.js');
const command = require("../structures/command");

const { distube } = require("distube")

module.exports = new command({
    name: "play",
    descrption: "music attempt",
    permission: "SEND_MESSAGES",
    

    async run(message,args,client) {
        const music = args.join(" ");

        client.distube.play(message, music)
        //
        }

});

