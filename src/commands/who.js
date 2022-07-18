const command = require("../structures/command")
const Discord = require('discord.js');

module.exports = new command({
    name: "who",
    descrption: "hehehe",
    permission: "SEND_MESSAGES",
    

    async run(message,args,client) {

        const {guild, channel} = message


        const user = message.mentions.users.first() || message.member.user
        const member = guild.members.cache.get(user.id)


        const embed = new Discord.MessageEmbed();

            embed.setTitle(`${member.user.tag}`)
            //.setColor('PINK')
            //.setAuthor(member.joinedAt.toUTCString())
            .setDescription(`<@${member.user.id}> joined on ${new Date(member.joinedTimestamp).toLocaleDateString()}`)
            .addFields(
            { name: 'id', value: `${member.user.id}` },
            { name: 'nickname', value: `${member.nickname}` },
            { name: 'joined', value: `${new Date(member.joinedTimestamp).toLocaleDateString()}` },
            { name: 'account created', value: `${new Date(member.user.createdTimestamp).toLocaleDateString()}` },
            { name: 'roles', value: `${member.roles.cache.size -1}` },
            )
            .setThumbnail(member.user.avatarURL({dynamic: true}))
            .setImage(`https://cdn.discordapp.com/banners/${member.user.id}/${member.user.banner}?size=4096`)
            .setTimestamp();

        channel.send({embeds: [embed]});

        /*
        let embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Server Info")
            .setImage(message.guild.iconURL)
            .setDescription(`${message.guild}'s information`)
            .addField("Owner", `The owner of this server is ${message.guild.owner}`)
            .addField("Member Count", `This server has ${message.guild.memberCount} members`)
            .addField("Emoji Count", `This server has ${message.guild.emojis.cache.size} emojis`)
            .addField("Roles Count", `This server has ${message.guild.roles.cache.size} roles`)
            

        message.channel.send(embed)
        */
        }


}); 