const main = require(`${__dirname}/app/main`);
global.f = require('firebase');
global.API = {
    heroku1: 'https://fierce-brushlands-90323.herokuapp.com',
    heroku2: 'https://shielded-hollows-79689.herokuapp.com'
};
global.ownerId = '6285311174928@c.us';
global.botId = '6285718234965@c.us';
require('firebase/database')

global.f.initializeApp({
    apiKey: "AIzaSyAQNt4nlwjwEGkt9OQ3bM9vb4MWwmTJlfA",
    authDomain: "clawbot-wa.firebaseapp.com",
    databaseURL: "https://clawbot-wa-default-rtdb.firebaseio.com",
    projectId: "clawbot-wa",
    storageBucket: "clawbot-wa.appspot.com",
    messagingSenderId: "885803455129",
    appId: "1:885803455129:web:96c2b1ca49ddc31ec31e08",
    measurementId: "G-4MHQCWVB50"
});
global.db = global.f.database();
global.commands = [
    {
        commands: ['add', '+'],
        file: `${__dirname}\\app\\commands\\add.js`,
        require: `${__dirname}/app/commands/add.js`,
        help: ['add', '+'].map(v => '#' + v + ' <Nomor>'),
        tag: 'Group'
    },
    {
        commands: ['', 'list'].map(v => 'anime' + v),
        file: `${__dirname}\\app\\commands\\anime.js`,
        require: `${__dirname}/app/commands/anime.js`,
        help: ['', 'list'].map(v => '#anime' + v + ' <limit (Max 50, Default 10)>'),
        tag: 'Anime'
    },
    {
        commands: ['apakah'],
        file: `${__dirname}\\app\\commands\\apakah.js`,
        require: `${__dirname}/app/commands/apakah.js`,
        help: ['apakah'].map(v => '#' + v + ' <Pertanyaan>'),
        tag: 'Kerang'
    },
    {
        commands: ['attp'],
        file: `${__dirname}\\app\\commands\\attp.js`,
        require: `${__dirname}/app/commands/attp.js`,
        help: ['attp'].map(v => '#' + v + ' <Teks>'),
        tag: 'Sticker'
    },
    {
        commands: ['bcgc'],
        file: `${__dirname}\\app\\commands\\bcgc.js`,
        require: `${__dirname}/app/commands/bcgc.js`,
        help: ['bcgc'].map(v => '#' + v + ' <Pesan>'),
        tag: 'Owner'
    },
    {
        commands: ['bc'],
        file: `${__dirname}\\app\\commands\\bc.js`,
        require: `${__dirname}/app/commands/bc.js`,
        help: ['bc'].map(v => '#' + v + ' <Pesan>'),
        tag: 'Owner'
    },
    {
        commands: ['bitly'],
        file: `${__dirname}\\app\\commands\\bitly.js`,
        require: `${__dirname}/app/commands/bitly.js`,
        help: ['bitly'].map(v => '#' + v + ' <Url>'),
        tag: 'Tools'
    },
    {
        commands: ['bucin'],
        file: `${__dirname}\\app\\commands\\bucin.js`,
        require: `${__dirname}/app/commands/bucin.js`,
        help: ['bucin'].map(v => '#' + v),
        tag: 'Quotes'
    },
    {
        commands: ['bugreport'],
        file: `${__dirname}\\app\\commands\\bugreport.js`,
        require: `${__dirname}/app/commands/bugreport.js`,
        help: ['bugreport'].map(v => '#' + v + ' <Laporan>'),
        tag: 'Info'
    },
    {
        commands: ['dompet', 'atm', 'saldo'],
        file: `${__dirname}\\app\\commands\\dompet.js`,
        require: `${__dirname}/app/commands/dompet.js`,
        help: ['dompet', 'atm', 'saldo'].map(v => '#' + v + ' <Tag (Optional)>'),
        tag: 'Game'
    },
    {
        commands: ['donasi'],
        file: `${__dirname}\\app\\commands\\donasi.js`,
        require: `${__dirname}/app/commands/donasi.js`,
        help: ['donasi'].map(v => '#' + v),
        tag: 'Info'
    },
    {
        commands: ['gtranslate'],
        file: `${__dirname}\\app\\commands\\gtranslate.js`,
        require: `${__dirname}/app/commands/gtranslate.js`,
        help: ['gtranslate'].map(v => '#' + v + ' <B. Asal> <B. Tujuan> <Teks>'),
        tag: 'Education'
    },
    {
        commands: ['glitchtext'],
        file: `${__dirname}\\app\\commands\\glitchtext.js`,
        require: `${__dirname}/app/commands/glitchtext.js`,
        help: ['glitchtext'].map(v => '#' + v + ' <Teks 1> | <Teks 2>'),
        tag: 'Maker'
    },
    {
        commands: ['help', 'menu', '?'].map(v => v),
        file: `${__dirname}\\app\\commands\\help.js`,
        require: `${__dirname}/app/commands/help.js`,
        help: ['help', 'menu', '?'].map(v => '#' + v),
        tag: 'Main'
    },
    {
        commands: ['kah', ''].map(v => 'kapan' + v),
        file: `${__dirname}\\app\\commands\\kapan.js`,
        require: `${__dirname}/app/commands/kapan.js`,
        help: ['kah', ''].map(v => '#kapan' + v + ' <Pertanyaan>'),
        tag: 'Kerang'
    },
    {
        commands: ['kbbi'],
        file: `${__dirname}\\app\\commands\\kbbi.js`,
        require: `${__dirname}/app/commands/kbbi.js`,
        help: ['kbbi'].map(v => '#' + v + ' <Kata>'),
        tag: 'Education'
    },
    {
        commands: ['kick', 'usir', '-', 'remove'],
        file: `${__dirname}\\app\\commands\\kick.js`,
        require: `${__dirname}/app/commands/kick.js`,
        help: ['kick', 'usir', '-', 'remove'].map(v => '#' + v + ' <Tag Nomor>'),
        tag: 'Group'
    },
    {
        commands: ['kickall', 'removeall'],
        file: `${__dirname}\\app\\commands\\kickall.js`,
        require: `${__dirname}/app/commands/kickall.js`,
        help: ['kickall', 'removeall'].map(v => '#' + v),
        tag: 'Group'
    },
    {
        commands: ['owner', 'creator'],
        file: `${__dirname}\\app\\commands\\owner.js`,
        require: `${__dirname}/app/commands/owner.js`,
        help: ['owner', 'creator'].map(v => '#' + v),
        tag: 'Info'
    },
    {
        commands: ['pengumuman'],
        file: `${__dirname}\\app\\commands\\pengumuman.js`,
        require: `${__dirname}/app/commands/pengumuman.js`,
        help: ['pengumuman'].map(v => '#' + v + ' <pesan>'),
        tag: 'Group'
    },
    {
        commands: ['status', 'sendStatus'],
        file: `${__dirname}\\app\\commands\\sendStatus.js`,
        require: `${__dirname}/app/commands/sendStatus.js`,
        help: ['status', 'sendStatus'].map(v => '#' + v + ' <Teks>'),
        tag: 'Owner'
    },
    {
        commands: ['speed', 'ping'],
        file: `${__dirname}\\app\\commands\\speed.js`,
        require: `${__dirname}/app/commands/speed.js`,
        help: ['speed', 'ping'].map(v => '#' + v),
        tag: 'Tools'
    },
    {
        commands: ['web', ''].map(v => 'ss' + v),
        file: `${__dirname}\\app\\commands\\ss.js`,
        require: `${__dirname}/app/commands/ss.js`,
        help: ['web', ''].map(v => '#ss' + v + ' <Url>'),
        tag: 'Tools'
    },
    {
        commands: ['cker', 'ker'].map(v => 'sti' + v),
        file: `${__dirname}\\app\\commands\\sticker.js`,
        require: `${__dirname}/app/commands/sticker.js`,
        help: ['cker', 'ker'].map(v => '#sti' + v + ' (Caption)'),
        tag: 'Sticker'
    },
    {
        commands: ['suit'],
        file: `${__dirname}\\app\\commands\\suit.js`,
        require: `${__dirname}/app/commands/suit.js`,
        help: ['suit'].map(v => '#' + v + ' <pilihan>'),
        tag: 'Game'
    },
    {
        commands: ['har', 'tah'].map(v => v + 'ta'),
        file: `${__dirname}\\app\\commands\\tahta.js`,
        require: `${__dirname}/app/commands/tahta.js`,
        help: ['harta', 'tahta'].map(v => '#' + v + ' <Teks>'),
        tag: 'Maker'
    },
    {
        commands: ['tinyurl'],
        file: `${__dirname}\\app\\commands\\tinyurl.js`,
        require: `${__dirname}/app/commands/tinyurl.js`,
        help: ['tinyurl'].map(v => '#' + v + ' <Url>'),
        tag: 'Tools'
    },
    {
        commands: ['ttp'],
        file: `${__dirname}\\app\\commands\\ttp.js`,
        require: `${__dirname}/app/commands/ttp.js`,
        help: ['ttp'].map(v => '#' + v + ' <Teks>'),
        tag: 'Sticker'
    },
    {
        commands: ['utranslate'],
        file: `${__dirname}\\app\\commands\\utranslate.js`,
        require: `${__dirname}/app/commands/utranslate.js`,
        help: ['utranslate'].map(v => '#' + v + ' <B. Asal> <B. Tujuan> <Teks>'),
        tag: 'Education'
    },
    {
        commands: ['gacha', ''].map(v => v + 'waifu'),
        file: `${__dirname}\\app\\commands\\waifu.js`,
        require: `${__dirname}/app/commands/waifu.js`,
        help: ['#gacha', '#'].map(v => v + 'waifu'),
        tag: 'Anime'
    },
    {
        commands: ['wiki'],
        file: `${__dirname}\\app\\commands\\wiki.js`,
        require: `${__dirname}/app/commands/wiki.js`,
        help: ['wiki'].map(v => '#' + v + ' <Pencarian>'),
        tag: 'Tools'
    },
    {
        commands: ['ytgold'],
        file: `${__dirname}\\app\\commands\\ytgold.js`,
        require: `${__dirname}/app/commands/ytgold.js`,
        help: ['ytgold'].map(v => '#' + v + ' <Nama>'),
        tag: 'Maker'
    },
    {
        commands: ['ytsilver'],
        file: `${__dirname}\\app\\commands\\ytsilver.js`,
        require: `${__dirname}/app/commands/ytsilver.js`,
        help: ['ytsilver'].map(v => '#' + v + ' <Nama>'),
        tag: 'Maker'
    },
]

main.Run()
// main.client.clea

process.on('exit', () => {
    console.clear()
})