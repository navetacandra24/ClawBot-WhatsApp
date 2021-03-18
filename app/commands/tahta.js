const tahta = require(`${__dirname}/../helper/tahta`);
const webp = require('webp-converter');
const fs = require('fs')
const lib = require(`${__dirname}/../lib/r2str`)

const dir = `${__dirname}/../src/tahta.jpg`

const handler = {
    command: /(harta|tahta)/,
    helper: function () {
        return lib(this.command).map(v => '#' + v + ' <teks>')
    },
    async exec({ args, m, MessageMedia, client }) {
        if (checkExist()) {
            m.reply('Maaf sedang dalam proses lain!')
        } else {
            await m.reply('Memproses..\n*Mohon Tunggu Sebentar..*')
            const text = args.join(' ');
            await tahta(text)


            let media = MessageMedia.fromFilePath(dir)
            await m.reply(media, m.from, { caption: '*© ClawBot*' })
            fs.unlinkSync(dir)
            fs.unlinkSync(`${__dirname}/../tahta-proses.txt`)
        }
    }
}

module.exports = handler


function checkExist() {
    if (fs.existsSync(`${__dirname}/../tahta-proses.txt`)) {
        return true
    } else {
        return false
    }
}