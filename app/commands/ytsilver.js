const fetch = require('node-fetch');

const handler = {
    async exec({ m, args, MessageMedia, client, messageFrom }) {
        if (args.length >= 1) {
            await m.reply('Memproses..\n*Mohon tunggu sekitar 1 menit.*')
            // let link = `https://fierce-brushlands-90323.herokuapp.com/ytbutton?fname=${messageFrom}&type=silver&name=${args.join(' ')}`;
            let link = `https://shielded-hollows-79689.herokuapp.com//ytbutton?fname=${messageFrom}&type=silver&name=${args.join(' ')}`;
            let _fetch = await fetch(link, { mode: 'no-cors', timeout: 0});
            let _res = await _fetch.json();
            let _mimetype = await _res.results.data.mimetype;
            let _base64 = await _res.results.data.base64;
            if (_base64 === "" || !_base64.startsWith('/9j')) {
                m.reply('*Maaf gambar tidak dapat dikirim karena terjadi kesalahan system*')
            } else {
                let media = new MessageMedia(_mimetype, await _base64, '');
                m.reply(media, m.from, {caption: 'Anjay YouTuber :v'})
            }
        } else {
            m.reply('Uhmm.. namanya?')
        }
    }
}

module.exports = handler