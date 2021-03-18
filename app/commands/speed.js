const { performance } = require('perf_hooks');
const lib = require(`${__dirname}/../lib/r2str`)

const handler = {
    command: /(speed|ping)/,
    helper: function () {
        return lib(this.command).map(v => '#' +v)
    },
    async exec({ m }) {
        let old = performance.now();
        await m.reply('_Testing Speed..._');
        let neww = performance.now();
        m.reply(neww - old + ' ms')
    }
};

module.exports = handler