const fetch = require('node-fetch');

let title = [];
let link = [];
let snippet = [];
let data = [];
const handler = {
    async exec({ m, args }) {
        if (args.length >= 1) {
            let q = args.join(' ');
            let _fetch = await fetch(`https://fierce-brushlands-90323.herokuapp.com/google?q=${q}`);
            let _res = await _fetch.json();
            let _stat = await _res.status
            if (_stat === "success") {
                let _items = await _res.results // array
                _items.forEach(e => {
                    title.push(e.title)
                    link.push(e.link)
                    snippet.push(e.snippet)
                });
                for (let i = 0; i < _items.length; i++) {
                    data.push("*" + title[i] + "*\n" + link[i] + "\n```" + snippet[i] + "```");
                }
                m.reply(data.join('\n\n'))
            } else {
                m.reply('Pencarian tidak ditemukan!')
            }
        } else {
            m.reply('Mohon isi pencarian!')
        }
    }
};

module.exports = handler