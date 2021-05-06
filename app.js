// PACOTES NECESSÁRIOS
const Discord = require('discord.js');// discord.js é um módulo node.js poderoso que permite que você interaja com a API Discord muito facilmente
const request = require('request');//Faz a requisição com o servidor
const colors = require('colors');// Meche com as cores
const app = new Discord.Client();

// AQUI PEGARÁ DO CONFIG.JSON AS STRING'S DEFINIDAS NO JSON PARA UTILIZAR NO APP.JS
const { token, prefix, color } = require("./config.json");

// COMMAND HANDLER PARA COLOCAR OS COMANDOS
app.on('message', message => {
    if (message.author.bot) return;
    if (message.channel.type == 'dm') return;
    if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;
    if (message.content.startsWith(`<@!${app.user.id}>`) || message.content.startsWith(`<@${app.user.id}>`)) return;
  
   const args = message.content
       .trim().slice(prefix.length)
       .split(/ +/g);
   const command = args.shift().toLowerCase();
  
   try {
       const consultar_cmdh = require(`./src/comandos/${command}.js`)
       consultar_cmdh.run(app, message, args);
   } catch (err) {
   console.error('Erro:' + err);
  }
});

// MENSAGEM ENVIADA APÓS O BOT FICAR ATIVO!
app.on("ready", () => {
    console.log('Bot consultor feito por: '.green + "dock0d1'#0001".red);
    console.log('Logado no bot: '.green + `${app.user.tag}`.red);
});

// AQUI ELE LOGARÁ PELO TOKEN DO BOT
app.login(token);
