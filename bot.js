const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "w";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Cyhper Bot Script By : test`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : WESO ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Ilove myself`,"http://twitch.tv/WESO !")
client.user.setStatus("dnd")
});



client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
