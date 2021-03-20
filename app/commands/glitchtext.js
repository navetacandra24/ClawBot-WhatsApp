const fetch = require("node-fetch");

const handler = {
    async exec({ m, args, MessageMedia }) {
        let fullText = args.join(' ');
            let _ft = fullText.split(' | ')
            if (_ft.length >= 2) {
                await m.reply('Memproses..\n*Mohon tunggu sekitar 1 menit.*')
                let link = `http://fierce-brushlands-90323.herokuapp.com/glitch-text?text1=${encodeURIComponent(_ft[0])}&text2=${encodeURIComponent(_ft[1])}`;
            
                let _fetch = await fetch(link, {
                    mode: 'no-cors',
                    timeout: 36000 * 24
                });
                let _res = await _fetch.json();
                let _base64 = await _res.results.data.base64;
                if (_base64 === '' || !_base64.startsWith('/9')) {
                    m.reply('*Maaf gambar tidak dapat dikirim karena terjadi kesalahan system*')
                } else {
                    let media = new MessageMedia('image/jpeg', _base64, '');
                    m.reply(media)
                }
            } else {
                m.reply('Masukkan format dengan benar\n*Contoh :* #glitchtext Clawbot | GG Gaming')
            }
    }
}

module.exports = handler