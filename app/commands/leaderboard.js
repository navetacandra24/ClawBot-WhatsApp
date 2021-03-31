const db = require(`${__dirname}/../helper/database`);
const gdb = global.db;

const handler = {
    async exec({ m, args, MessageMedia, client, messageFrom, dbid }) {
        gdb.ref('users').once('value', function (data) {
            let arr = []
            if (data.val()) {
                let d = data.val()
                
                Object.entries(d).forEach(e => {
                    arr.push({id: e[0], data: e[1]})
                })
                let desc = arr.sort((a, b) => {
                    return b.data._t - a.data._t
                })
                let mentioneds = [];
                let msg = [];
                

                for (let i = 0; i < desc.length; i++) {
                    (async function () {
                        let id = await client.getContactById(desc[i].id + '@c.us')
                        mentioneds.push(id);
                        msg.push(`@${desc[i].id}  With total points : ${desc[i].data._t}`)
                        if (msg.length === desc.length) {
                            m.reply(msg.join('\n'), m.from, {mentions: mentioneds})
                        } else {
                            return
                        }
                    })();
                }

            }
        })
    }
}

module.exports = handler