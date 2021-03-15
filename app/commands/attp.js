const fs = require('fs');
const webp = require('webp-converter')
const attp = require(`${__dirname}/../helper/attp`)

const handler = {
    name: ['attp'],
    helper: function () {
        return this.name.map(v => '#' + v + ' <text>')
    },
    async exec({m, args, MessageMedia, client}) {
        await m.reply('Memproses..')
        const text = args.join(' ');
        await attp(text)

        webp.grant_permission();

        const result = webp.gwebp(`${__dirname}/../src/attp.gif`, `${__dirname}/../src/attp.webp`, "-q 80", logging = "-v");
        result
            .then(async e => {
                let media = MessageMedia.fromFilePath(`${__dirname}/../src/attp.webp`)
                await m.reply(media, m.from, { sendMediaAsSticker: true })
                // client.sendMessage(m.from, media, {sendMediaAsSticker: true})
                setTimeout(() => {
                    fs.unlinkSync(`${__dirname}/../src/attp.gif`)
                    fs.unlinkSync(`${__dirname}/../src/attp.webp`)
                }, 500);
            })
            .catch(err => {
                m.reply(err)
            })
    }
}

module.exports = handler