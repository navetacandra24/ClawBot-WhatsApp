const rp = require('request-promise');
const cheerio = require('cheerio')

const handler = {
    async exec({ m, args, MessageMedia, client }) {
        let url = `https://kbbi.kemdikbud.go.id/entri/${entri}`;
        const html = cheerio.load(await rp(url))('div[class="container body-content"]').html();
        const _ = cheerio.load(html);
        let existRes = _('ol').html() ? true : false;
        if (existRes) {
            let fullTitle = _('h2')
            let title = fullTitle.includes(' » ')
                ? fullTitle.split(' » ')[1]
                : fullTitle
            let arti = []
            _('ol').find('font[color="red"]').remove().html();

            _('ol > li').each((i, el) => {
                return arti.push(_(el).text())
            });
        
        // return arti
            m.reply(`${title}\n${arti.join('\n')}`)
        } else {
            m.reply(`Arti "_${args.join(' ')}_" tidak ditemukan.`)
        }
    }
}

module.exports = handler