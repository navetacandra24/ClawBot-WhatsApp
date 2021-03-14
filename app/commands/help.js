function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(' : ')
};
const commandName = require(`${__dirname}/help.json`).command;
let commandsList = [];
for (let i = 0; i < commandName.length; i++) {
    if (i === commandName.length - 1) {
        commandsList.push(`│ ${commandName[i]}`)
    } else {
        commandsList.push(`│ ${commandName[i]}\n`)
    }
}

const handler = {
    name: 'help',
    async exec({m, client}) {
        const ct = await m.getContact();
        let d = new Date
        let locale = 'id'
        let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
        let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(Math.pow((((d * 1) + gmt) / 84600000), 1/7))]
        let week = d.toLocaleDateString(locale, { weekday: 'long' })
        let date = d.toLocaleDateString(locale, {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
        let time = d.toLocaleTimeString(locale, {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        });
        const message = `
╭─「 ClawBot 」
│ Hai, ${ct.verifiedName}!
│
│ Tanggal: *${week} ${weton}, ${date}*
│ Waktu: *${time.split('.').join(' : ')}*
│ Uptime: *${clockString(process.uptime() * 1000)}*
╰────
╭─「 Command 」
${commandsList.map(v => v)}
╰────`;
        console.log(message);
        m.reply(message.replace(/,/g, ''))
    }
}

module.exports = handler