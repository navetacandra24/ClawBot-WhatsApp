const fetch = require('node-fetch');

const handler = {
    async exec({ m, args, MessageMedia, client }) {
        if (args.length >= 1) {
            let link = 'https://fierce-brushlands-90323.herokuapp.com/ytbutton?type=gold&name' + args.join(' ');
            let _fetch = await fetch(link, { mode: 'no-cors', timeout: 100 * 60 * 60 });
            let _res = await _fetch.json();
            let _mimetype = await _res.results.data.mimetype;
            let _base64 = await _res.results.data.base64;
            let media = new MessageMedia(_mimetype, _base64, undefined);
            m.reply(media, m.from, {caption: 'Anjay YouTuber :v'})
        } else {
            m.reply('Uhmm.. namanya?')
        }
    }
}

module.exports = handler