const fs = require('fs');
const db = require(`${__dirname}/../helper/database`);
const logMSG = require(`${__dirname}/../log`);

function rm(array, v){
    for (let i = 0; i < array.length; i++) {
        if(array[i] === v){
            array.splice(i, 1);
            break;
        }
    }
}

module.exports = function (client, commandsName, media) {
    client.on('message', async message => {
        const PREFIX = ['/', '#', '!'];
        const from = message.author ? message.author : message.from;
        let dbId = from.split('@')[0]
        logMSG(message, commandsName, from, PREFIX)
        client.sendSeen(message.from)
        let uDb = await db.GETUser(dbId)
        message.mentionedIds.length < 1 ? '' : message.mentionedIds.map(async v => await db.GETUser(v.split('@')[0]) ? '' : await db.POSTUser(v.split('@')[0]))
        uDb ? '' : await db.POSTUser(dbId)
        if (!PREFIX.includes(message.body.charAt(0)) || message.from === 'status@broadcast') return;
    
        let args = message.body.slice(1).split(/ +/);
        const cmnd = args.shift().toLowerCase();

        let cooldown = require(`${__dirname}/cooldown.json`)
        
        if (commandsName.map(e => e).includes(cmnd)) {
            if (!cooldown.cd.includes(from)) {
                let newCd = cooldown.cd.push(from)
                const c = require(global.commands.filter(v => v.commands.includes(cmnd))[0].require);
                c.exec({
                    m: message,
                    args: args,
                    client: client,
                    MessageMedia: media,
                    messageFrom: from,
                    dbid: dbId
                });
                fs.writeFileSync(`${__dirname}/cooldown.json`, JSON.stringify(newCd));
            } else {
                m.reply('Kamu sedang dalam cooldown,\nMohon coba lagi nanti.\n(Default cooldown: 2 detik.)')
            }
        };
    });
}