const gdb = global.db;

const handler = {
    async exec({ m, client, dbid }) {
        gdb.ref('users').once('value',async function (data) {
            let arr = []
            if (data.val()) {
                let d = data.val()
                
                Object.entries(d).forEach(e => {
                    arr.push({id: e[0], data: e[1]})
                })
                let desc = arr.sort((a, b) => {
                    return b.data._t - a.data._t
                })
                
                let numList = []
                let numList_d = []
                if (m.mentionedIds.length >= 1) {
                    desc.forEach(e => numList.push(e.id));
                    desc.forEach(e => numList_d.push(e.data));
                    let mId = m.mentionedIds[0].split('@')[0]
                    let numPos = numList.indexOf(mId)
                    // client.getContactById(m.mentionedIds[0])
                    m.reply(`@${mId} berada di peringkat ${numPos + 1}, dengan total points © ${numList_d[numPos]._t}`, m.from, {mentions: [await client.getContactById(m.mentionedIds[0])]})
                } else {
                    desc.forEach(e => numList.push(e.id));
                    desc.forEach(e => numList_d.push(e.data));
                    let numPos = numList.indexOf(dbid)
                    
                    m.reply(`Kamu berada di peringkat ${numPos + 1}, dengan total points © ${numList_d[numPos]._t}`)
                }

            }
        })
    }
}

module.exports = handler