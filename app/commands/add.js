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
                    if (args.length > 1) {
                        args.map(async (v) => {
                            let a = await client.isRegisteredUser(await client.getNumberId(v));
                            console.log(a);
                            console.log(await client.getNumberId(v));
                        })
                    } else {
                        
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

