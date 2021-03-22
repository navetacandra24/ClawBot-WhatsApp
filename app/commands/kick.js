const handler = {
    async exec({ args, client, m }) {
        
        if (m.from.includes('6285311174928')) {
            let chat = await client.getChatById(m.from);
            if (chat.isGroup) {
                if (m.mentionedIds) {
                    let isBotAdmin = chat.groupMetadata.participants.filter(e => e.id.user === '6281991115938').isAdmin;
                    console.log(chat.groupMetadata.participants);
                    console.log(isBotAdmin);
                    if (isBotAdmin) {
                        chat.removeParticipants(m.mentionedIds)
                    } else {
                        m.reply('Jadikan bot sebagai admin!')
                    }
                } else {
                    m.reply('Tag orangnya!')
                }
            } else {
                m.reply('Hanya bisa digunakan digroup!')
            }
        } else {
            m.reply('Kamu siapa? Perintah ini khusus *OWNER*')
        }
        
    }
}

module.exports = handler