function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
};

const handler = {
    name: ['kah', ''].map(v => 'kapan' + v),
    helper: function () {
        return this.name.map(v => '#' + v + ' <pertanyaan>')
    },
    async exec({ m, args, client }) {
        const pertanyaan = m.body.replace('#', '');
        const jawaban = `${Math.floor(Math.random() * 10)} ${pickRandom(['detik', 'menit', 'jam', 'hari', 'minggu', 'bulan', 'tahun', 'dekade', 'abad'])} lagi ...`
        if (m.mentionedIds) {
            const contact = []
            for (let i = 0; i < m.mentionedIds.length; i++) {
                contact.push(await client.getContactById(m.mentionedIds[i]))
            }
            m.reply(`*Pertanyaan:* ${m.body.slice(1)}\n*Jawaban:* ${jawaban}`, m.from, {mentions: contact})
        } else {
            m.reply(`*Pertanyaan:* ${pertanyaan}\n*Jawaban:* ${jawaban}`)
        }
    }
}

module.exports = handler