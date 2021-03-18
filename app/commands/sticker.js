const lib = require(`${__dirname}/../lib/r2str`)
const handler = {
    command: /(stiker|sticker)/,
    helper: function () {
        return lib(this.command).map(v => '#' + v + ' (Support caption only)')
    },
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