const handler = {
    async exec({ args, client, m }) {
        
        if (m.from.includes('6285311174928')) {
            let chat = await m.getChats(m.from);
            console.log(chat);
        } else {
            m.reply('Kamu siapa? Perintah ini khusus *OWNER*')
        }
        
    }
}

module.exports = handler