console.clear()

const Discord = require('discord.js');

const Client = require("./structures/client.js")

const config = require("./data/config");

const client = new Client();

client.commands = new Discord.Collection();


const { DisTube } = require("distube");
const { distube } = require("distube");
const { SpotifyPlugin } = require("@distube/spotify");


const fs = require('fs');
const { channel } = require('diagnostics_channel');

fs.readdirSync("./src/commands").filter(file => file.endsWith(".js")).forEach(file =>{

    const command = require(`./commands/${file}`)
    console.log(`Command ${command.name} loaded`)
    client.commands.set(command.name, command);

});

client.on('ready', () =>{
	console.log((`${client.user.username} is online`));
//LISTENING, PLAYING, WATCHING, LISTENING, STREAMING, COMPETING
client.user.setActivity(' League of Legends', { type: "PLAYING"});
});

client.on('messageCreate', message => {



    const { Permissions } = require('discord.js');

    //const permission = message.memeber.Permissions.has(command.permission)

    //if(!permission) return message.reply(`no ${command.permission} perms`)


    if (!message.content.startsWith(config.prefix)) return;

    const args = message.content.substring(config.prefix.length).split(/ +/);

    const command = client.commands.find(cmd => cmd.name == args[0]);

    if(message.content == ';loop') return
    if(message.content == ';stop') return
    if(message.content == ';nightcore') return
    if(message.content == ';leave') return
    if(message.content == ';resume') return
    if(message.content == ';pause') return
    if(message.content == ';skip') return
    if(message.content == ';queue') return
    if(message.content == ';volume') return
    if(message.content == ';3d') return
    if(message.content == ';bassboost') return
    if(message.content == ';echo') return
    if(message.content == ';karaoke') return
    if(message.content == ';vaporwave') return





    //`3d`, `bassboost`, `echo`, `karaoke`, `nightcore`, `vaporwave`

    if (!command) {return message.reply(`i agree man. '${args[0]}' is for sure a real thing`)
}

    command.run(message, args, client);
});

client.on('messageCreate', message => {

    const lolwords = ['lol','LOL','Lol','LoL','LOl','lOL']

    var content = message.content;
    var stringToCheck = content.replace(/\s+/g, '').toLowerCase();

    var content = message.content;
    var stringToCheck = content.replace(/\s+/g, '').toLowerCase();

    const musicwords = ['play','loop','stop','leave','resume','pause', "skip", "queue"]

    if(message.author.bot) return
    if (content.includes(musicwords[i])) return


    for (var i = 0; i < lolwords.length; i++) {
        if(message.author.bot) return
        if(message.content == ';lol') return
        if (content.includes(lolwords[i])){  
            message.channel.send('did i hear league of legends?!');
            message.react('841848837030150154');
            //message.react('905602846785933312');
            message.react('891135117043572758')
            break
        }
    }
})

client.on('messageCreate', message => {

    const taoword = ['tao', 'Tao', 'TAO', 'tAO','TAo', 'TaO', 'taoternative','TAOTERNATIVE','TAOternative']

    var content = message.content;
    var stringToCheck = content.replace(/\s+/g, '').toLowerCase();

    var content = message.content;
    var stringToCheck = content.replace(/\s+/g, '').toLowerCase();
    if(message.author.bot) return

    for (var i = 0; i < taoword.length; i++) {
        if(message.author.bot) return
        if (content.includes(taoword[i])){  
            message.react('905602559971037304');
            break
        }
    }
})


client.on('guildMemberAdd', member => {
    const embed = new Discord.MessageEmbed();

    const channel = client.channels.cache.get('890404257579290696');
    
    embed.setTitle(`new friend! ${member.user.tag}`)
        //.setColor('PINK')
        //.setAuthor(member.joinedAt.toUTCString())
        .setDescription(`<@${member.user.id}> joined at ${member.joinedAt.toUTCString()}`)
        .setThumbnail(member.user.avatarURL({dynamic: true}))
        .setTimestamp(member.joinedTimestamp);

    channel.send({embeds: [embed]});
}
);


client.distube = new DisTube(client, {
    emitNewSongOnly: true,
    leaveOnFinish: true,
    emitAddSongWhenCreatingQueue: false,
    plugins: [new SpotifyPlugin()]
});
module.exports = client;

client.on("messageCreate", message => {
    if (message.author.bot) return
    if (!message.content.startsWith(config.prefix)) return
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
    const command = args.shift()

    if (["repeat", "loop"].includes(command)) {
        const mode = client.distube.setRepeatMode(message)
        message.channel.send(`set repeat mode to \`${mode ? (mode === 2 ? "all queue" : "this song") : "off"}\` <:mike:841848837030150154>`)
    }

    if (command === "stop") {
        client.distube.stop(message)
        message.channel.send(`stopped music <:mike:841848837030150154>`)
    }

    if (command === "leave") {
        client.distube.voices.get(message)?.leave()
        message.channel.send(`leaved vc <:mike:841848837030150154>`)
    }

    if (command === "resume") {
        client.distube.resume(message)
        message.channel.send(`resumed music <:mike:841848837030150154>`)}

    if (command === "pause") {
        client.distube.pause(message)
        message.channel.send(`paused music <:mike:841848837030150154>`)}

    if (command === "skip") {
        client.distube.skip(message)
        message.channel.send(`skipped song <:mike:841848837030150154>`)}

    if (command === "queue") {
        const queue = client.distube.getQueue(message)
        if (!queue) {
            message.channel.send("nothing in queue <:mike:841848837030150154>")
        } else {
            message.channel.send(
                `<:mike:841848837030150154> queue:\n${queue.songs
                    .map((song, id) => `**${id ? id : "playing"}**. ${song.name} - \`${song.formattedDuration}\``)
                    .slice(0, 10)
                    .join("\n")}`
            )
        }
    }

    if (command === "volume") {
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`nothing in the queue`)
        const volume = parseInt(args[0])
        if (isNaN(volume)) return message.channel.send(`enter number`)
        queue.setVolume(volume)
        message.channel.send(`volume set to \`${volume}\``)
    }

    if ([`3d`, `bassboost`, `echo`, `karaoke`, `nightcore`, `vaporwave`].includes(command)) {
        const filter = client.distube.setFilter(message, command)
        message.channel.send(`current filter: ${filter.join(", ") || "off <:mike:841848837030150154>"}`)
    }
})

/*
const ayeeee = new Discord.MessageEmbed();
ayeeee.setTitle(`thing`)
    .setAuthor('taoternative')
    .setDescription(`playing \`${song.name}\``)
    .addFields(
        { name: 'playing', value: `\`${song.name}\`` },
        { name: 'time', value: `\`${song.formattedDuration}\`` },
        { name: 'played by', value: `${song.user}`},
        )
    .setThumbnail('https://cdn.discordapp.com/attachments/784985651502120971/936059190886166538/148-1489169_transparent-mike-wazawski-with-two-eyes-mike-wazowski.png')
    .setImage(`https://cdn.discordapp.com/banners/${member.user.id}/${member.user.banner}?size=4096`)
    .setTimestamp();
*/

const status = queue =>
    `volume: \`${queue.volume}%\` | filter: \`${queue.filters.join(", ") || "off"}\` | Loop: \`${
        queue.repeatMode ? (queue.repeatMode === 2 ? "all Queue" : "this song") : "off"
    }\` | autoplay: \`${queue.autoplay ? "on" : "off"}\``
client.distube
    .on("playSong", (queue, song) =>
        //queue.textChannel.send(({embeds: [ayeeee]}))
        queue.textChannel.send(
            `playing \`${song.name}\` - \`${song.formattedDuration}\`\nplayed by: ${
                song.user
            }\n${status(queue)} <:mike:841848837030150154>`
        ),



    )
    .on("addSong", (queue, song) =>
        queue.textChannel.send(
            `Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`
        )
    )
    .on("addList", (queue, playlist) =>
        queue.textChannel.send(
            `${client.emotes.success} | Added \`${playlist.name}\` playlist (${
                playlist.songs.length
            } songs) to queue\n${status(queue)}`
        )
    )
    .on("error", (channel, e) => {
        channel.send(` An error encountered: ${e.toString().slice(0, 1974)}`)
        console.error(e)
    })
    .on("empty", channel => channel.send("Voice channel is empty! Leaving the channel..."))
    .on("searchNoResult", (message, query) =>
        message.channel.send(`No result found for \`${query}\`!`)
    )
    .on("finish", queue => queue.textChannel.send("finished <:mike:841848837030150154>"))
    .on("disconnect", queue => queue.textChannel.send("disconnected <:mike:841848837030150154>"))


client.login(process.env.TOKEN)

