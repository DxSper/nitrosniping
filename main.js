// prérequis

const Discord = require('discord.js');
const client = new Discord.Client();
var randomstring = require("randomstring");

// Login & Prefix
const TOKENsafe = "NzA2Njk1ODM2NTQ4OTg5MDQ4.Xsk2VA.6dNRdZ8UNbRAl8er5I-NdBuTuC8";
const TOKEN = process.env.BOT_TOKEN

const PREFIX = process.env.PREFIX

exports.TOKEN = "NzA2Njk1ODM2NTQ4OTg5MDQ4.Xsk2VA.6dNRdZ8UNbRAl8er5I-NdBuTuC8";
exports.PREFIX = "$";

client.on('ready' , () => {
  client.user.setActivity('généré des nitros $nitro', { type: 'STREAMING' })
  .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
  .catch(console.error);
    console.log('biquette & jkill')
   
})

// Commande pour généré un lien nitro gift.


client.on('message', message => {
  if(!message.content.startsWith(PREFIX) || message.author.bot) return;
  const args = message.content.slice(PREFIX.length).split(/ +/);
  console.log (args);

  const command = args.shift().toLowerCase();
  console.log (command);
  
  if (command === 'nitro') {
    const gift = randomstring.generate({
      length: 15
    });
    const gift1 = randomstring.generate({
      length: 15
    });
    const gift2 = randomstring.generate({
      length: 15
    });
    const gift3 = randomstring.generate({
      length: 15
    });
    const gift4 = randomstring.generate({
      length: 15
    });
    const gift5 = randomstring.generate({
      length: 15
    });
    const gift6 = randomstring.generate({
      length: 15
    });
    const gift7 = randomstring.generate({
      length: 15
    });
    const gift8 = randomstring.generate({
      length: 15
    });
    const gift9 = randomstring.generate({
      length: 15
    });
    const gift10 = randomstring.generate({
      length: 15
    });
    const gift11 = randomstring.generate({
      length: 15
    });
    const gift12 = randomstring.generate({
      length: 15
    });
    const reactargent = message.react("🎁")
    message.channel.send("génération de gift nitro aléatoire envoyé en DM. ✅")
    message.author.createDM().then(channel => {
      channel.send(`⚠ Le bot est en train de généré 12 lien de gift nitro...`)
      channel.send(`discord.gift/${gift}`)
      channel.send(`discord.gift/${gift1}`)
      channel.send(`discord.gift/${gift2}`)
      channel.send(`discord.gift/${gift3}`)
      channel.send(`discord.gift/${gift4}`)
      channel.send(`discord.gift/${gift5}`)
      channel.send(`discord.gift/${gift6}`)
      channel.send(`discord.gift/${gift7}`)
      channel.send(`discord.gift/${gift8}`)
      channel.send(`discord.gift/${gift9}`)
      channel.send(`discord.gift/${gift10}`)
      channel.send(`discord.gift/${gift11}`)
      channel.send(`discord.gift/${gift12}`)
      channel.send(`Lien envoyé avec succès ✅. 🔖 Si aucun lien n'est valide, retentez votre chance. `)
    })}
    

  if (command === 'prix') {
    const reactargent = message.react("💰")
    message.channel.send("bot: 1euros")
    message.react('${reactargent}')
  }

  if (command === 'contact') { 
    const reactemail = message.react('📧')
    message.channel.send(`contact me: kingcow#1914`) 
    message.react('${reactemail}')
}})

client.login(TOKEN); 