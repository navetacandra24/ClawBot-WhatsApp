const fs = require('fs');
const request = require('request');
const puppeteer = require('puppeteer')

var download = function (uri, filename) {
    request.head(uri, function (err, res, body) {
        request(uri).pipe(fs.createWriteStream(filename)).on('close', () => { return });
    });
}

async function execute(_ft, filename) {
    let browser = await puppeteer.launch({
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
        product: 'chrome',
    });
    let page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
    await page.goto('https://en.ephoto360.com/tik-tok-text-effects-online-generator-485.html', {
        waitUntil: ['networkidle2']
    })
        .then(async () => {
            await page.type('#text-0.form-control', _ft[0]);
            await page.type('#text-1.form-control', _ft[1]);
            await page.click('#submit');
            await new Promise(resolve => setTimeout(resolve, 7500))
            const element = await page.$('div.thumbnail > img')
            const url = await (await element.getProperty('src')).jsonValue();
            download(url, `${__dirname}/../src/${filename}.jpg`)
        })
        .catch(err => m.reply(err))
                
    await browser.close()
}

const handler = {
    async exec({ m, args, MessageMedia, messageFrom }) {
        let fullText = args.join(' ');
            let _ft = fullText.split(' | ')
        if (_ft.length >= 2) {
            await m.reply('Memproses..\n*Mohon tunggu sekitar 1 menit.*');
            let filename = `glitchtext-${new Date().getTime()}-${messageFrom.split('@')[0]}`
            await execute(_ft, messageFrom, filename)
            try {
                let _exist = fs.existsSync(`${__dirname}/../src/${filename}.jpg`)
                if (_exist) {
                    let media = MessageMedia.fromFilePath(`${__dirname}/../src/${filename}.jpg`);
                    m.reply(media)
                } else {
                    m.reply('*Maaf gambar tidak dapat dikirim karena terjadi kesalahan system*')
                }
            } catch (err) {
                m.reply(err)
            }
            } else {
                m.reply('Masukkan format dengan benar\n*Contoh :* #glitchtext Clawbot | GG Gaming')
            }
    }
}

module.exports = handler