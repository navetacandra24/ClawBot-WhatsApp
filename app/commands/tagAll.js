const handler = {
    async exec({ args, client, m, messageFrom }) {
        
        let chat = await client.getChatById(m.from);
        let member = chat.groupMetadata.participants
        let ownerbot = '6285311174928@c.us';
        if (chat.isGroup) {
            if (member.filter(e => e.id._serialized === messageFrom)[0].isAdmin || messageFrom === ownerbot) {
                let mentions = [];
                let text = ``;
                member.forEach(async mb => {
                    mentions.push(await client.getContactById(mb.id._serialized));
                    text += `@${mb.id.number}\n`
                });
                m.reply(text, m.from, {mentions: mentions})
            } else {
                m.reply('Kamu siapa? perintah ini khusus *ADMIN Group*')
            }
        } else {
            m.reply('Hanya bisa digunakan digroup!')
        }
        
    }
}

module.exports = handler

