const command = require("../structures/command")
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');


module.exports = new command({
    name: "downloadleague",
    descrption: "hehehe",
    permission: "SEND_MESSAGES",
    

    async run(message,args,client) {
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setURL('https://signup.na.leagueoflegends.com/en/signup/redownload')
                    .setLabel('Download League of Legends!')
                    .setStyle('LINK'),
            );

        await message.reply({ content: 'you should download League of Legends!', components: [row] });
        }

}); 
