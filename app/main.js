const { Client, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode');
const fs = require('fs');


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
});

client.initialize()

client.on('qr', qr => {
    console.log(`QR Recieved!`);
    console.log(qr);
});

client.on('authenticated', session => {
    (async () => {
        await client.setDisplayName('ClawBot')
        await client.setStatus('Im a Bot! 🤖')
        await client.getContacts()
    })();
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

client.on('ready', () => console.log('Bot is ready!'))

let commands = [];
const commandsFile = fs.readdirSync(`${__dirname}/commands/`).filter(files => files.endsWith('.js'));
for(const file of commandsFile) {
    const command = require(`${__dirname}/commands/${file}`)
    commands.push(command)
}



// client.sendMessage(m.from, img, { })

client.on('message', message => {
    // if (!message.body.startsWith('#', '!', '/')) return;

    let args = message.body.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    // client.sendMessage(message.from, m, {})
    // message.reply('tes', message.from, {})
    // if (commands.map(e => e.name).includes(command)) {
    //     commands.filter(cmd => cmd.name === command)[0].exec({
    //         m: message,
    //         args: args,
    //         client: client,
    //         MessageMedia: MessageMedia
    //     })
    // };
    console.log(commands.map(e => e.name.forEach(res => res)));
})
