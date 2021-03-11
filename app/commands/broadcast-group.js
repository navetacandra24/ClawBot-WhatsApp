const handler = {
    name: ['bcgc'],
    async exec({ args, client, m }) {
        
        if (m.from.includes('6285311174928')) {
            if (args.length >= 1) {
                const chats = await client.getChats();
                let contact = [];
                let groups = chats.filter(e => e.isGroup).filter(e => !e.isReadOnly)
                for (let i = 0; i < groups.length; i++) {
                    contact.push(groups[i].id._serialized)
                }
                m.reply(`Mengirim pesan broadcast ke ${contact.length} group.`)
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