
const handler = {
    async exec({ m }) {
        let donateNum = process.env.DONATE_NUM.split('|')
        m.reply(`
╭─「 Donasi 」
│ Telkomsel ( ${donateNum[0]} )
│ Indosat ( ${donateNum[1]} )
╰───────
        `)
    }
}

module.exports = handler