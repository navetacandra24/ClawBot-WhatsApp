const db = require(`${__dirname}/../helper/database`);
const gdb = global.db;

const handler = {
    async exec({ m, args, MessageMedia, client, messageFrom, dbid }) {
        gdb.ref('users').once('value', async function (data) {
            let arr = []
            if (data.val()) {
                let d = data.val()
                
                await Object.entries(d).forEach(e => {
                    (async function () {
                        let numId = await client.getNumberId(e[0])
                        arr.push({ id: numId._serialized, data: e[1]._t });
                    })();
                })
                let desc = await arr.sort((a, b) => {
                    return b.data - a.data
                })
                let mentioneds = [];
                let msg = ['|「」「 *ClawBot Leaderboard* 」「」|\n'];
                
                console.log(await desc);

                for (let i = 0; i < desc.length; i++) {
                    (async function () {
                        let id = await client.getContactById(desc[i].id)
                        mentioneds.push(id);
                        msg.push(`@${desc[i].id}  Dengan total points : ${desc[i].data}`)
                        if (msg.length === desc.length) {
                            await m.reply(msg.join('\n'), m.from, {mentions: mentioneds})
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