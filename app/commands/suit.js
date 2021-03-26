function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
};

async function getDb(uid) {
    const db = require(`${__dirname}/../helper/database`);
    let a = await db.GETUser(uid);
    return a
}

const handler = {
    async exec({ m, args, MessageMedia, client, messageFrom, dbid }) {
        let percentage = [];
        for (let j = 0; j < 30; j++) {
            percentage.push(j)
        }
        if (args.length >= 1) {
            let pilihanSuit = ['kertas', 'batu', 'gunting'];
            if (pilihanSuit.includes(args[0].toLowerCase())) {
                let player = args[0].toLowerCase();
                let bot = pickRandom(pilihanSuit);
                let data = await getDb(dbid);
                let coinsRes = data.coins * pickRandom(percentage) / 100;
                if (player === bot) {
                    m.reply(`*Hasil :* SERI / DRAW\n*ClawBot :* ${bot}\n@${dbid} : ${args[0]}\n*Sisa coins kamu :* ${(data.coins - coinsRes) * 1.5}`)
                } else if (player === 'kertas' && bot === 'batu' || player === 'batu' && bot === 'gunting' || player === 'gunting' && bot === 'kertas') {
                    m.reply(`*Hasil :* Menang\n*ClawBot :* ${bot}\n@${dbid} : ${args[0]}\n*Sisa coins kamu :* ${(data.coins + coinsRes)}`)
                } else if (bot === 'kertas' && player === 'batu' || bot === 'batu' && player === 'gunting' || bot === 'gunting' && player === 'kertas') {
                    m.reply(`*Hasil :* Kalah\n*ClawBot :* ${bot}\n@${dbid} : ${args[0]}\n*Sisa coins kamu :* ${(data.coins - coinsRes)}`)
                }
            } else {
                m.reply('Kamu hanya bisa memilih Kertas, Batu, ataupun Gunting!')
            }
        } else {
            m.reply('Masukan format dengan benar!\nContoh : #suit kertas')
        }
    }
}

module.exports = handler