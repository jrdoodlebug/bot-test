const command = require("../structures/command")
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');


module.exports = new command({
    name: "taoternative",
    descrption: "hehehe",
    permission: "SEND_MESSAGES",
    

    async run(message,args,client) {

        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setURL('https://discord.com/oauth2/authorize?client_id=931585385589514291&scope=bot&permissions=1099511627767')
                .setLabel('add taoternative')
                .setStyle('LINK'),
            new MessageButton()
                .setURL('https://www.instagram.com/taoternative/')
                .setLabel('taoternative instagram')
                .setStyle('LINK'),
        );

    await message.reply({ content: 'I am taoternative!! I <3 league!', components: [row] });
    message.react('❤');
        }

}); 


//https://www.instagram.com/taoternative/
//https://discord.com/oauth2/authorize?client_id=931585385589514291&scope=bot&permissions=1099511627767