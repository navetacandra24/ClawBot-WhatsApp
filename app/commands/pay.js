const db = require(`${__dirname}/../helper/database`);

const handler = {
    async exec({ m, args, MessageMedia, client, messageFrom, dbid, usedprefix }) {
        if (args.length >= 2) {
            if (m.mentionedIds.length >= 1) {
                if (!args[1].includes('@')) {
                    let userDb = await db.GETUser(dbid);
                    let numPay = args[1].toLowerCase() === 'all' ? userDb.coins : Number(args[1]);
                    if (!isNaN(numPay)) {
                        if (userDb.coins >= numPay) {
                            let penerima = m.mentionedIds[0].split('@')[0];
                            let penerimaDb = await db.GETUser(penerima);
                            let resCoinsSend = userDb.coins - numPay;
                            let resCoinsPenerima = penerimaDb.coins + numPay;
                            await db.UPDATEUser(dbid, resCoinsSend, userDb.bank)
                            await db.UPDATEUser(penerima, resCoinsPenerima, penerimaDb.bank)
                            await m.reply(`Saldo berhasil dikirm ke @${penerima}`, m.from, {mentions: [await client.getContactById(m.mentionedIds[0])]});
                        } else {
                            m.reply('Coins anda tidak cukup!');
                        }
                    } else {
                        m.reply(`Tuliskan format dengan benar!\nContoh : ${usedprefix}pay @6285311174928 5000`, m.from, {mentions: [await client.getContactById(global.ownerId)]});
                    }
                } else {
                    m.reply(`Tuliskan format dengan benar!\nContoh : ${usedprefix}pay @6285311174928 5000`, m.from, {mentions: [await client.getContactById(global.ownerId)]});
                }
            } else {
                m.reply('Tag penerima!')
            }
        } else {
            m.reply(`Tuliskan jumlah yang ingin di transfer!\nContoh : ${usedprefix}pay @6285311174928 5000`, m.from, {mentions: [await client.getContactById(global.ownerId)]});
        }
    }
}

module.exports = handler