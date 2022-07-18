const command = require("../structures/command")

module.exports = new command({
    name: "taoquote",
    descrption: "random tao quote from quotes channel",
    permission: "SEND_MESSAGES",


    async run(message,args,client) {
        const quotes = [
            '"Ig I have a giant league sword" -tao',
            '*amber alert "rip bozo" -tao',
            '"i became a small ass human on the table. a nutcracker tried to step on me" -tao',
            '“y u here” -tao',
            '"thinking of a tall tomorrow" -tao',
            '“michael is a very handsome guy no homo” -tao',
            '"i agree" -tao',
            '“annindyah came in the with the deluxe combo” -tao',
            '"good morning"🤓 -tao',
            '“i’m also very light skinned” -tao',
            '"the mc is the definition of testosterone. he\'s my idol." -tao',
            '"no you need blonde eyes" -tao',
            '"kizma ass" -tao',
            '"muscle is made by sleeping so i like to sleep" -tao',
            '"i blew up ur house irl" -tao',
            '“there is nothing to steal😭” -tao',
            '"Who needs sex when you have knowledge." -tao',
            '"I\'m still staring at the ceiling, thinking about my life choices." -tao',
            '"I\'m marinating in my own sorrow...D:" -tao',
            '"why does bruhbruh not like me" -tao',
            '"its not netflix and chill its push ups and grunts" -tao',
            '“are you saying i have kids?” -tao',
            '“oh my god that looks like among us” -tao',
            '"I\'m ironically racist" -tao',
            '“yo charlie are you coming back next year?” “yes” “damn guys charlie’s leaving next year” -tao',
            '"they all look like pretty boys" -tao',
            '"Just manifest fss gamers" -tao',
            '"u want me to say i chen everrythign" -tao',
            '"i dont think i followed the instructions correctly. i ended up buying a tank" -tao',
            '"the exclusive chencil" -tao',
            '"creating the fss economy" -tao',
            '"Mewo" -tao',
            '"i kind of just fingered it and it fell apart" -tao',
            '"People are like mirrors. If you smile, a smile will be reflected :)" -tao',
            '"my balls tingle" -tao',
            '“Larry the lobster lookin straight at me As it gets boiled alive” “It\'s a honor to become one with Tao chen” “Becoming a source of protein” -tao',
            '"im too expensive to keep alive" -Tao',
            '"I\'m like the industrial revolution.But in human form" -tao',
            '"bikecycle" -tao',
            '"“my feed isn\'t racist i promise. i know black people-“ -tao',
            '"ok liberals" -tao',
            'https://cdn.discordapp.com/attachments/818273252622729238/957835510330572810/IMG_6709.png',
            'https://cdn.discordapp.com/attachments/818273252622729238/957829803988357170/IMG_6707.png',
            '“i\’m not a gamer” -tao',
            '"if theres a hole theres a way" -tao/emmet',
            '"this is why i love capitalism. its so easy to make money if you have money." -tao',
            '"what is the joy of testosterone if you have no nut sack? thats just yankee with no brim" -tao',
            '"the glizzy gladiator" -tao',
            'https://cdn.discordapp.com/attachments/818273252622729238/966132063734484992/Screen_Shot_2022-04-19_at_8.23.48_PM.png',
            '"yo tengo muy tao" -tao',
            '“Im gonna have like 15 children. Im making an army. Ill make them warriors. They better not be liberals. Im not having pussy children” -tao',
            '"othello and the fucking rings. shang othello." -tao',
            '"the fuk is the tao juice? did i leave fuking semen behind?" -tao',
            '"No longer built like a brick oven. Back on the grind. Back to my old self" -tao',
            







            

            
















        ];


        message.reply(quotes[Math.floor(Math.random() * quotes.length)]);
        message.react('905603375578632223');
        message.react('905602846785933312');
        }

}); 

