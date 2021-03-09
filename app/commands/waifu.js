const generateWaifu = require('waifu-generator');
const {readFileSync} = require('fs')

const handler = {
    name: 'waifu',
    async exec({ m, MessageMedia, client }) {

        const opt = {
            filename: "waifu",
            path: `./app/`
        };

        await generateWaifu(opt)
        
        const file = readFileSync(`${opt.path}${opt.filename}.png`, 'base64')
        const media = new MessageMedia('image/png', file, undefined);

        let mentions = [];
        let text = ''
        m.getContact().then(async (res) => {
            text += `Waifu @${res.id.user}`
            mentions.push(await client.getContactById(res.id._serialized))
            // message.reply(`Tes @${res.id.user}`, message.from, {mentions: mentions})
        })
        m.reply(media, m.from, { mentions: mentions }).then(res => {
            m.reply(text)
        })
        // m.reply(text, m.from, { mentions: mentions, caption: text })
        // client.sendMessage(m.from, media, {caption: text, mentions: mentions})

    }
};

module.exports = handler