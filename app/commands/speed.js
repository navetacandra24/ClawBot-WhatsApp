const { performance } = require('perf_hooks');

const handler = {
    name: ['speed', 'ping'],
    help: '#speed',
    async exec({ m }) {
        let old = performance.now();
        await m.reply('_Testing Speed..._');
        let neww = performance.now();
        m.reply(neww - old + ' ms')
    }
};

module.exports = handler