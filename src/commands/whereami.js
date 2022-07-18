const command = require("../structures/command")
const Discord = require('discord.js');

module.exports = new command({
    name: "whereami",
    descrption: "hehehe",
    permission: "SEND_MESSAGES",
    

    async run(message,args,client) {

/*message.channel.send(`
server: ${message.guild} 
id: ${message.guild.id}
members: ${message.guild.memberCount}
roles: ${message.guild.roles.cache.size}'
`)*/

const {guild, channel} = message;

const embed = new Discord.MessageEmbed();


    embed.setTitle(`${message.guild}`)
    //.setColor('PINK')
    //.setAuthor(member.joinedAt.toUTCString())
    .setDescription(`${message.guild} created on ${message.guild.createdAt.toDateString()}`)
    .addFields(
    { name: 'id', value: `${message.guild.id}` },
    { name: 'members', value: `${message.guild.memberCount}` },
    { name: 'roles', value: `${message.guild.roles.cache.size}` },
    //{ name: 'owner', value: `<@${message.guild.owner.user.tag}>` },
    //{ name: 'where', value: `${message.guild.region}` },

    )
    .setThumbnail(message.guild.iconURL({dynamic: true}))
    .setTimestamp();

    channel.send({embeds: [embed]});
/*
    const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setURL('https://signup.na.leagueoflegends.com/en/signup/redownload')
                    .setLabel('Download League of Legends!')
                    .setStyle('LINK'),
            );


    await message.channel.send({ content: {embeds: [embed]}, components: [row] });

*/

        }


}); 