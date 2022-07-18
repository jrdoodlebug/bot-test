const discord = require("discord.js");
const Client = require("./structures/client.js");

/**
 * @template {keyof discord.ClientEvents} K 
 * @param {Client} client 
 * @param  {discord.ClientEvents[K]} eventArgs 
 */

const discord = require("discord.js");

function runFunction(client, ...eventArgs) {

}

/**
 * @template {keyof discord.ClientEvents} K 
 */
class event {
    /**
     * 
     * @param {K} event 
     * @param {runFunction<K>} runFunction 
     */
    constructor(event, runFunction) {
        this.event = event;
        this.run = runFunction;

    }

}

module.exports = event;
