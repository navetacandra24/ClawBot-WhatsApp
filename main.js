const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode');
const fs = require('fs');

const prefix = '#' || "!" || "/"



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

client.commands = [];
const commandsFile = fs.readdirSync(`${__dirname}/commands/`).filter(files => files.endsWith('.js'));
for(const file of commandsFile) {
    const command = require(`./commands/${file}`)
    client.commands.push(command)
}

let commandsName = [];
client.commands.map(e => e.name.forEach(e => commandsName.push(e)));
console.log(commandsName);


client.on('message', message => {
    if (!message.body.startsWith(prefix) || message.fromMe || message.from !== '6285311174928-1614684173@g.us') return;


    let args = message.body.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    args = args.join(' ') 

    if (commandsName.includes(command)) {
        client.commands.filter(cmd => cmd.name.includes(command))[0].exec({m: message, args: args, client: client})
    }
})
