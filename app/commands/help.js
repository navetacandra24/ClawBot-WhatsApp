const fs = require('fs')
const lib = require(`${__dirname}/../lib/r2str`)

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(' : ')
};

let commandsHelp = []


const handler = {
    async exec({ m, client }) {
        const commandsDB = require(`${__dirname}/../commands-database`);
        if (commandsHelp.length < 1) {
            commandsDB.forEach(cmd => {
                cmd.help.forEach(e => {
                    commandsHelp.push(e)
                })
            });
        }

        let mentions = [];
        let creator = '';

        let d = new Date
        let locale = 'id'

        const ct = await m.getContact();
        mentions.push(await client.getContactById(ct.id._serialized));
        mentions.push(await client.getContactById('6285311174928@c.us'));
        creator += ct.id.user

        // let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(Math.pow((((d * 1) + gmt) / 84600000), 1/7))]
        let week = d.toLocaleDateString(locale, { weekday: 'long' })
        let date = d.toLocaleDateString(locale, {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
        let time = new Date().toLocaleString('id-ID').split(' ')[1].split('.').join(' : ');

        let commandsList = [];
        for (let i = 0; i < commandsHelp.length; i++) {
            if (i === commandsHelp.length - 1) {
                commandsList.push(`│ • ${commandsHelp[i]}`)
            } else {
                commandsList.push(`│ • ${commandsHelp[i]}\n`)
            }
        }

        const message = `
╭─「 ClawBot 」
│ Hai, @${creator}!
│
│ Tanggal: *${week}, ${date}*
│ Waktu: *${time}*
│ Uptime: *${clockString(process.uptime() * 1000)}*
╰────
╭─「 Command 」
${commandsList.map(v => v).join('').replace(/,/g, '')}
╰────
Creator : @6285311174928`;
        // console.log(mentions);
        m.reply(message, m.from, {mentions: mentions})
    }
}

module.exports = handler