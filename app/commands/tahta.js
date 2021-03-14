const tahta = require(`${__dirname}/../helper/tahta`);
const webp = require('webp-converter');
const fs = require('fs')

const dir = `${__dirname}/../src`

const handler = {
    name: 'tahta',
    async exec({ args, m, MessageMedia, client }) {
        await m.reply('Memproses..')
        const text = args.join(' ');
        await tahta(text)

        // webp.grant_permission();

        let media = MessageMedia.fromFilePath(`${dir}/tahta.jpg`)
        m.reply(media)
        // const result = webp.cwebp(`${dir}/tahta.jpg`, `${dir}/tahta.webp`, '-q 80', logging = '-v')
        //     result.then(() => {
        //         // console.log('Compile is done');
        //         fs.unlinkSync(`${__dirname}/tahta.webp`)
        //     })
        //     .catch(err => {
        //         console.log(err);
        //         m.reply(err)
        //     });
    }
}

module.exports = handler