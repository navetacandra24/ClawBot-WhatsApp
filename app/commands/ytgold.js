const fs = require('fs');
const fetch = require('node-fetch');

const handler = {
    async exec({ m, args, MessageMedia, messageFrom, dbid }) {
        if (args.length >= 1) {
            await m.reply('Memproses..\n*Mohon tunggu sekitar 1 menit.*');
            // await execute(_ft, messageFrom, filename)
            try {
                let _fetch = await fetch(`https://fierce-brushlands-90323.herokuapp.com.herokuapp.com/ytbutton?type=gold&name=${encodeURIComponent(args.join(' '))}&fname=${dbid}`,{
                    mode: 'no-cors',
                    timeout: 0
                })
                let _res = await _fetch.json();
                let mt = _res.results.data.mimetype;
                let b64 = _res.results.data.base64;
                if (b64.startsWith('/9j')) {
                    let media = new MessageMedia(mt, b64, '')
                    m.reply(media)
                } else {
                    m.reply('*Gambar tidak dapat terkirim, karena terjadi kesalahan sistem.*')
                }
            } catch (err) {
                m.reply(err)
            }
            } else {
                m.reply('Namanya?')
            }
    }
}

module.exports = handler