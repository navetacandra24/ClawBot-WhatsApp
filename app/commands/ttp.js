const webp = require('webp-converter')
const ttp = require(`${__dirname}/../helper/ttp`)

const handler = {
    name: 'ttp',
    async exec({m, args, MessageMedia, client}) {
        m.reply('Memproses..')
        const text = args.join(' ');
        await ttp(text)

        webp.grant_permission();

        const result = webp.cwebp(`${__dirname}/../src/ttp.jpg`, `${__dirname}/../src/ttp.webp`, '-q 80', logging = '-v')
            result.then(() => {
                // console.log('Compile is done');
                let media = MessageMedia.fromFilePath(`${__dirname}/../src/ttp.webp`)
                m.reply(media, m.from, { sendMediaAsSticker: true })
            })
            .catch(err => {
                console.log(err);
                m.reply(err)
            });
    }
}

module.exports = handler