const discord = require("discord.js")
const client = require("./client.js")

/**
 * 
 * @param {discord.Message | discord.Interaction} message 
 * @param {string[]} args 
 * @param {client} client
 */

function RunFunction(message, args, client) {}

class Command {
    constructor(options) {
        this.name = options.name;
        this.descrption = options.descrption; 
        this.permission = options.permission;
        this.run = options.run; 
    }
}

module.exports = Command;