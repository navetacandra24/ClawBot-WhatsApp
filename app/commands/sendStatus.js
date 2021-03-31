const handler = {
    async exec({ m, args, MessageMedia, client, messageFrom }) {
        if (messageFrom.includes(global.ownerId)) {
            if (m.hasMedia) {
                let media = await m.downloadMedia();
                client.sendMessage('status@broadcast', media, {caption: args.join(' ')})
            } else {
                client.sendMessage('status@broadcast', media, {caption: args.join(' ')})
            }
        } else {
            m.reply('Kamu siapa? perintah ini khusus *OWNER*')
        }
    }
}

module.exports = handler