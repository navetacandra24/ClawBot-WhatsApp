
const handler = {
    async exec({ m }) {
        let donateNum = process.env.DONATE_NUM.split('|')
	let _dM = donateNum.map(v => '│ •' + v)
        m.reply(`
╭─「 Donasi 」
${_dM.join('\n')}
╰───────
        `)
    }
}

module.exports = handler