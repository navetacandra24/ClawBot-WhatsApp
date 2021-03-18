let a = [
    {
        commands: ['', 'list'].map(v => 'anime' + v),
        file: `${__dirname}/commands/anime.js`,
        help: ['', 'list'].map(v => '#anime' + v + ' <limit (Max 50, Default 10)>'),
        tag: 'Anime'
    },
    {
        commands: ['apakah'],
        file: `${__dirname}/commands/apakah.js`,
        help: ['apakah'].map(v => '#' + v + ' <pertanyaan>'),
        tag: 'Kerang Ajaib'
    },
    {
        commands: ['attp'],
        file: `${__dirname}/commands/attp.js`,
        help: ['attp'].map(v => '#' + v + ' <teks>'),
        tag: 'Sticker'
    },
    {
        commands: ['bcgc'],
        file: `${__dirname}/commands/bcgc.js`,
        help: ['bcgc'].map(v => '#' + v + ' <pesan>'),
        tag: 'Owner'
    },
    {
        commands: ['bc'],
        file: `${__dirname}/commands/bc.js`,
        help: ['bc'].map(v => '#' + v + ' <pesan>'),
        tag: 'Owner'
    },
    {
        commands: ['bucin'],
        file: `${__dirname}/commands/bucin.js`,
        help: ['bucin'].map(v => '#' + v),
        tag: 'Quotes'
    },
    {
        commands: ['gtranslate'],
        file: `${__dirname}/commands/gtranslate.js`,
        help: ['gtranslate'].map(v => '#' + v + ' <B. Asal> <B. Tujuan> <Teks>'),
        tag: 'Tools'
    },
    {
        commands: ['help', 'menu', '?'],
        file: `${__dirname}/commands/help.js`,
        help: ['help', 'menu', '?'].map(v => '#' + v),
        tag: 'Main'
    },
    {
        commands: ['kah', ''].map(v => 'kapan' + v),
        file: `${__dirname}/commands/kapan.js`,
        help: ['kah', ''].map(v => '#kapan' + v + ' <pertanyaan>'),
        tag: 'Kerang Ajaib'
    },
    {
        commands: ['web', ''].map(v => 'ss' + v),
        file: `${__dirname}/commands/ss.js`,
        help: ['web', ''].map(v => '#ss' + v + ' <url>'),
        tag: 'Tools'
    },
    {
        commands: ['cker', 'ker'].map(v => 'sti' + v),
        file: `${__dirname}/commands/sticker.js`,
        help: ['cker', 'ker'].map(v => '#sti' + v + ' (caption)'),
        tag: 'Sticker'
    },
    {
        commands: ['har', 'tah'].map(v => v + 'ta'),
        file: `${__dirname}/commands/tahta.js`,
        help: ['harta', 'tahta'].map(v => '#' + v),
        tag: 'Tools'
    },
    {
        commands: ['tinyurl'],
        file: `${__dirname}/commands/tinyurl.js`,
        help: ['tinyurl'].map(v => '#' + v),
        tag: 'Tools'
    },
    {
        commands: ['ttp'],
        file: `${__dirname}/commands/ttp.js`,
        help: ['ttp'].map(v => '#' + v + ' <Teks>'),
        tag: 'Sticker'
    },
    {
        commands: ['utranslate'],
        file: `${__dirname}/commands/utranslate.js`,
        help: ['utranslate'].map(v => '#' + v + ' <B. Asal> <B. Tujuan> <Teks>'),
        tag: 'Tools'
    },
    {
        commands: ['gacha', ''].map(v => 'waifu' + v),
        file: `${__dirname}/commands/waifu.js`,
        help: ['#gacha', '#'].map(v => v + 'waifu'),
        tag: 'Anime'
    },
    {
        commands: ['wiki'],
        file: `${__dirname}/commands/wiki.js`,
        help: ['wiki'].map(v => '#' + v),
        tag: 'Tools'
    }
]

module.exports = a