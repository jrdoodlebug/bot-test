const command = require("../structures/command")

module.exports = new command({
    name: "leagueimage",
    descrption: "hehehe",
    permission: "SEND_MESSAGES",
    

    async run(message,args,client) {
        const images = [
            'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fs1.picswalls.com%2Fwallpapers%2F2015%2F11%2F21%2Fleague-of-legends-desktop-wallpapers_111242296_289.jpg&f=1&nofb=1',
            'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2F9%2F9%2Fb%2F643239.jpg&f=1&nofb=1',
            'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2017%2F03%2F27%2F367424-Ahri-League_of_Legends.jpg&f=1&nofb=1',
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flivewallpapers4free.com%2Fwp-content%2Fuploads%2F2019%2F04%2FJXcwbR5vhoMLfKSikcwn-6-17-12.jpg&f=1&nofb=1',
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpapersden.com%2Fimage%2Fdownload%2Fyasuo-4k-league-of-legends_bGZubWyUmZqaraWkpJRobWllrWdma2U.jpg&f=1&nofb=1',
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hdwallpapers.in%2Fdownload%2Fsenna_4k_league_of_legends_4k_hd_games-HD.jpg&f=1&nofb=1',
            'https://images2.alphacoders.com/611/thumbbig-611981.webp',
            'https://images5.alphacoders.com/469/thumbbig-469133.webp',
            'https://images2.alphacoders.com/559/thumbbig-559456.webp',
            'https://images7.alphacoders.com/677/thumbbig-677283.webp',
            'https://images.alphacoders.com/502/thumbbig-502779.webp',
            'https://images6.alphacoders.com/502/thumbbig-502776.webp',
            'https://images3.alphacoders.com/959/thumbbig-959268.webp',
            'https://images.alphacoders.com/512/thumbbig-512466.webp',
            'https://images5.alphacoders.com/595/thumbbig-595808.webp',
            'https://images3.alphacoders.com/808/thumbbig-808986.webp',
            'https://images6.alphacoders.com/676/thumbbig-676215.webp',
            'https://images4.alphacoders.com/606/thumbbig-606389.webp',
            'https://images6.alphacoders.com/560/thumbbig-560292.webp',
            'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2016%2F01%2F283860-Leona-League_of_Legends-video_games.jpg&f=1&nofb=1',
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgameriv.com%2Fwp-content%2Fuploads%2F2021%2F01%2Fviego-scaled.jpg&f=1&nofb=1',
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2016%2F01%2F263200-Ezreal-League_of_Legends-video_games-artwork-concept_art.jpg&f=1&nofb=1',
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pcgamesn.com%2Fwp-content%2Fuploads%2F2020%2F07%2Flol_league_of_legends_yone_classic_skin.jpg&f=1&nofb=1',
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn1.dotesports.com%2Fwp-content%2Fuploads%2F2020%2F07%2F20150030%2FSpirit_Blossom_Yone.jpg&f=1&nofb=1',
            'https://i.ytimg.com/vi/Jyam0DXOsUE/hqdefault.jpg',
            'https://cdn1.dotesports.com/wp-content/uploads/2022/07/11120601/League-StarGuardians2022.png',
            'https://support-leagueoflegends.riotgames.com/hc/article_attachments/7396125191955/star-guardian-2022-sona-splash.png',
            'https://cdn1.dotesports.com/wp-content/uploads/2022/05/24102540/LeagueofLegends-OceanSong-ZeriAshe.jpg',
            'https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/WP%20Media%20Folder%20-%20esports-com//var/app/current/web/app/uploads/2020/10/lol-skin-ultime-seraphine-kda-all-out-2-720x384.jpg',
            'https://sportshub.cbsistatic.com/i/2021/09/07/14aafe4d-4e75-466d-a8a8-e04646cc28c8/league-of-legends-skins-1279104.jpg',
            'https://pbs.twimg.com/media/FTkQY64UEAA60Ll?format=jpg&name=4096x4096',
            
            



        ];


        message.reply(images[Math.floor(Math.random() * images.length)]);
        }

}); 

