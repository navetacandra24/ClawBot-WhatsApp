const handler = {
    name: ['sticker', 'stiker'],
    help: '#stiker (caption)',
    async exec({ m , MessageMedia}) {
        if (m.hasMedia) {
            let media = await m.downloadMedia();
            if (media.mimetype.includes('image/')) {
                const med = new MessageMedia(media.mimetype, media.data, media.filename)
                m.reply(med, m.from, {sendMediaAsSticker: true})
            } else {
                m.reply('Mohon isi file dengan format yang benar!')
            }
        }
    }
};

module.exports = handler