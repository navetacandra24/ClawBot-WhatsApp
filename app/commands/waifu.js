const generateWaifu = require('waifu-generator');
const {readFileSync} = require('fs')

const handler = {
    name: 'waifu',
    async exec({ m, MessageMedia, client }) {

        const opt = {
            filename: "waifu",
            path: `./app/src/`
        };
        let mentions = [];
        let creator = '';

        try {

            await generateWaifu(opt)
            // m.getContact().then(async (res) => {
            //     mentions.push(await client.getContactById(res.id._serialized))
            // })
            const ct = await m.getContact();
            mentions.push(await client.getContactById(ct.id._serialized));
            creator += ct.id.user
            
        } catch (err) {
            m.reply(err)
        }
        
        finally {
            let media = MessageMedia.fromFilePath(`${__dirname}/../src/waifu.png`)
            // console.log(media);
            m.reply(media, m.from, {caption: `Waifunya @${creator}.`, mentions: mentions})
        }

    }
};

module.exports = handler