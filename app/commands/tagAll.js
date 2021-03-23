const handler = {
    async exec({ args, client, m, messageFrom }) {
        
        let chat = await client.getChatById(m.from);
        let ownerbot = '6285311174928@c.us';
        if (chat.isGroup) {
            if (chat.groupMetadata.participants.filter(e => e.id._serialized === messageFrom)[0].isAdmin || messageFrom === ownerbot) {
                let mentions = [];
                let text = [];
                await chat.groupMetadata.participants.forEach(async mb => {
                    mentions.push(await client.getContactById(mb.id._serialized));
                    text.push(`@${mb.id.number}`)
                });
                m.reply(text.join('\n'), m.from, {mentions: mentions})
            } else {
                m.reply('Kamu siapa? perintah ini khusus *ADMIN Group*')
            }
        } else {
            m.reply('Hanya bisa digunakan digroup!')
        }
        
    }
}

module.exports = handler

