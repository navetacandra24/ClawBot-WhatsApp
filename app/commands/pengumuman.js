const handler = {
    async exec({ m, client, messageFrom, args, dbid }) {
        let chat = await client.getChatById(m.from);
        if (chat.isGroup) {
            if (chat.groupMetadata.participants.filter(e => e.id._serialized === messageFrom)[0].isAdmin || messageFrom === global.ownerId) {
                if (args.length >= 1) {
                    let allMember = chat.groupMetadata.participants.filter(e => e.id._serialized !== global.botId);
                    for (let i = 0; i < allMember.length; i++) {
                        client.sendMessage(allMember[i].id._serialized, `${args.join(' ')}\n\nMessage from : @${dbid}  || https://wa.me/${dbid}`, m.from, {mentions: [await client.getContactById(messageFrom)]})
                    }
                } else {
                    m.reply('Pesannya?')
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