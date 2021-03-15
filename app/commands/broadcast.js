const handler = {
    name: ['bc'],
    helper: function () {
        return this.name.map(v => '#' + v + ' <pesan> (Owner only)')
    },
    async exec({ args, client, m }) {
        
        if (m.from.includes('6285311174928')) {
            if (args.length >= 1) {
                const chats = await client.getChats();
                let contact = [];
                for (let i = 0; i < chats.length; i++) {
                    contact.push(chats[i].id._serialized)
                }
                // client.sendMessage(contact[0], args.join(' '))
                m.reply(`Mengirim pesan broadcast ke ${contact.length} chat.`)
                contact.forEach((e, i) => {
                    client.sendMessage(e, `_*${args.join(' ')}*_\n「 Broadcast 」`)
                })
            } else {
                m.reply('Pesannya?')
            }
        } else {
            return
        }
        
    }
}

module.exports = handler