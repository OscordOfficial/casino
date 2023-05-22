const { Client, GatewayIntentBits, Partials, REST} = require("discord.js")
const oscordrest = new REST({version: 10}).setToken("")
const oscord = new Client({ 
    intents:  Object.keys(GatewayIntentBits),
    partials: Object.keys(Partials)
});

try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }

  oscord.on('ready', () => {
    console.log(`successfully logged in **(${oscord.user.tag})**`)
  });


  oscord.on('interactionCreate', async interaction => {
    if(!interaction.isChatInputCommand()) return;

    if(interaction.commandName === 'ping') 
  })