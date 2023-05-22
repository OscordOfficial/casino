const { Client, GatewayIntentBits, Partials, REST} = require("discord.js")
const oscordrest = new REST({version: 10}).setToken("")
const oscord = new Client({ 
    intents:  Object.keys(GatewayIntentBits),
    partials: Object.keys(Partials)
});

  oscord.on('ready', () => {
    console.log(`successfully logged in **(${oscord.user.tag})**`)
  });


  oscord.on('interactionCreate', async interaction => {
    if(!interaction.isChatInputCommand()) return;

    if(interaction.commandName === 'ping') {
        await interaction.reply('pong!');
    }
  });

  oscord.login("MTExMDMwNzU3MDM0Nzk0NjA4NA.Gk7evC.zjBWeof0CD8mE7cPl3kNcu-OFrjXv0xuS3-CAE")