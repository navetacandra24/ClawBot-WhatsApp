const { performance } = require('perf_hooks');

const handler = {
    name: ['speed', 'ping'],
    helper: function () {
        return this.name.map(v => '#' +v)
    },
    async exec({ m }) {
        let old = performance.now();
        await m.reply('_Testing Speed..._');
        let neww = performance.now();
        m.reply(neww - old + ' ms')
    }
};

module.exports = handler