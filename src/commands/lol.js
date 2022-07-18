const { ReactionUserManager } = require("discord.js");
const command = require("../structures/command")
const Discord = require('discord.js');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');


module.exports = new command({
    name: "lol",
    descrption: "hehehe",
    permission: "SEND_MESSAGES",


    async run(message,args,client) {

        const embed = new Discord.MessageEmbed();

        embed.setTitle(`**League of Legends**`)
        .setDescription(`League is a great game!`)
        .addFields(
            { name: 'What is LOL?', value: 'League of Legends is a team-based strategy game where two teams of five powerful champions face off to destroy the other’s base. Choose from over 140 champions to make epic plays, secure kills, and take down towers as you battle your way to victory.' },
        )
        .setThumbnail('https://www.freepnglogos.com/uploads/lol-logo-png/league-of-legends-riot-games-logo-5.PNG')

        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setURL('https://signup.na.leagueoflegends.com/en/signup/redownload')
                    .setLabel('Download League of Legends!')
                    .setStyle('LINK'),
            );

        message.channel.send({embeds: [embed], components: [row]})

    }
}); 


