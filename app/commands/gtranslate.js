const puppeteer = require('puppeteer');


const handler = {
    name: ['gtranslate'],
    async exec({ m, args }) {

        let translated;
        let url = `https://translate.google.co.id/?hl=id&sl=en&tl=id&text=${encodeURI(args.join(' '))}%0A&op=translate`
        
        
        try {
            let browser = await puppeteer.launch({
                headless: true,
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
                ]
            });
            let page = await browser.newPage();
            await page.goto(url, { waitUntil: ['domcontentloaded', 'load', 'networkidle2'] });
            translated = await page.evaluate(() => {
                return document.querySelector('span[jsname="W297wb"]').innerHTML
                // translated += document.querySelector('span[jsname="W297wb"]').innerHTML
                // translated.push(document.querySelector('span[jsname="W297wb"]').innerHTML)
                // msg.reply(document.querySelector('span[jsname="W297wb"]').innerHTML)
            });
            
            await browser.close();
            
        }
        catch (err) {
            console.log(err);
        }
        finally {
            m.reply(translated)
        }


    }
}

// handler.exec()
module.exports = handler