const puppeteer = require('puppeteer');

const handler = {
    name: ['ss'],
    async exec({ m, MessageMedia, args }) {
        let browser = null;
        let url = '';
        if (args[0].endsWith('/')) {
            url += args[0]
        } else {
            url += args[0] + '/'
        }
        
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
            await page.goto(`${url}`, { waitUntil: ['domcontentloaded', 'load', 'networkidle2'] });
            
            await page.screenshot({path: `${__dirname}/../src/screenshot.jpg`, type: 'jpeg'})
            
            await browser.close()
        }
        catch (error) {
            m.reply(error)
        }
        finally {
            let media = MessageMedia.fromFilePath(`${__dirname}/../src/screenshot.jpg`);
            m.reply(media, m.from, {caption: 'Ini screenshotnya.'})
        }
    }
}

module.exports = handler