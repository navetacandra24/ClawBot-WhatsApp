const webp = require('webp-converter');
const ttp = require(`${__dirname}/../helper/ttp`);
const fs = require('fs')

const handler = {
    name: 'ttp',
    async exec({m, args, MessageMedia, client}) {
        m.reply('Memproses..')
        const text = args.join(' ');
        await ttp(text)

        webp.grant_permission();

        const result = webp.cwebp(`${__dirname}/../src/ttp.jpg`, `${__dirname}/../src/ttp.webp`, '-q 80', logging = '-v')
            result.then(async () => {
                // console.log('Compile is done');
                let media = MessageMedia.fromFilePath(`${__dirname}/../src/ttp.webp`)
                await m.reply(media, m.from, { sendMediaAsSticker: true })
                fs.unlinkSync(`${__dirname}/../src/ttp.jpg`)
                fs.unlinkSync(`${__dirname}/../src/ttp.webp`)
            })
            .catch(err => {
                console.log(err);
                m.reply(err)
            });
    }
}

module.exports = handler