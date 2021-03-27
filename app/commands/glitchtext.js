const fs = require('fs');
const fetch = require('node-fetch');

const handler = {
    async exec({ m, args, MessageMedia, messageFrom, dbid }) {
        let fullText = args.join(' ');
            let _ft = fullText.split(' | ')
        if (_ft.length >= 2) {
            await m.reply('Memproses..\n*Mohon tunggu sekitar 1 menit.*');
            // await execute(_ft, messageFrom, filename)
            try {
                let _fetch = await fetch(`https://shielded-hollows-79689.herokuapp.com/glitch-text?text1=${encodeURIComponent(_ft[0])}&text2=${encodeURIComponent(_ft[1])}&fname=${dbid}`,{
                    mode: 'no-cors',
                    timeout: 0
                })
                let _res = await _fetch.json();
                let mt = _res.results.data.mimetype;
                let b64 = _res.results.data.base64;
                if (b64.startsWith('/')) {
                    let media = new MessageMedia(mt, b64, '')
                    m.reply(media)
                } else {
                    m.reply('*Gambar tidak dapat terkirim, karena terjadi kesalahan sistem.*')
                }
            } catch (err) {
                m.reply(err)
            }
            } else {
                m.reply('Masukkan format dengan benar\n*Contoh :* #glitchtext Clawbot | GG Gaming')
            }
    }
}

module.exports = handler