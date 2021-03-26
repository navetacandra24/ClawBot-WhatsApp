const db = require(`${__dirname}/../helper/database`)
const handler = {
    async exec({ m, args, MessageMedia, client, messageFrom, dbid }) {
        if (m.mentionedIds.length >= 1) {
            let mentionId = m.mentionedIds[0].split('@')[0]
            let _a = await db.GETUser(mentionId);
            _a ? '' : await db.POSTUser(mentionId);
            let _b = await db.GETUser(mentionId);
            m.reply(`
╭─「 Saldo @${mentionId} 」
│ Coins : ${Number(_b.coins)}
│ Bank : ${Number(_b.bank)}
╰───────
            `, m.from, { mentions: [await client.getContactById(m.mentionedIds[0])] })
        } else {
            let _a = await db.GETUser(dbid);
            m.reply(`
╭─「 Saldo @${dbid} 」
│ Coins : ${Number(_a.coins)}
│ Bank : ${Number(_a.bank)}
╰───────
            `, m.from, { mentions: [await client.getContactById(messageFrom)] })
        }
    }
}

module.exports = handler