const handler = {
    async exec({ args, client, m, messageFrom }) {
        
        let chat = await client.getChatById(m.from);
        let ownergroup = chat.groupMetadata.owner._serialized
        if (chat.isGroup) {
            if (m.mentionedIds) {
                if (chat.groupMetadata.participants.filter(e => e.id._serialized === messageFrom)[0].isAdmin || messageFrom === global.ownerId) {
                    let isBotAdmin = chat.groupMetadata.participants.filter(e => e.id._serialized === global.botId)[0].isAdmin;
                    if (isBotAdmin) {
                        if (m.mentionedIds.includes(global.ownerId)) m.reply('Itu ownerku, gak boleh dikick!')
                        else if (m.mentionedIds.includes(ownergroup)) m.reply('Owner group gak boleh dikick!')
                        else if (m.mentionedIds.includes(global.botId)) m.reply('Itu nomorku, gak boleh dikick!')
                        else chat.removeParticipants(m.mentionedIds)
                    } else {
                        m.reply('Jadikan bot sebagai admin!')
                    }
                } else {
                    m.reply('Kamu siapa? perintah ini khusus *ADMIN Group*')
                }
            } else {
                m.reply('Tag orangnya!')
            }
        } else {
            m.reply('Hanya bisa digunakan digroup!')
        }
        
    }
}

module.exports = handler

