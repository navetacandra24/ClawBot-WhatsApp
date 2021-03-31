const db = require(`${__dirname}/../helper/database`);


function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
};

const handler = {
    async exec({ m, args, MessageMedia, client, messageFrom, dbid }) {

        let _iG = [];
        for (let i = 0; i < 30; i++) {
            _iG.push(pickRandom([true, false, true, false]))
        }

        let percentage = [];
        for (let j = 0; j < 30; j++) {
            percentage.push(j)
        }
        let percentage1 = [];
        for (let j = 0; j < 25; j++) {
            percentage1.push(j)
        }

        let _isGet = pickRandom(_iG);
        let userDb = await db.GETUser(dbid)

        if (userDb.coins >= 1000) {
            if (m.mentionedIds.length >= 1) {
                if (m.mentionedIds[0] !== global.ownerId) {
                    if (m.mentionedIds[0] !== global.botId) {
                        let tujuan = m.mentionedIds[0].split('@')[0];
                        let tujuanDb = await db.GETUser(tujuan);
                        if (tujuanDb.coins >= 1000) {
                            if (_isGet) {
                                let coinsRes = tujuanDb.coins * pickRandom(percentage) / 100;
                                let ygdicuri = Math.floor(((tujuanDb.coins - (coinsRes * .5)) * pickRandom(percentage1) / 100));
                                await db.UPDATEUser(dbid, userDb.coins + ygdicuri, userDb.bank)
                                await db.UPDATEUser(tujuan, tujuanDb.coins - ygdicuri, tujuanDb.bank);
                                m.reply(`Kamu berhasil mecuri ${ygdicuri} Coins, dari @${tujuan}`, m.from, {mentions: [await client.getContactById(m.mentionedIds[0])]})
                            } else {
                                let coinsRes = tujuanDb.coins * pickRandom(percentage) / 100;
                                let gagalmencuri = Math.floor((tujuanDb.coins - (coinsRes * .75)));
                                let denda = gagalmencuri * .4
                                await db.UPDATEUser(dbid, userDb.coins - denda, userDb.bank)
                                await db.UPDATEUser(tujuan, tujuanDb.coins + (denda / .25), tujuanDb.bank);
                                m.reply(`Kamu gagal mecuri ${gagalmencuri} Coins, dari @${tujuan}\nKamu mendapat denda sebesar ${denda}`, m.from, {mentions: [await client.getContactById(m.mentionedIds[0])]})
                            }
                        } else {
                            m.reply('Orang yang ingin dicuri harus memiliki setidaknya 1000 Coins!')
                        }
                    } else {
                        m.reply('Bot mana bisa di rob!!')
                    }
                } else {
                    m.reply('Owner bot mana bisa di rob!!')
                }
            } else {
                m.reply('Tag orang yang ingin dicuri!')
            }
        } else {
            m.reply('Kamu harus memiliki setidaknya 1000 Coins!')
        }

    }
}

module.exports = handler