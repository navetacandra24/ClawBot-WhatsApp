const gtranslate = require(`${__dirname}/../helper/gtranslate`);

const lang = {
    Indonesia: 'Indonesia',
    Indonesian: 'Indonesia',
    indonesia: 'Indonesia',
    indonesian: 'Indonesia',
    Inggris: 'Inggris',
    inggris: 'Inggris',
    English: 'Inggris',
    english: 'Inggris'
}

const handler = {
    async exec({ m, args }) {

        if (args.length < 3) {
            m.reply(`Masukkan parameter dengan benar, Contoh: \n#gtranslate indonesia inggris Halo dunia`)
        } else {
            let from = args[0]
            let to = args[1]
            if (lang[from] && lang[to]) {
                args.splice(0, 2);
                let _text = args.join(' ');
                try {
                    let translated = await gtranslate(from, to, _text);
                    let result = `*${lang[from]} :* ${_text}\n*${lang[to]} :* ${translated.result.translated}`;
                    m.reply(result)
                } catch (err) {
                    m.reply(err)
                }
            } else {
                m.reply('Hanya support bahasa Indonesia dan Inggris')
            }
        }


    }
}

// handler.exec()
module.exports = handler