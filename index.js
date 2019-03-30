const Discord = require('discord.js');
const bot =  new Discord.Client();
const token = process.env.TOKEN
const prefix = process.env.PREFIX




 // comandos quando o bot estiver pronto
bot.on('ready', () => {
    // bot "jogando/assistindo/ouvindo/streamando"
    bot.user.setActivity("Tom Clancy's The Division 2", {type: "Playing"});

    console.log('bot on!');

    
});






// comandos de mensagens de usuário
bot.on('message', async message => {
    let msg = message.content.toLocaleLowerCase();
    let command = message.content.slice(prefix.lenght).trim().split(/ +/g);

    if (message.author.bot){
        return;
    }

    if (message.content.indexOf(prefix) !== 0){
        return;
    } 
    
    

    switch (command[0].toLocaleLowerCase()) { 
        case (prefix + "convite") :
            message.channel.send("**CONVITE DISCORD:**  https://discord.gg/hu2cthf");
            break;            
    }    

    //const args = message.content.slice(config.prefix.lenght).trim().split(/ +/g);
    //transformar os comandos em minusculo
    //const command = args.shift().toLowerCase();   

    });
    
    
bot.login(token);
