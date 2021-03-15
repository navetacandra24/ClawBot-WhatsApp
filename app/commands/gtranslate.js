const gtranslate = require(`${__dirname}/../helper/gtranslate`);


const handler = {
    name: ['gtranslate'],
    helper: function () {
        return this.name.map(v => '#' + v + ' <bahasa asal> <bahasa tujuan> <teks> (Support Inggris & Indonesia only)')
    },
    async exec({ m, args }) {

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

// handler.exec()
module.exports = handler