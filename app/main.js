const { Client, MessageMedia } = require('whatsapp-web.js');
const fs = require('fs');
const chalk = require('chalk');
const cr = require(`${__dirname}/credit`);
const msg = require(__dirname + '/core/message')

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
                '--disable-gpu',
                '--aggressive-cache-discard',
                '--disable-cache',
                '--disable-application-cache',
                '--disk-cache-size=0'
            ],
            timeout: 0
        },
        session: sessionCfg
    })

    client.initialize()

    client.on('qr', qr => {
        console.log(`QR Recieved!`);
        console.log(qr);
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


    let commandsName = []
    global.commands.forEach(e => e.commands.forEach(r => commandsName.push(r)))

    msg(client, commandsName, MessageMedia)


    setInterval(async () => {
        let chat = await client.getChats();
        chat.forEach(async e => {
            await e.sendSeen()
        })
    }, 1000 * 60);
    // client.sendMessage(global.ownerId, '')

}


module.exports = {
    Run
}