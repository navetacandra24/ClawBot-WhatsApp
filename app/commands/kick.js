const handler = {
    async exec({ args, client, m }) {
        
        if (m.from.includes('6285311174928')) {
            let chat = await client.getChatById(m.from);
            if (chat.isGroup) {
                console.log(chat.groupMetadata.participants);
            } else {
                m.reply('Hanya bisa digunakan digroup!')
            }
        } else {
            m.reply('Kamu siapa? Perintah ini khusus *OWNER*')
        }
        
    }
}

module.exports = handler