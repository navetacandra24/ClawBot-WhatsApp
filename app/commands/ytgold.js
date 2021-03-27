const fs = require('fs');
const fetch = require('node-fetch');

const handler = {
    async exec({ m, args, MessageMedia, messageFrom, dbid }) {
        const cooldown = require(`${__dirname}/../core/cooldown.json`);
        const cd = cooldown['ytgold-cd']
        if (!cd.includes(messageFrom)) {
            if (args.length >= 1) {
                await cd.push(messageFrom);
                await fs.writeFileSync(`${__dirname}/../core/cooldown.json`, JSON.stringify(cd));
                await m.reply('Memproses..\n*Mohon tunggu sekitar 1 menit.*');
                try {
                    let _fetch = await fetch(`https://fierce-brushlands-90323.herokuapp.com/ytbutton?type=gold&name=${encodeURIComponent(args.join(' '))}&fname=${dbid}`, {
                        mode: 'no-cors',
                        timeout: 0
                    })
                    let _res = await _fetch.json();
                    let mt = _res.results.data.mimetype;
                    let b64 = _res.results.data.base64;
                    if (b64.startsWith('/9j')) {
                        let media = new MessageMedia(mt, b64, '')
                        m.reply(media)
                        const _cooldown = require(`${__dirname}/../core/cooldown.json`);
                        const _cd = _cooldown['ytgold-cd']
                        _cd.splice(_cd.indexOf(messageFrom), 1)
                        fs.writeFileSync(`${__dirname}/../core/cooldown.json`, JSON.stringify(_cd))
                    } else {
                        m.reply('*Gambar tidak dapat terkirim, karena terjadi kesalahan sistem.*')
                        const _cooldowns = require(`${__dirname}/../core/cooldown.json`);
                        const _cds = _cooldowns['ytgold-cd']
                        _cds.splice(_cds.indexOf(messageFrom), 1)
                        fs.writeFileSync(`${__dirname}/../core/cooldown.json`, JSON.stringify(_cds))
                    }
                } catch (err) {
                    m.reply(err)
                    const _cooldownss = require(`${__dirname}/../core/cooldown.json`);
                    const _cdss = _cooldownss['ytgold-cd']
                    _cdss.splice(_cdss.indexOf(messageFrom), 1)
                    fs.writeFileSync(`${__dirname}/../core/cooldown.json`, JSON.stringify(_cdss))
                }
            } else {
                m.reply('Namanya?')
            }
        } else {
            m.reply('Kamu sedang dalam cooldown!\nMohon coba lagi nanti.')
        }
    }
};

module.exports = handler