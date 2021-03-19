let a = [
    {
        commands: ['', 'list'].map(v => 'anime' + v),
        file: `${__dirname}\\commands\\anime.js`,
        require: `${__dirname}/commands/anime.js`,
        help: ['', 'list'].map(v => '#anime' + v + ' <limit (Max 50, Default 10)>'),
        tag: 'Anime'
    },
    {
        commands: ['apakah'],
        file: `${__dirname}\\commands\\apakah.js`,
        require: `${__dirname}/commands/apakah.js`,
        help: ['apakah'].map(v => '#' + v + ' <pertanyaan>'),
        tag: 'Kerang'
    },
    {
        commands: ['attp'],
        file: `${__dirname}\\commands\\attp.js`,
        require: `${__dirname}/commands/attp.js`,
        help: ['attp'].map(v => '#' + v + ' <teks>'),
        tag: 'Sticker'
    },
    {
        commands: ['bcgc'],
        file: `${__dirname}\\commands\\bcgc.js`,
        require: `${__dirname}/commands/bcgc.js`,
        help: ['bcgc'].map(v => '#' + v + ' <pesan>  *(OWNER)*'),
        tag: 'Owner'
    },
    {
        commands: ['bc'],
        file: `${__dirname}\\commands\\bc.js`,
        require: `${__dirname}/commands/bc.js`,
        help: ['bc'].map(v => '#' + v + ' <pesan> *(OWNER)*'),
        tag: 'Owner'
    },
    {
        commands: ['bitly'],
        file: `${__dirname}\\commands\\bitly.js`,
        require: `${__dirname}/commands/bitly.js`,
        help: ['bitly'].map(v => '#' + v + ' <url>'),
        tag: 'Tools'
    },
    {
        commands: ['bucin'],
        file: `${__dirname}\\commands\\bucin.js`,
        require: `${__dirname}/commands/bucin.js`,
        help: ['bucin'].map(v => '#' + v),
        tag: 'Quotes'
    },
    {
        commands: ['gtranslate'],
        file: `${__dirname}\\commands\\gtranslate.js`,
        require: `${__dirname}/commands/gtranslate.js`,
        help: ['gtranslate'].map(v => '#' + v + ' <B. Asal> <B. Tujuan> <Teks>'),
        tag: 'Tools'
    },
    {
        commands: ['glitchtext'],
        file: `${__dirname}\\commands\\glitchtext.js`,
        require: `${__dirname}/commands/glitchtext.js`,
        help: ['glitchtext'].map(v => '#' + v + ' <Teks 1> | <Teks 2>'),
        tag: 'Tools'
    },
    {
        commands: ['help', 'menu', '?'].map(v => v),
        file: `${__dirname}\\commands\\help.js`,
        require: `${__dirname}/commands/help.js`,
        help: ['help', 'menu', '?'].map(v => '#' + v),
        tag: 'Main'
    },
    {
        commands: ['kah', ''].map(v => 'kapan' + v),
        file: `${__dirname}\\commands\\kapan.js`,
        require: `${__dirname}/commands/kapan.js`,
        help: ['kah', ''].map(v => '#kapan' + v + ' <pertanyaan>'),
        tag: 'Kerang'
    },
    {
        commands: ['web', ''].map(v => 'ss' + v),
        file: `${__dirname}\\commands\\ss.js`,
        require: `${__dirname}/commands/ss.js`,
        help: ['web', ''].map(v => '#ss' + v + ' <url>'),
        tag: 'Tools'
    },
    {
        commands: ['cker', 'ker'].map(v => 'sti' + v),
        file: `${__dirname}\\commands\\sticker.js`,
        require: `${__dirname}/commands/sticker.js`,
        help: ['cker', 'ker'].map(v => '#sti' + v + ' (caption)'),
        tag: 'Sticker'
    },
    {
        commands: ['speed', 'ping'],
        file: `${__dirname}\\commands\\sticker.js`,
        require: `${__dirname}/commands/sticker.js`,
        help: ['speed', 'ping'].map(v => '#' + v),
        tag: 'Tools'
    },
    {
        commands: ['har', 'tah'].map(v => v + 'ta'),
        file: `${__dirname}\\commands\\tahta.js`,
        require: `${__dirname}/commands/tahta.js`,
        help: ['harta', 'tahta'].map(v => '#' + v + ' <Teks>'),
        tag: 'Tools'
    },
    {
        commands: ['tinyurl'],
        file: `${__dirname}\\commands\\tinyurl.js`,
        require: `${__dirname}/commands/tinyurl.js`,
        help: ['tinyurl'].map(v => '#' + v + ' <url>'),
        tag: 'Tools'
    },
    {
        commands: ['ttp'],
        file: `${__dirname}\\commands\\ttp.js`,
        require: `${__dirname}/commands/ttp.js`,
        help: ['ttp'].map(v => '#' + v + ' <Teks>'),
        tag: 'Sticker'
    },
    {
        commands: ['utranslate'],
        file: `${__dirname}\\commands\\utranslate.js`,
        require: `${__dirname}/commands/utranslate.js`,
        help: ['utranslate'].map(v => '#' + v + ' <B. Asal> <B. Tujuan> <Teks>'),
        tag: 'Tools'
    },
    {
        commands: ['gacha', ''].map(v => v + 'waifu'),
        file: `${__dirname}\\commands\\waifu.js`,
        require: `${__dirname}/commands/waifu.js`,
        help: ['#gacha', '#'].map(v => v + 'waifu'),
        tag: 'Anime'
    },
    {
        commands: ['wiki'],
        file: `${__dirname}\\commands\\wiki.js`,
        require: `${__dirname}/commands/wiki.js`,
        help: ['wiki'].map(v => '#' + v + ' <Pencarian>'),
        tag: 'Tools'
    }
]

module.exports = a