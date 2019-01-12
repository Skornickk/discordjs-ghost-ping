const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();



client.once('ready', () => {

	console.log('Ready!');

});



client.on('message', message => {
message.delete(500)

  if (message.content.startsWith(`${prefix}credits`)) {
      message.channel.send('coming soon');
  }

else if(message.member.roles.find("name","Pinger")){
  if (message.content.startsWith(`${prefix}ping`)) {

      message.channel.send('Pinging! @everyone ')
    .then(msg => {
      msg.delete(1000)
    })
    .catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
    }
  }else{
    // not pinger
  }

});



client.login('NTMzNjQ5MTQzMzU3NTA1NTM4.Dxvt2g.pkEDG2bYq3VlnGa8hwc6zW7AWiQ');


// else if (message.content.startsWith(`${prefix}ping`)) {

//    message.channel.send('Pinging! @everyone ')
//  .then(msg => {
//    msg.delete(1000)
//  })
//  .catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
//  }
