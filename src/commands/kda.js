const command = require("../structures/command")
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = new command({
    name: "kda",
    descrption: "hehehe",
    permission: "SEND_MESSAGES",


    async run(message,args,client) {
        const images = [
            'https://images8.alphacoders.com/959/thumbbig-959266.webp',
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F4700522.jpg&f=1&nofb=1',
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp4116110.jpg&f=1&nofb=1',
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F4700554.jpg&f=1&nofb=1',
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsteamuserimages-a.akamaihd.net%2Fugc%2F947339560650241016%2F907EF15219FDA5E1F62DB2D77F38BF56490D005F%2F&f=1&nofb=1',
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pcgamesn.com%2Fwp-content%2Fuploads%2F2018%2F11%2Fleague-of-legends-kda-2.jpg&f=1&nofb=1',
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp3803476.jpg&f=1&nofb=1',
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pcgamesn.com%2Fwp-content%2Fuploads%2F2018%2F10%2Fkda-skins-splash.jpg&f=1&nofb=1',
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.hdqwalls.com%2Fdownload%2Fkda-akali-league-of-legends-4k-artwork-vw-2560x1600.jpg&f=1&nofb=1',
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic0.gamerantimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2020%2F10%2Fleague-of-legends-kda-all-out-skins.jpg&f=1&nofb=1',
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic3.thegamerimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2020%2F10%2FKDA-Seraphine-1.jpg&f=1&nofb=1',
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.hdqwalls.com%2Fwallpapers%2Fakali-league-of-legends-fan-art-hm.jpg&f=1&nofb=1',
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpapersden.com%2Fimage%2Fdownload%2Fakali-8k-k-da-league-of-legends_bGlma2WUmZqaraWkpJRsa21lrWloZ2U.jpg&f=1&nofb=1',
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hdwallpapers.in%2Fdownload%2Fgwen_hd_league_of_legends_3-1366x768.jpg&f=1&nofb=1',
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fget.wallhere.com%2Fphoto%2FSenna-League-of-Legends-music-League-of-Legends-Riot-Games-ADC-kda-1689687.jpg&f=1&nofb=1',
            



        ];

        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setURL('https://open.spotify.com/artist/4gOc8TsQed9eqnqJct2c5v')
                .setLabel('K/DA Spotify')
                .setStyle('LINK'),
        );

        message.reply({ content: images[Math.floor(Math.random() * images.length)], components: [row]});
        //message.reply(images[Math.floor(Math.random() * images.length)]);
        }

}); 

