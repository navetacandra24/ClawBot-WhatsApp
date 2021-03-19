const fetch = require("node-fetch");

const handler = {
    async exec({ m, args, MessageMedia }) {
        let fullText = args.join(' ');
        let _ft = fullText.split(' | ')
        if (_ft.length >= 2) {
            await m.reply('Memproses..\n*Mohon tunggu sebentar*')
            let link = `http://fierce-brushlands-90323.herokuapp.com/glitch-text?text1=${_ft[0]}&text2=${_ft[1]}`;
            
            let _fetch = await fetch(link);
            let _res = await _fetch.json();
            let _base64 = await _res.base64;
            // console.log(link);
            let media = new MessageMedia('image/jpeg', _base64, '');
            m.reply(media)
        } else {
            m.reply('Masukkan format dengan benar\n*Contoh :* #glitchtext Clawbot | GG Gaming')
        }
    }
}

module.exports = handler