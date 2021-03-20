const fetch = require('node-fetch')
const handler = {
    async exec({ m, args, MessageMedia, client }) {
        if (args.length < 1) {
            m.reply('Uhmm.. teksnya?')
        } else {
            let _fetch = await fetch('http://fierce-brushlands-90323.herokuapp.com/ttp?text=' + encodeURIComponent(args.join(' ')), {
                mode: 'no-cors',
                timeout: 1000 * 3600 * 24
            });
            let _res = await _fetch.json();
            let _mimetype = _res.results.data.mimetype;
            let _base64 = _res.results.data.base64;
            let media = new MessageMedia(_mimetype, _base64, undefined);
            m.reply(media, m.from, {sendMediaAsSticker: true})
        }
    }
}

module.exports = handler