const handler = {
    async exec({ args, client, m, messageFrom }) {
        
        let chat = await client.getChatById(m.from);
        let botnumber = '6281991115938@c.us';
        let ownerbot = '6285311174928@c.us';
        if (chat.isGroup) {
            if (chat.groupMetadata.participants.filter(e => e.id._serialized === messageFrom)[0].isAdmin || messageFrom === ownerbot) {
                let isBotAdmin = chat.groupMetadata.participants.filter(e => e.id._serialized === botnumber)[0].isAdmin;
                if (isBotAdmin) {
                    if (args.length > 1) {
                        let listNum = []
                        args.forEach(async e => {
                            listNum.push(await client.getNumberId(e))
                        });
                        // let isvalidNum = [];
                        console.log(args.map(v => v + '@c.us'));
                        listNum.forEach(async function (r)  {
                            console.log(r);
                            let _p = await client.isRegisteredUser(r);
                            console.log(_p);
                            if (_p) {
                                // chat.addParticipants([_p])
                                chat.addParticipants(r)
                            } else {
                                m.reply(`nomor _${this}_ tidak valid / tidak terdaftar di WhatsApp`)
                            }
                        });
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

