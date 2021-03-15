const tahta = require(`${__dirname}/../helper/tahta`);
const webp = require('webp-converter');
const fs = require('fs')

const dir = `${__dirname}/../src`

const handler = {
    name: 'tahta',
    async exec({ args, m, MessageMedia, client }) {
        if (checkExist()) {
            m.reply('Sedang dalam proses lain!')
        } else {
            await m.reply('Memproses..\n*Mohon Tunggu Sebentar..*')
            const text = args.join(' ');
            await tahta(text)


            let media = MessageMedia.fromFilePath(`${dir}/tahta.jpg`)
            await m.reply(media, m.from, { caption: '*© @ClawBot*' })
            fs.unlinkSync(`${dir}/tahta.jpg`)
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