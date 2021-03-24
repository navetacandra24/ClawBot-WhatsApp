const handler = {
    async exec({ args, client, m, messageFrom }) {
        
        if (messageFrom.includes('6285311174928')) {
            m.reply(`
BEGIN:VCARD
VERSION:3.0
N:Owner;ClawBot;;;
FN:Owner ClawBot
TEL;type=CELL;waid=6285311174928:+62 859-1117-4928
END:VCARD
            `)
        } else {
            m.reply('Kamu siapa? Perintah ini khusus *OWNER*')
        }
        
    }
}

module.exports = handler