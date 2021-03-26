const handler = {
    async exec({ m, args }) {
        if (args.length >= 1) {
            let url = args[0]
            const browser = await puppeteer.launch({
                headless: true,
                ignoreHTTPSErrors: true,
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
                product: 'chrome'
            });
            const page = await browser.newPage();
            await page.setDefaultNavigationTimeout(0)
            await page.goto('https://bitly.com/', {
                waitUntil: 'networkidle2'
            })
                .then(async () => {
                    await page.type('#shorten_url', url, {delay: 0});
                    await page.click('#shorten_btn');
                    await new Promise(resolve => setTimeout(resolve, 2000))
        
                    const element = await page.$('#shortened_url');
                    const shortened = await (await element.getProperty('value')).jsonValue();
                    if (shortened !== "") {
                        m.reply(shortened)
                    } else {
                        m.reply('Link tidak dapat di-konversi.')
                    }
                })
                .catch(err => m.reply(err))
            await browser.close()
        } else {
            m.reply('Mana URL-nya kak!')
        }

    }
};

module.exports = handler