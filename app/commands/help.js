const commandsDB = require(`${__dirname}/../commands-database`);
const readmore = String.fromCharCode(8206).repeat(4001);

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(' : ')
};

function mapCommand(arrCmd) {
    let commandsList = [];
    for (let i = 0; i < arrCmd.length; i++) {
        if (i === arrCmd.length - 1) {
            commandsList.push(`│ • ${arrCmd[i]}`)
        } else {
            commandsList.push(`│ • ${arrCmd[i]}\n`)
        }
    }
    return commandsList
}
function OwnerCommand() {
    let ownCmd = []
    if (ownCmd.length < 1) {
        commandsDB.filter(v => v.tag === 'Owner').forEach(e => {
            e.help.map(va => ownCmd.push(va))
        })
    }
    return ownCmd
}
function StickerCommand() {
    let stickerCmd = []
    if (stickerCmd.length < 1) {
        commandsDB.filter(v => v.tag === 'Sticker').forEach(e => {
            e.help.map(va => stickerCmd.push(va))
        })
    }
    return stickerCmd
}
function GroupCommand() {
    let groupCmd = []
    if (groupCmd.length < 1) {
        commandsDB.filter(v => v.tag === 'Group').forEach(e => {
            e.help.map(va => groupCmd.push(va))
        })
    }
    return groupCmd
}
function ToolsCommand() {
    let toolsCmd = []
    if (toolsCmd.length < 1) {
        commandsDB.filter(v => v.tag === 'Tools').forEach(e => {
            e.help.map(va => toolsCmd.push(va))
        })
    }
    return toolsCmd
}
function MainCommand() {
    let mainCmd = []
    if (mainCmd.length < 1) {
        commandsDB.filter(v => v.tag === 'Main').forEach(e => {
            e.help.map(va => mainCmd.push(va))
        })
    }
    return mainCmd
}
function KerangCommand() {
    let kerangCmd = []
    if (kerangCmd.length < 1) {
        commandsDB.filter(v => v.tag === 'Kerang').forEach(e => {
            e.help.map(va => kerangCmd.push(va))
        })
    }
    return kerangCmd
}
function MakerCommand() {
    let makerCmd = []
    if (makerCmd.length < 1) {
        commandsDB.filter(v => v.tag === 'Maker').forEach(e => {
            e.help.map(va => makerCmd.push(va))
        })
    }
    return makerCmd
}


const handler = {
    async exec({ m, client }) {

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


        const message = `
╭─「 ClawBot 」
│ Hai, @${creator}!
│
│ Tanggal: *${week}, ${date}*
│ Waktu: *${time}*
│ Uptime: *${clockString(process.uptime() * 1000)}*
╰───────${readmore}

╭─「 Main 」
${mapCommand(MainCommand()).join('').replace(/,/g, '')}
╰───────

╭─「 Sticker 」
${mapCommand(StickerCommand()).join('').replace(/,/g, '')}
╰───────

╭─「 Maker 」
${mapCommand(MakerCommand()).join('').replace(/,/g, '')}
╰───────

╭─「 Owner 」
${mapCommand(OwnerCommand()).join('').replace(/,/g, '')}
╰───────

╭─「 Group 」
${mapCommand(GroupCommand()).join('').replace(/,/g, '')}
╰───────

╭─「 Tools 」
${mapCommand(ToolsCommand()).join('').replace(/,/g, '')}
╰───────

╭─「 Kerang Ajaib 」
${mapCommand(KerangCommand()).join('').replace(/,/g, '')}
╰───────

Creator : @6285311174928`;
        // console.log(OwnerCommand());
        m.reply(message, m.from, {mentions: mentions})
    }
}

module.exports = handler