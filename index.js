// require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// when the client is ready, run this code (only once).
client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

// log in to Discord with your client's token
client.login(token);