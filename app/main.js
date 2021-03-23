const { Client, MessageMedia } = require('whatsapp-web.js');
const fs = require('fs');
const chalk = require('chalk');
const logMSG = require('./log');
const commandDB = require(`${__dirname}/commands-database`)
const cr = require(`${__dirname}/credit`)

function Run() {
    const SESSION_FILE_PATH = `${__dirname}/whatsapp-session.json`;
    let sessionCfg;
    if (fs.existsSync(SESSION_FILE_PATH)) {
        sessionCfg = require(SESSION_FILE_PATH);
    }

    const client = new Client({
        qrRefreshIntervalMs: 60000,
        restartOnAuthFail: true,
        puppeteer: {
            headless: true,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--disable-accelerated-2d-canvas',
                '--no-first-run',
                '--no-zygote',
                '--single-process', // <- this one doesn't works in Windows
                '--disable-gpu',
                '--aggressive-cache-discard',
                '--disable-cache',
                '--disable-application-cache',
                '--disk-cache-size=0'
            ]
        },
        session: sessionCfg
    })

    client.initialize()

    client.on('qr', qr => {
        console.log(`QR Recieved!`);
        console.log(qr);
        // qrcode.generate(qr)
    });

    client.on('authenticated', session => {
        fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), function (err) {
            if (err) {
                console.log(err);
            }
        });
    });

    client.on('disconnected', function (r) {
        client.setStatus('Bot Off!')
        fs.unlink(SESSION_FILE_PATH, function () {
            console.log('Session Destroyed!');
            client.destroy();
            client.initialize();
        });
    });

    client.on('ready',async () => {
        console.clear();
        cr()
        let ct = await client.getContacts()
        let cht = await client.getChats();
        console.log(chalk.cyanBright(`Recieved ${ct.length} Conatcts\nRecieved ${cht.length} Chats\n`));
        console.log(commandsName, '\n');
        console.log(chalk.red('Bot is ready now.'));
    })

    // let commands = [];
    let commandsName = []
    commandDB.forEach(e => e.commands.forEach(r => commandsName.push(r)))

    client.on('message', async message => {
        const PREFIX = ['/', '#', '!'];
        const from = message.author ? message.author : message.from
        logMSG(message, commandsName, from)
        client.sendSeen(message.from)
        if (!PREFIX.includes(message.body.charAt(0)) || message.from === 'status@broadcast') return;

        let args = message.body.slice(1).split(/ +/);
        const cmnd = args.shift().toLowerCase();

        if (commandsName.map(e => e).includes(cmnd)) {
            const c = require(commandDB.filter(v => v.commands.includes(cmnd))[0].require);
            try {
                await c.exec({
                    m: message,
                    args: args,
                    client: client,
                    MessageMedia: MessageMedia,
                    messageFrom: from
                });
            } catch (err) {
                message.reply(err)
            }

        };
    });
}


module.exports = {
    Run
}