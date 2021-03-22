const handler = {
    async exec({ args, client, m }) {
        
        let chat = await client.getChatById(m.from);
        if (chat.isGroup) {
            if (m.mentionedIds) {
                console.log(m.mentionedIds);
                if (chat.groupMetadata.participants.filter(e => e.id._serialized === m.author)[0].isAdmin) {
                    let botnumber = '6281991115938@c.us';
                    let ownerbot = '6285311174928@c.us';
                    let ownergroup = chat.groupMetadata.participants.filter(e => e.isSuperAdmin);
                    let isBotAdmin = chat.groupMetadata.participants.filter(e => e.id._serialized === botnumber)[0].isAdmin;
                    if (isBotAdmin) {
                        console.log(chat.groupMetadata.participants);
                        console.log(ownergroup);
                        /*if(mentionedIds.includes(ownergroup)){
                            m.reply('Owner group gak boleh dikick!')
                        }*/ if(mentionedIds.includes(ownerbot)){
                            m.reply('Itu ownerku, jadi gk boleh dikick!')
                        } else if (mentionedIds.includes(botnumber)) {
                            m.reply('Itu nomorku, jadi gk bisa dikick!')
                        } else {
                            chat.removeParticipants(m.mentionedIds)
                        }
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

