const handler = {
    async exec({ m, args, MessageMedia, client, messageFrom }) {
        if (args.length >= 1) {
            await m.reply('Laporan akan dikirimkan ke owner, Laporan main-main = BLOCK!');
            client.sendMessage(
                '6285311174928@c.us',
                `${args.join(' ')}\nBug Report dari : @${messageFrom.split('@')[0]}`,
                { mentions: [await client.getContactById(messageFrom)] }
            )
        } else {
            m.reply('Apa yang mau dilapor kak?')
        }
    }
}

module.exports = handler