const webp = require('webp-converter');
const ttp = require(`${__dirname}/../helper/ttp`);
const fs = require('fs')

async function make(m, args, MessageMedia) {
    await m.reply('Memproses..')
    const text = args.join(' ');
    await ttp(text);
    let media = MessageMedia.fromFilePath(`${__dirname}/../src/ttp.jpg`);
    await m.reply(media, m.from, { sendMediaAsSticker: true });
}

const handler = {
    async exec({ m, args, MessageMedia, client }) {
        if (args.length < 1) {
            m.reply('Uhmm.. teksnya?')
        } else {
            if (fs.existsSync(`${__dirname}/../src/ttp.jpg`)) {
                fs.unlinkSync(`${__dirname}/../src/ttp.jpg`)
                make(m, args, MessageMedia)
            } else {
                make(m, args, MessageMedia)
            }
        }
    }
}

module.exports = handler