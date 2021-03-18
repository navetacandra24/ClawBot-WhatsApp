let a = [
    {
        commands: ['', 'list'].map(v => 'anime' + v),
        file: `${__dirname}/commands/anime.js`,
        require: `${__dirname}/commands/anime`,
        help: ['', 'list'].map(v => '#anime' + v + ' <limit (Max 50, Default 10)>'),
        tag: 'Anime'
    },
    {
        commands: ['apakah'],
        file: `${__dirname}/commands/apakah.js`,
        require: `${__dirname}/commands/apakah`,
        help: ['apakah'].map(v => '#' + v + ' <pertanyaan>'),
        tag: 'Kerang Ajaib'
    },
    {
        commands: ['attp'],
        file: `${__dirname}/commands/attp.js`,
        require: `${__dirname}/commands/attp`,
        help: ['attp'].map(v => '#' + v + ' <teks>'),
        tag: 'Sticker'
    },
    {
        commands: ['bcgc'],
        file: `${__dirname}/commands/bcgc.js`,
        require: `${__dirname}/commands/bcgc`,
        help: ['bcgc'].map(v => '#' + v + ' <pesan>'),
        tag: 'Owner'
    },
    {
        commands: ['bc'],
        file: `${__dirname}/commands/bc.js`,
        require: `${__dirname}/commands/bc`,
        help: ['bc'].map(v => '#' + v + ' <pesan>'),
        tag: 'Owner'
    },
    {
        commands: ['bucin'],
        file: `${__dirname}/commands/bucin.js`,
        require: `${__dirname}/commands/bucin`,
        help: ['bucin'].map(v => '#' + v),
        tag: 'Quotes'
    },
    {
        commands: ['gtranslate'],
        file: `${__dirname}/commands/gtranslate.js`,
        require: `${__dirname}/commands/gtranslate`,
        help: ['gtranslate'].map(v => '#' + v + ' <B. Asal> <B. Tujuan> <Teks>'),
        tag: 'Tools'
    },
    {
        commands: ['help', 'menu', '?'],
        file: `${__dirname}/commands/help.js`,
        require: `${__dirname}/commands/help`,
        help: ['help', 'menu', '?'].map(v => '#' + v),
        tag: 'Main'
    },
    {
        commands: ['kah', ''].map(v => 'kapan' + v),
        file: `${__dirname}/commands/kapan.js`,
        require: `${__dirname}/commands/kapan`,
        help: ['kah', ''].map(v => '#kapan' + v + ' <pertanyaan>'),
        tag: 'Kerang Ajaib'
    },
    {
        commands: ['web', ''].map(v => 'ss' + v),
        file: `${__dirname}/commands/ss.js`,
        require: `${__dirname}/commands/ss`,
        help: ['web', ''].map(v => '#ss' + v + ' <url>'),
        tag: 'Tools'
    },
    {
        commands: ['cker', 'ker'].map(v => 'sti' + v),
        file: `${__dirname}/commands/sticker.js`,
        require: `${__dirname}/commands/sticker`,
        help: ['cker', 'ker'].map(v => '#sti' + v + ' (caption)'),
        tag: 'Sticker'
    },
    {
        commands: ['har', 'tah'].map(v => v + 'ta'),
        file: `${__dirname}/commands/tahta.js`,
        require: `${__dirname}/commands/tahta`,
        help: ['harta', 'tahta'].map(v => '#' + v),
        tag: 'Tools'
    },
    {
        commands: ['tinyurl'],
        file: `${__dirname}/commands/tinyurl.js`,
        require: `${__dirname}/commands/tinyurl`,
        help: ['tinyurl'].map(v => '#' + v),
        tag: 'Tools'
    },
    {
        commands: ['ttp'],
        file: `${__dirname}/commands/ttp.js`,
        require: `${__dirname}/commands/ttp`,
        help: ['ttp'].map(v => '#' + v + ' <Teks>'),
        tag: 'Sticker'
    },
    {
        commands: ['utranslate'],
        file: `${__dirname}/commands/utranslate.js`,
        require: `${__dirname}/commands/utranslate`,
        help: ['utranslate'].map(v => '#' + v + ' <B. Asal> <B. Tujuan> <Teks>'),
        tag: 'Tools'
    },
    {
        commands: ['gacha', ''].map(v => 'waifu' + v),
        file: `${__dirname}/commands/waifu.js`,
        require: `${__dirname}/commands/waifu`,
        help: ['#gacha', '#'].map(v => v + 'waifu'),
        tag: 'Anime'
    },
    {
        commands: ['wiki'],
        file: `${__dirname}/commands/wiki.js`,
        require: `${__dirname}/commands/wiki`,
        help: ['wiki'].map(v => '#' + v),
        tag: 'Tools'
    }
]

module.exports = a