const fetch = require("node-fetch");
const fs = require('fs')

let path = `${__dirname}/../glitch-proses.txt`
let exist = fs.existsSync(path)

const handler = {
    async exec({ m, args, MessageMedia }) {
        if (!exist) {
            let fullText = args.join(' ');
            let _ft = fullText.split(' | ')
            if (_ft.length >= 2) {
                await m.reply('Memproses..\n*Mohon tunggu sekitar 1 menit.*')
                await fs.writeFileSync(path, '');
                let link = `http://fierce-brushlands-90323.herokuapp.com/glitch-text?text1=${encodeURIComponent(_ft[0])}&text2=${encodeURIComponent(_ft[1])}`;
            
                try {
                    let _fetch = await fetch(link, {
                        mode: 'no-cors',
                        timeout: 100 * 60 * 60
                    });
                    let _res = await _fetch.json();
                    let _base64 = await _res.results.data.base64;
                    let media = new MessageMedia('image/jpeg', _base64, '');
                    m.reply(media)
                } catch (err) {
                    m.reply(err)
                } finally {
                    fs.unlinkSync(path)
                }
            } else {
                m.reply('Masukkan format dengan benar\n*Contoh :* #glitchtext Clawbot | GG Gaming')
            }
        } else {
            m.reply('Maaf sedang dalam proses lain\n *Mohon coba lagi nanti!*')
        }
    }
}

module.exports = handler