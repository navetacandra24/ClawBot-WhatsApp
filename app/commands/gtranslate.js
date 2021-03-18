const gtranslate = require(`${__dirname}/../helper/gtranslate`);


const handler = {
    async exec({ m, args }) {

        if (args.length < 3) {
            m.reply(`Masukkan parameter dengan benar, Contoh: \n#gtranslate indonesia inggris Halo dunia`)
        } else {
            let from = args[0]
            let to = args[1]
            args.splice(0, 2);
            let _text = args.join(' ');
            // console.log(text_b);

            try {
                let translated = await gtranslate(from, to, _text);
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