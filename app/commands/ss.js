const fetch = require('node-fetch');
const fs = require('fs')

const handler = {
    async exec({ m, MessageMedia, args }) {
        if (args.length >= 1) {
            let url = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0];
            let _fetch = await fetch(`https://fierce-brushlands-90323.herokuapp.com/ssweb?url=${url}&json=true`, {mode: 'no-cors', timeout: 0});
            let _res = await _fetch.json();
            let _mime = await _res.results.data.mimetype;
            let _base64 = await _res.results.data.base64;
            let media = new MessageMedia(_mime, _base64, undefined);
            m.reply(media, m.from, {caption: url})
        } else {
            m.reply('Uhmm.. URL-nya?')
        }
    }
}

module.exports = handler