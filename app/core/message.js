const db = require(`${__dirname}/../helper/database`);
const logMSG = require(`${__dirname}/../log`);

module.exports = function (client, commandsName, media) {
    client.on('message', async message => {
        const PREFIX = ['/', '#', '!'];
        const from = message.author ? message.author : message.from;
        let dbId = from.split('@')[0]
        logMSG(message, commandsName, from, PREFIX)
        client.sendSeen(message.from)
        let uDb = await db.GETUser(dbId)
        uDb ? '' : await db.POSTUser(dbId)
        if (!PREFIX.includes(message.body.charAt(0)) || message.from === 'status@broadcast') return;
    
        let args = message.body.slice(1).split(/ +/);
        const cmnd = args.shift().toLowerCase();
    
        if (commandsName.map(e => e).includes(cmnd)) {
            const c = require(global.commands.filter(v => v.commands.includes(cmnd))[0].require);
            c.exec({
                m: message,
                args: args,
                client: client,
                MessageMedia: media,
                messageFrom: from,
                dbid: dbId
            });
    
        };
    });
}