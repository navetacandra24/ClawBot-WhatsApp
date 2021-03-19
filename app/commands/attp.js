const fetch = require('node-fetch')

const handler = {
    async exec({ m, args, MessageMedia, client }) {
        if (args.length < 1) {
            m.reply('Uhmm.. teksnya?')
        } else {
            // if (fs.existsSync(`${__dirname}/../src/attp.webp`)) {
            //     fs.unlinkSync(`${__dirname}/../src/attp.gif`)
            //     fs.unlinkSync(`${__dirname}/../src/attp.webp`)
            //     execute(m, args, MessageMedia)
            // } else {
            //     execute(m, args, MessageMedia)
            // }
            // await m.reply()
            let _fetch = await fetch('http://fierce-brushlands-90323.herokuapp.com/attp?text=' + args.join(' '));
            let _res = await _fetch.json();
            let _mimetype = _res.results.data.mimetype;
            let _base64 = _res.results.data.base64;
            let media = new MessageMedia(_mimetype, _base64, undefined);
            m.reply(media, m.from, {sendMediaAsSticker: true})
        }
    }
}


module.exports = handler