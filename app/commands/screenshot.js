const puppeteer = require('puppeteer');
const fs = require('fs')

const handler = {
    name: 'ss',
    async exec({ m, MessageMedia, args }) {
        let browser = null;
        let url = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0];
        // if (args[0].endsWith('/')) {
        //     url += args[0]
        // } else {
        //     url += args[0] + '/'
        // }
        
        try {
            browser = await puppeteer.launch({
                args: [
                    '--incognito',
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
                headless: true,
                product: 'chrome'
            });
            const page = await browser.newPage();
            await page.setViewport({
                width: 1920,
                height: 1280,
                isLandscape: true
            })
            await page.goto(url, {
                waitUntil: 'domcontentloaded'
            });
            
            await page.screenshot({
                path: `${__dirname}/../src/ss.jpg`,
                type: 'jpeg',
            })
            
            await browser.close()
        }
        catch (error) {
            m.reply(error)
        }
        finally {
            if (fs.existsSync(`${__dirname}/../src/ss.jpg`)) {
                let media = MessageMedia.fromFilePath(`${__dirname}/../src/ss.jpg`);
                await m.reply(media, m.from, { caption: url })
                fs.unlinkSync(`${__dirname}/../src/ss.jpg`)
            } else {
                m.reply('Tidak dapat menemukan web')
            }
        }
    }
}

module.exports = handler