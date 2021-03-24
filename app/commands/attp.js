const fetch = require('node-fetch')

const handler = {
    async exec({ m, args, MessageMedia, client }) {
        if (args.length < 1) {
            m.reply('Uhmm.. teksnya?')
        // } else {
        //     let _fetch = await fetch('http://fierce-brushlands-90323.herokuapp.com/attp?text=' + encodeURIComponent(args.join(' ')), {
        //         mode: 'no-cors',
        //         timeout: 0
        //     });
            let _fetch = await fetch('http://api.xteam.xyz/attp?text=' + encodeURIComponent(args.join(' ')), {
                mode: 'no-cors',
                timeout: 0
            });
            let _res = await _fetch.json();
            // let _mimetype = _res.results.data.mimetype;
            let _mimetype = 'data:image/webp';
            // let _base64 = _res.results.data.base64;
            let _base64 = _res.result;
            let media = new MessageMedia(_mimetype, _base64, undefined);
            m.reply(media, m.from, {sendMediaAsSticker: true})
        }
    }
}


module.exports = handler