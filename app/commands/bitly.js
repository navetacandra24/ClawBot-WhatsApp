const fetch = require('node-fetch');

const handler = {
    async exec({ m, args }) {
        let url = args[0]
        let res;
        try {
            let _res = await fetch(`https://fierce-brushlands-90323.herokuapp.com/bitly?url=${url}`, {
                mode: 'no-cors',
                timeout: 0
            });
            res = await _res.json()
        } catch (err) {
            m.reply(err)
        }
        finally {
            let msg = res.status === "error" ? res.message : res.result
            await m.reply(msg, m.from, {linkPreview: false})
        }

    }
};

module.exports = handler