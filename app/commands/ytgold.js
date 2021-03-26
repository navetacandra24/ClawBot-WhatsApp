const fs = require('fs');
const ytb = require(`${__dirname}/../helper/ytbtn`);

const handler = {
    async exec({ m, args, MessageMedia, client, messageFrom }) {
        if (args.length >= 1) {
            await m.reply('Memproses..\n*Mohon tunggu sekitar 1 menit.*')
            let fname = `ytgold-${new Date().getTime()}-${messageFrom.split('@')[0]}`;
            await ytb('gold', args.join(' '), fname)
            setTimeout(() => {
                try {
                    let _exist = fs.existsSync(`${__dirname}/../src/${filename}.jpg`)
                    if (_exist) {
                        let media = MessageMedia.fromFilePath(`${__dirname}/../src/${fname}.jpg`);
                        m.reply(media, m.from, { caption: 'Anjay youtuber :v' });
                    } else {
                        m.reply('*Maaf gambar tidak dapat dikirim karena terjadi kesalahan system*')
                    }
                } catch (err) {
                    m.reply(err)
                }
            }, 2000);
            
        } else {
            m.reply('Uhmm.. namanya?')
        }
    }
}

module.exports = handler