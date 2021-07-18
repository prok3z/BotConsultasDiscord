const Discord = require('discord.js');//Const
const { color, prefix } = require('../../config.json');

module.exports.run = (app, message, args) => {
  message.delete();
if(!args[0]) return message.reply(`Formato correto: ${prefix}cep <cep>`).then(m => m.delete({ timeout: 5000 }))
      var request = require("request");
      var options = {
          url: `https://ws.apicep.com/cep/${args[0]}.json`
      };
      request(options, function (error, response, body) {
try{
          let dados = JSON.parse(body)
          if (dados.code === "") {
            message.reply("CEP Não encontrado na base de dados!").then(m => m.delete({ timeout: 5000 }))
        } else if (dados.code === undefined) {
            message.reply("CEP Não encontrado na base de dados!").then(m => m.delete({ timeout: 5000 }))
        }
        else {
          let cepm = new Discord.MessageEmbed()
          .setColor(color)
          .setTitle(`CONSULTA POR CEP`)
          .setTimestamp()
          .setFooter(`Pedido por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
          .setDescription(`
    > __**CEP**__ - ${dados.code}
    > __**ESTADO**__ - ${dados.state}
    > __**CIDADE**__ - ${dados.city} 
    > __**DISTRITO**__ - ${dados.district}
    > __**ENDEREÇO**__ - ${dados.address}
    > __**CIDADE**__ - ${dados.city}
        `)
    message.channel.send(cepm).then(m => m.delete({ timeout: 15000 }))
  }
  } catch(e) {
        console.log(e.name, e.message)
    }
      }); 
  }
