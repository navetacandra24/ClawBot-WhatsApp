const handler = {
    async exec({ m , MessageMedia}) {
        if (m.hasMedia) {
            let media = await m.downloadMedia();
            if (media.mimetype.includes('image/')) {
                const med = new MessageMedia(media.mimetype, media.data, media.filename)
                m.reply(media, m.from, {sendMediaAsSticker: true})
            } else {
                m.reply('Hanya support untuk gambar!')
            }
        } else {
            if (m.hasQuotedMsg) m.reply('Work caption only!')
            else m.reply('Mana fotonya kak?🙂')
        }
    }
};

module.exports = handler