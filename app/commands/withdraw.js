const db = require(`${__dirname}/../helper/database`);

const handler = {
    async exec({ m, args, MessageMedia, client, messageFrom, dbid,usedprefix }) {
        let userDb = await db.GETUser(dbid);
        if (args.length >= 1) {
            let numWith = args[0].toLowerCase() === 'all' ? userDb.bank : Number(args[0]);
            if (!isNaN(numWith)) {
                if (userDb.bank >= numWith) {
                    let resCoins = userDb.coins + numWith;
                    let resBank = userDb.bank - numWith;
                    await m.reply('Saldo berhasil dipindahkan!');
                    await db.UPDATEUser(dbid, resCoins, resBank)
                } else {
                    m.reply('Saldo Bank anda tidak cukup!');
                }
            } else {
                m.reply(`Tuliskan format dengan benar!\nContoh : ${usedprefix}withdraw 5000`);
            }
        } else {
            m.reply(`Tuliskan jumlah yang ingin di deposit!\nContoh : ${usedprefix}withdraw 5000`);
        }
    }
}

module.exports = handler