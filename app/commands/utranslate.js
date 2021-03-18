const utranslate = require(`${__dirname}/../helper/utranslate`);

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
            m.reply(`Masukkan parameter dengan benar, Contoh: \n#utranslate indonesia inggris Halo dunia`)
        } else {
            let from = args[0]
            let to = args[1]
            args.splice(0, 2);
            let _text = args.join(' ');
            // console.log(text_b);

            try {
                let translated = await utranslate(from, to, _text);
                let result = `*${lang[from]} :* ${_text}\n*${lang[to]} :* ${translated.result.translated}`;
                // console.log(result);
                m.reply(result)
            } catch (err) {
                // console.log(err);
                m.reply(err)
            }
        }


    }
}

// handler.exec()
module.exports = handler