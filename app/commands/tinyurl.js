const fetch = require('node-fetch');
const lib = require(`${__dirname}/../lib/r2str`)

const handler = {
    command: /tinyurl/,
    helper: function () {
        return lib(this.command).map(v => '#' + v + ' <url>')
    },
    async exec({ m, args }) {
        let url = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
        let res;
        try {
            let _res = await fetch(`https://fierce-brushlands-90323.herokuapp.com/tinyurl?url=${url}`);
            res = await _res.json()
        } catch (err) {
            m.reply(err)
        }
        finally {
            await m.reply(res.result, m.from, {linkPreview: false})
        }

    }
};

module.exports = handler