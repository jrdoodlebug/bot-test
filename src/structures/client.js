const discord = require("discord.js")

const command = require("./command.js")

const intents = new discord.Intents(32767)

const fs = require('fs');

const config = require("../data/config.json");


class Client extends discord.Client {
    constructor() {
        super({intents});


        this.commands = new discord.Collection();

        this.prefix = config.prefix;
    }

    start(token) {
        fs.readdirSync("./src/commands").filter(file => file.endsWith(".js")).forEach(file =>{

            const command = require(`../commands/${file}`)
            console.log(`Command ${command.name} loaded`)
            this.commands.set(command.name, command);
        
        })

        fs.readdirSync("./src/events")
            .filter(file => file.endsWith(".js"))
            .forEach(file => {
                /**
                 * @type {event}
                 */

                const event = require(`../events/${file}`);
                console.log(`event ${event.event} loaded`);
                this.on(event.event, event.run.bind(null, this));
            })


        this.login(token);
    
    }
}

module.exports = Client;