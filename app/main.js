const { Client, MessageMedia } = require('whatsapp-web.js');
const fs = require('fs');
const chalk = require('chalk');
const logMSG = require('./log');
const commandDB = require(`${__dirname}/commands-database`)
const cr = require(`${__dirname}/credit`)
const r2str = require(`${__dirname}/lib/r2str`)

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
            ],
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
        // console.log('Bot is ready!')
        console.clear();
        cr()
        let ct = await client.getContacts()
        let cht = await client.getChats();
        console.log(chalk.cyanBright(`Recieved ${ct.length} Conatcts\nRecieved ${cht.length} Chats\n`));
        console.log(commandsName, '\n');
        console.log(chalk.red('Bot is ready now.'));
    })

    // let commands = [];
    let commandsName = [] //['anime', 'apakah', 'attp', 'bcgc', 'bc', 'gtranslate', 'help', 'kapan', 'ss', 'speed', 'sticker', 'waifu', 'wiki', 'ttp'];
    const commandsFile = fs.readdirSync(`${__dirname}/commands/`).filter(files => files.endsWith('.js'));
    for(const file of commandsFile) {
        const command = require(`${__dirname}/commands/${file}`);
        r2str(command.command).map(e => commandsName.push(e))
    }

    client.on('message', message => {
        const PREFIX = ['/', '#', '!']
        logMSG(message, commandsName)
        // client.sendSeen(message.from)
        // console.log(commands.length);
        if (!PREFIX.includes(message.body.charAt(0))) return;


        let args = message.body.slice(1).split(/ +/);
        const cmnd = args.shift().toLowerCase();

        if (commandsName.map(e => e).includes(cmnd)) {
            const c = require(commandDB.filter(v => v.commands.includes(cmnd))[0].file);
            // console.log(c.exports.exec);
            c.exec({
                m: message,
                args: args,
                client: client,
                MessageMedia: MessageMedia
            });

        };
    });
}


module.exports = {
    Run
}