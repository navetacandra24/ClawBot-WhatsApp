const handler = {
    async exec({ args, client, m }) {
        
        if (m.from.includes('6285311174928')) {
            // let chats = await m.getChats();
            let chat = await m.getChatById(m.from);
            console.log(chat);
        } else {
            // return
            m.reply('Kamu siapa? Perintah ini khusus *OWNER*')
        }
        
    }
}

module.exports = handler