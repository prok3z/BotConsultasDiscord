const Discord = require('discord.js');
const { prefix, color } = require('../../config.json');

module.exports.run = (client, message, args) => {
  message.delete();
if(!args[0]) return message.channel.send(`${message.author}, Formato correto: ${prefix}ip <ip>`).then(m => m.delete({ timeout: 8000 }))
       
          var request = require("request");
          var options = {
              url: `https://ipfind.co/?ip=${args[0]}&auth=f1b781f3-de50-4d93-95e9-faabebc43e7c`
          };
          request(options, function (error, response, body) {
try{
              let dados = JSON.parse(body)


              let ipaddress = dados.ip_address;
              if(dados.ip_address === "") {
                message.reply("IP Não encontrado na base de dados!").then(m => m.delete({ timeout: 5000 }))

              } else if(dados.ip_address === undefined){
                message.reply("IP Não encontrado na base de dados!").then(m => m.delete({ timeout: 5000 }))
              } else {
              let country = dados.country;
              if(country === undefined) country = 'Não Encontrado';
              if(country === '') country = 'Não Encontrado';
              let countrycode = dados.country_code;
              if(countrycode === undefined) countrycode = 'Não Encontrado';
              if(countrycode === '') countrycode = 'Não Encontrado';
              let continent = dados.continent;
              if(continent === undefined) continent = 'Não Encontrado';
              if(continent === '') continent = 'Não Encontrado';
              let continentcode = dados.continent_code;
              if(continentcode === undefined) continentcode = 'Não Encontrado';
              if(continentcode === '') continentcode = 'Não Encontrado';
              let timezone = dados.timezone;
              if(timezone === undefined) timezone = 'Não Encontrado';
              if(timezone === '') timezone = 'Não Encontrado';
              let languages = dados.languages;
              if(languages === undefined) languages = 'Não Encontrado';
              if(languages === '') languages = 'Não Encontrado';
              let currency = dados.country;
              if(currency === undefined) currency = 'Não Encontrado';
              if(currency === '') currency = 'Não Encontrado';
              let city = dados.city;
              if(city === undefined) city = 'Não Encontrado';
              if(city === '') city = 'Não Encontrado';
              let org = dados.org;
              if(org === undefined) org = 'Não Encontrado';
              if(org === '') org= 'Não Encontrado';
              let postalcode = dados.postal_code;
              if(postalcode === undefined) postalcode = 'Não Encontrado';
              if(postalcode === '') postalcode = 'Não Encontrado';
              let regioncode = dados.region_code;
              if(regioncode === undefined) regioncode = 'Não Encontrado';
              if(regioncode === '') regioncode = 'Não Encontrado';
              let latitude = dados.latitude;
              if(latitude === undefined) latitude = 'Não Encontrado';
              if(latitude === '') latitude = 'Não Encontrado';
              let longitude = dados.longitude;
              if(longitude === undefined) longitude = 'Não Encontrado';
              if(longitude === '') longitude = 'Não Encontrado';

              message.channel.send(new Discord.MessageEmbed()
               .setTitle(`CONSULTA POR IP`)
               .setColor(color)
               .setFooter(`Pedido por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
               .setThumbnail(message.guild.iconURL({ dynamic: true, size: 1024 }))
               .setDescription(`
      > __**ESTADO**__ - ${country}
      > __**SIGLA DO ESTADO:**__ - ${countrycode}
      > __**CONTINENTE**__ - ${continent}
      > __**CÓDIGO DO CONTINENTE**__ - ${continentcode}
      > __**IP**__ - ${ipaddress}
      > __**HORARIO DE**__ - ${timezone} 
      > __**LÍNGUAS**__ - ${languages}
      > __**MOEDA**__ - ${currency}
      > __**CIDADE**__ - ${city}
      > __**INTERNET**__ - ${org}
      > __**CÓDIGO POSTAL**__ - ${postalcode}
      > __**CÓDIGO DA REGIÃO**__ - ${regioncode}
      > __**LATITUDE**__ - ${latitude}
      > __**LONGITUDE**__ - ${longitude}
      `)).then(m => m.delete({ timeout: 15000 }))
              }
      } catch(e) {
            console.log(e.name, e.message)
          }
          }); 
}