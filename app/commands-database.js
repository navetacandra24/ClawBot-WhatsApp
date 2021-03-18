let a = [
    {
        commands: ['', 'list'].map(v => 'anime' + v),
        file: `${__dirname}/commands/anime.js`
    },
    {
        commands: ['apakah'],
        file: `${__dirname}/commands/apakah.js`
    },
    {
        commands: ['attp'],
        file: `${__dirname}/commands/attp.js`
    },
    {
        commands: ['bcgc'],
        file: `${__dirname}/commands/bcgc.jc`
    },
    {
        commands: ['bc'],
        file: `${__dirname}/commands/bc.js`
    },
    {
        commands: ['bucin'],
        file: `${__dirname}/commands/bucin.js`
    },
    {
        commands: ['gtranslate'],
        file: `${__dirname}/commands/gtranslate.js`
    },
    {
        commands: ['help', 'menu', '?'],
        file: `${__dirname}/commands/help.js`
    },
    {
        commands: ['kah', ''].map(v => 'kapan' + v),
        file: `${__dirname}/commands/kapan.js`
    },
    {
        commands: ['web', ''].map(v => 'ss' + v),
        file: `${__dirname}/commands/ss.js`
    },
    {
        commands: ['cker', 'ker'].map(v => 'sti' + v),
        file: `${__dirname}/commands/sticker.js`
    },
    {
        commands: ['har', 'tah'].map(v => v + 'ta'),
        file: `${__dirname}/commands/tahta.js`
    },
    {
        commands: ['tinyurl'],
        file: `${__dirname}/commands/tinyurl.js`
    },
    {
        commands: ['ttp'],
        file: `${__dirname}/commands/ttp.js`
    },
    {
        commands: ['utranslate'],
        file: `${__dirname}/commands/utranslate.js`
    },
    {
        commands: ['gacha', ''].map(v => 'waifu' + v),
        file: `${__dirname}/commands/waifu.js`
    },
    {
        commands: ['wiki'],
        file: `${__dirname}/commands/wiki.js`
    }
]

module.exports = a