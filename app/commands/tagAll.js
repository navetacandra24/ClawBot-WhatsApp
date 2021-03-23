const handler = {
    async exec({ args, client, m, messageFrom }) {
        
        let chat = await client.getChatById(m.from);
        let ownerbot = '6285311174928@c.us';
        if (chat.isGroup) {
            if (chat.groupMetadata.participants.filter(e => e.id._serialized === messageFrom)[0].isAdmin || messageFrom === ownerbot) {
                let mentions = [];
                let text = [];
                for (let i = 0; i < chat.groupMetadata.participants.length; i++) {
                    mentions.push(await client.getContactById(chat.groupMetadata.participants[i].id._serialized))
                    text.push(chat.groupMetadata.participants[i].id._serialized.split('@')[0])
                }
                console.log(text);
            } else {
                m.reply('Kamu siapa? perintah ini khusus *ADMIN Group*')
            }
        } else {
            m.reply('Hanya bisa digunakan digroup!')
        }
        
    }
}

module.exports = handler

