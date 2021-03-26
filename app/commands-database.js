let a = [
    {
        commands: ['add', '+'],
        file: `${__dirname}\\commands\\add.js`,
        require: `${__dirname}/commands/add.js`,
        help: ['add', '+'].map(v => '#' + v + ' <Nomor>'),
        tag: 'Group'
    },
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
        help: ['apakah'].map(v => '#' + v + ' <Pertanyaan>'),
        tag: 'Kerang'
    },
    {
        commands: ['attp'],
        file: `${__dirname}\\commands\\attp.js`,
        require: `${__dirname}/commands/attp.js`,
        help: ['attp'].map(v => '#' + v + ' <Teks>'),
        tag: 'Sticker'
    },
    {
        commands: ['bcgc'],
        file: `${__dirname}\\commands\\bcgc.js`,
        require: `${__dirname}/commands/bcgc.js`,
        help: ['bcgc'].map(v => '#' + v + ' <Pesan>'),
        tag: 'Owner'
    },
    {
        commands: ['bc'],
        file: `${__dirname}\\commands\\bc.js`,
        require: `${__dirname}/commands/bc.js`,
        help: ['bc'].map(v => '#' + v + ' <Pesan>'),
        tag: 'Owner'
    },
    {
        commands: ['bitly'],
        file: `${__dirname}\\commands\\bitly.js`,
        require: `${__dirname}/commands/bitly.js`,
        help: ['bitly'].map(v => '#' + v + ' <Url>'),
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
        commands: ['bugreport'],
        file: `${__dirname}\\commands\\bugreport.js`,
        require: `${__dirname}/commands/bugreport.js`,
        help: ['bugreport'].map(v => '#' + v + ' <Laporan>'),
        tag: 'Info'
    },
    {
        commands: ['donasi'],
        file: `${__dirname}\\commands\\donasi.js`,
        require: `${__dirname}/commands/donasi.js`,
        help: ['donasi'].map(v => '#' + v),
        tag: 'Info'
    },
    // {
    //     commands: ['', 'f'].map(v => 'google' + v),
    //     file: `${__dirname}\\commands\\google.js`,
    //     require: `${__dirname}/commands/google.js`,
    //     help: ['', 'f'].map(v => '#google' + v + ' <Pencarian>'),
    //     tag: 'Tools'
    // },
    {
        commands: ['gtranslate'],
        file: `${__dirname}\\commands\\gtranslate.js`,
        require: `${__dirname}/commands/gtranslate.js`,
        help: ['gtranslate'].map(v => '#' + v + ' <B. Asal> <B. Tujuan> <Teks>'),
        tag: 'Education'
    },
    {
        commands: ['glitchtext'],
        file: `${__dirname}\\commands\\glitchtext.js`,
        require: `${__dirname}/commands/glitchtext.js`,
        help: ['glitchtext'].map(v => '#' + v + ' <Teks 1> | <Teks 2>'),
        tag: 'Maker'
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
        help: ['kah', ''].map(v => '#kapan' + v + ' <Pertanyaan>'),
        tag: 'Kerang'
    },
    {
        commands: ['kbbi'],
        file: `${__dirname}\\commands\\kbbi.js`,
        require: `${__dirname}/commands/kbbi.js`,
        help: ['kbbi'].map(v => '#' + v + ' <Kata>'),
        tag: 'Education'
    },
    {
        commands: ['kick', 'usir', '-'],
        file: `${__dirname}\\commands\\kick.js`,
        require: `${__dirname}/commands/kick.js`,
        help: ['kick', 'usir', '-'].map(v => '#' + v + ' <Tag Nomor>'),
        tag: 'Group'
    },
    {
        commands: ['kickall', 'removeall'],
        file: `${__dirname}\\commands\\kickall.js`,
        require: `${__dirname}/commands/kickall.js`,
        help: ['kickall', 'removeall'].map(v => '#' + v),
        tag: 'Group'
    },
    {
        commands: ['owner', 'creator'],
        file: `${__dirname}\\commands\\owner.js`,
        require: `${__dirname}/commands/owner.js`,
        help: ['owner', 'creator'].map(v => '#' + v + ' (beta)'),
        tag: 'Owner'
    },
    {
        commands: ['status', 'sendStatus'],
        file: `${__dirname}\\commands\\sendStatus.js`,
        require: `${__dirname}/commands/sendStatus.js`,
        help: ['status', 'sendStatus'].map(v => '#' + v + ' <Teks>'),
        tag: 'Owner'
    },
    {
        commands: ['speed', 'ping'],
        file: `${__dirname}\\commands\\speed.js`,
        require: `${__dirname}/commands/speed.js`,
        help: ['speed', 'ping'].map(v => '#' + v),
        tag: 'Tools'
    },
    {
        commands: ['web', ''].map(v => 'ss' + v),
        file: `${__dirname}\\commands\\ss.js`,
        require: `${__dirname}/commands/ss.js`,
        help: ['web', ''].map(v => '#ss' + v + ' <Url>'),
        tag: 'Tools'
    },
    {
        commands: ['cker', 'ker'].map(v => 'sti' + v),
        file: `${__dirname}\\commands\\sticker.js`,
        require: `${__dirname}/commands/sticker.js`,
        help: ['cker', 'ker'].map(v => '#sti' + v + ' (Caption)'),
        tag: 'Sticker'
    },
    {
        commands: ['tag-a', 'taga'].map(v => v + 'll'),
        file: `${__dirname}\\commands\\tagAll.js`,
        require: `${__dirname}/commands/tagAll.js`,
        help: ['tag-a', 'taga'].map(v => '#' + v + 'll'),
        tag: 'Group'
    },
    {
        commands: ['har', 'tah'].map(v => v + 'ta'),
        file: `${__dirname}\\commands\\tahta.js`,
        require: `${__dirname}/commands/tahta.js`,
        help: ['harta', 'tahta'].map(v => '#' + v + ' <Teks>'),
        tag: 'Maker'
    },
    {
        commands: ['tinyurl'],
        file: `${__dirname}\\commands\\tinyUrl.js`,
        require: `${__dirname}/commands/tinyUrl.js`,
        help: ['tinyurl'].map(v => '#' + v + ' <Url>'),
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
        tag: 'Education'
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
    },
    {
        commands: ['ytgold'],
        file: `${__dirname}\\commands\\ytgold.js`,
        require: `${__dirname}/commands/ytgold.js`,
        help: ['ytgold'].map(v => '#' + v + ' <Nama>'),
        tag: 'Maker'
    },
    {
        commands: ['ytsilver'],
        file: `${__dirname}\\commands\\ytsilver.js`,
        require: `${__dirname}/commands/ytsilver.js`,
        help: ['ytsilver'].map(v => '#' + v + ' <Nama>'),
        tag: 'Maker'
    },
]

module.exports = a