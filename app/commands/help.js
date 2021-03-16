const fs = require('fs')

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(' : ')
};

let commandsName = []


const handler = {
    name: ['help', '?', 'menu'],
    helper: function () {
        return this.name.map(v => '#' + v)
    },
    async exec({ m, client }) {
        const commandsFile = fs.readdirSync(`${__dirname}`).filter(files => files.endsWith('.js'));
        if (commandsName.length < 1) {
            for(const file of commandsFile) {
                const command = await require(`${__dirname}/${file}`);
                let helper = command.helper()
                helper.forEach(e => {
                    commandsName.push(e)
                    
                })
            }
        }
        let mentions = [];
        let creator = '';
        // const ct = await m.getContact();
        let d = new Date
        let locale = 'id'
        let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
        const ct = await m.getContact();
        mentions.push(await client.getContactById(ct.id._serialized));
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
        for (let i = 0; i < commandsName.length; i++) {
            if (i === commandsName.length - 1) {
                commandsList.push(`│ • ${commandsName[i]}`)
            } else {
                commandsList.push(`│ • ${commandsName[i]}\n`)
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
${commandsList.map(v => v)}
╰────`;
        // console.log(message);
        m.reply(message.replace(/,/g, ''), m.from, {mentions: mentions})
    }
}

module.exports = handler