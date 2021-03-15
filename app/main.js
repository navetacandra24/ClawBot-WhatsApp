const { Client, MessageMedia } = require('whatsapp-web.js');
const fs = require('fs');
const chalk = require('chalk');
const logMSG = require('./log');
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

    client.on('ready', () => {
        // console.log('Bot is ready!')
        console.clear();
        cr()
        console.log(chalk.blue.bold('Bot is now Runing..'));
        console.log(commandsName);
    })

    let commands = [];
    let commandsName = [] //['anime', 'apakah', 'attp', 'bcgc', 'bc', 'gtranslate', 'help', 'kapan', 'ss', 'speed', 'sticker', 'waifu', 'wiki', 'ttp'];
    const commandsFile = fs.readdirSync(`${__dirname}/commands/`).filter(files => files.endsWith('.js'));
    for(const file of commandsFile) {
        const command = require(`${__dirname}/commands/${file}`);
        commands.push(command)
        command.name.forEach(e => {
            commandsName.push(e)
        })
    }

    client.on('message', message => {
        const PREFIX = ['/', '#', '!']
        logMSG(message)
        if (!PREFIX.includes(message.body.charAt(0))) return;


        let args = message.body.slice(1).split(/ +/);
        const command = args.shift().toLowerCase();

        if (commandsName.map(e => e).includes(command)) {
            // console.log(commands.filter(v => v.name.includes(command)));
            commands.filter(cmd => cmd.name.includes(command))[0].exec({
                m: message,
                args: args,
                client: client,
                MessageMedia: MessageMedia
            });
            // commands.filter(cmd => cmd.name.includes(command))[0].exec({
            //     m: message,
            //     args: args,
            //     client: client,
            //     MessageMedia: MessageMedia
            // });
        };
    });
}

// console.log(client.info);

module.exports = {
    Run
}