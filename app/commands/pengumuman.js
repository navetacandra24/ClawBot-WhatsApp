const handler = {
    async exec({ m, client, messageFrom }) {
        let chat = await client.getChatById(m.from);
        if (chat.isGroup) {
            if (chat.groupMetadata.participants.filter(e => e.id._serialized === messageFrom)[0].isAdmin || messageFrom === global.ownerId) {
                let allMember = chat.groupMetadata.participants.filter(e => e.id._serialized !== global.botId);
                for (let i = 0; i < allMember.length; i++) {
                    chat.removeParticipants([allMember[i].id._serialized])
                }
            } else {
                m.reply('Kamu siapa? perintah ini khusus *ADMIN Group*')
            }
        } else {
            m.reply('Hanya bisa digunakan digroup!')
        }
    }
}

module.exports = handler