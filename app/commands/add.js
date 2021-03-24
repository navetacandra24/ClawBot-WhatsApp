const handler = {
    async exec({ args, client, m, messageFrom }) {
        
        // console.log(args.map(v => v + '@c.us'));
        let chat = await client.getChatById(m.from);
        let botnumber = '6281991115938@c.us';
        let ownerbot = '6285311174928@c.us';
        if (chat.isGroup) {
            if (chat.groupMetadata.participants.filter(e => e.id._serialized === messageFrom)[0].isAdmin || messageFrom === ownerbot) {
                let isBotAdmin = chat.groupMetadata.participants.filter(e => e.id._serialized === botnumber)[0].isAdmin;
                if (isBotAdmin) {
                    if (args.length >= 1) {
                        if (args.includes('+') || args.includes('-') || args.includes('(') || args.includes(')')) {
                            m.reply('Masukkan format dengan benar!\nContoh: #add 6281991115938')
                        } else {
                            args.map(async (v) => {
                                let numberId = await client.getNumberId(v)
                                if (numberId._serialized) {
                                    chat.addParticipants([numberId._serialized])
                                } else {
                                    m.reply('Nomor tidak valid / tidak terdaftar!')
                                }
                            })
                        }
                    } else {
                        m.reply('Mana nomornya kak?')
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

