const handler = {
    async exec({ args, client, m, messageFrom }) {
        
        let chat = await client.getChatById(m.from);
        let ownergroup = chat.groupMetadata.participants.filter(e => e.isSuperAdmin === true)
        let oGroup = ownergroup ? ownergroup[0].id._serialized : ''
        if (chat.isGroup) {
            if (chat.groupMetadata.participants.filter(e => e.id._serialized === messageFrom)[0].isAdmin || messageFrom === global.ownerId) {
                let isBotAdmin = chat.groupMetadata.participants.filter(e => e.id._serialized === global.botId)[0].isAdmin;
                if (isBotAdmin) {
                    let allMember = chat.groupMetadata.participants.filter(e => e.id._serialized !== global.ownerId).filter(e => e.id._serialized !== oGroup).filter(e => e.id._serialized !== global.botId);
                    for (let i = 0; i < allMember.length; i++) {
                        chat.removeParticipants([allMember[i].id._serialized])
                    }
                } else {
                    m.reply('Jadikan bot sebagai admin!')
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

