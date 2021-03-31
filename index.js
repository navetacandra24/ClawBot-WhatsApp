const main = require(`${__dirname}/app/main`);
global.f = require('firebase');
global.API = {
    heroku1: 'https://fierce-brushlands-90323.herokuapp.com',
    heroku2: 'https://shielded-hollows-79689.herokuapp.com'
};
global.ownerId = '6285311174928@c.us';
global.ownerContact = [`Clawbot's Owner`, '+62 853-1117-4928']
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
        require: `${__dirname}/app/commands/add.js`,
        help: ['add', '+'].map(v => '#' + v + ' <Nomor>'),
        tag: 'Group'
    },
    {
        commands: ['', 'list'].map(v => 'anime' + v),
        require: `${__dirname}/app/commands/anime.js`,
        help: ['', 'list'].map(v => '#anime' + v + ' <limit (Max 50, Default 10)>'),
        tag: 'Anime'
    },
    {
        commands: ['apakah'],
        require: `${__dirname}/app/commands/apakah.js`,
        help: ['apakah'].map(v => '#' + v + ' <Pertanyaan>'),
        tag: 'Kerang'
    },
    {
        commands: ['attp'],
        require: `${__dirname}/app/commands/attp.js`,
        help: ['attp'].map(v => '#' + v + ' <Teks>'),
        tag: 'Sticker'
    },
    {
        commands: ['bcgc'],
        require: `${__dirname}/app/commands/bcgc.js`,
        help: ['bcgc'].map(v => '#' + v + ' <Pesan> *( Dangerous )*'),
        tag: 'Owner'
    },
    {
        commands: ['bc'],
        require: `${__dirname}/app/commands/bc.js`,
        help: ['bc'].map(v => '#' + v + ' <Pesan> *( Dangerous )*'),
        tag: 'Owner'
    },
    {
        commands: ['bitly'],
        require: `${__dirname}/app/commands/bitly.js`,
        help: ['bitly'].map(v => '#' + v + ' <Url>'),
        tag: 'Tools'
    },
    {
        commands: ['bucin'],
        require: `${__dirname}/app/commands/bucin.js`,
        help: ['bucin'].map(v => '#' + v),
        tag: 'Quotes'
    },
    {
        commands: ['bugreport'],
        require: `${__dirname}/app/commands/bugreport.js`,
        help: ['bugreport'].map(v => '#' + v + ' <Laporan>'),
        tag: 'Info'
    },
    {
        commands: ['covid'],
        require: `${__dirname}/app/commands/covid.js`,
        help: ['covid'].map(v => '#' + v),
        tag: 'Info'
    },
    {
        commands: ['depo', 'deposit'],
        require: `${__dirname}/app/commands/depo.js`,
        help: ['depo', 'deposit'].map(v => '#' + v + ' <Jumlah || all>'),
        tag: 'Game'
    },
    {
        commands: ['dompet', 'atm', 'saldo'],
        require: `${__dirname}/app/commands/dompet.js`,
        help: ['dompet', 'atm', 'saldo'].map(v => '#' + v + ' <Tag (Optional)>'),
        tag: 'Game'
    },
    {
        commands: ['donasi'],
        require: `${__dirname}/app/commands/donasi.js`,
        help: ['donasi'].map(v => '#' + v),
        tag: 'Info'
    },
    {
        commands: ['givecoins'],
        require: `${__dirname}/app/commands/givecoins.js`,
        help: ['givecoins'].map(v => '#' + v + ' <Nomor> <Jumlah>'),
        tag: 'Owner'
    },
    {
        commands: ['google'],
        require: `${__dirname}/app/commands/google.js`,
        help: ['google'].map(v => '#' + v + ' <Pencarian>'),
        tag: 'Tools'
    },
    {
        commands: ['gtranslate'],
        require: `${__dirname}/app/commands/gtranslate.js`,
        help: ['gtranslate'].map(v => '#' + v + ' <B. Asal> <B. Tujuan> <Teks>'),
        tag: 'Education'
    },
    {
        commands: ['glitchtext'],
        require: `${__dirname}/app/commands/glitchtext.js`,
        help: ['glitchtext'].map(v => '#' + v + ' <Teks 1> | <Teks 2>'),
        tag: 'Maker'
    },
    {
        commands: ['help', 'menu', '?'].map(v => v),
        require: `${__dirname}/app/commands/help.js`,
        help: ['help', 'menu', '?'].map(v => '#' + v),
        tag: 'Main'
    },
    {
        commands: ['kah', ''].map(v => 'kapan' + v),
        require: `${__dirname}/app/commands/kapan.js`,
        help: ['kah', ''].map(v => '#kapan' + v + ' <Pertanyaan>'),
        tag: 'Kerang'
    },
    {
        commands: ['kbbi'],
        require: `${__dirname}/app/commands/kbbi.js`,
        help: ['kbbi'].map(v => '#' + v + ' <Kata>'),
        tag: 'Education'
    },
    {
        commands: ['kick', 'usir', '-', 'remove'],
        require: `${__dirname}/app/commands/kick.js`,
        help: ['kick', 'usir', '-', 'remove'].map(v => '#' + v + ' <Tag Nomor>'),
        tag: 'Group'
    },
    {
        commands: ['kickall', 'removeall'],
        require: `${__dirname}/app/commands/kickall.js`,
        help: ['kickall', 'removeall'].map(v => '#' + v),
        tag: 'Group'
    },
    {
        commands: ['leaderboard', 'lb'],
        require: `${__dirname}/app/commands/leaderboard.js`,
        help: ['leaderboard', 'lb'].map(v => '#' + v),
        tag: 'Game'
    },
    {
        commands: ['owner', 'creator'],
        require: `${__dirname}/app/commands/owner.js`,
        help: ['owner', 'creator'].map(v => '#' + v),
        tag: 'Info'
    },
    {
        commands: ['pay', 'transfer'],
        require: `${__dirname}/app/commands/pay.js`,
        help: ['pay', 'transfer'].map(v => '#' + v + ' <Tag Penerima> <Jumlah Transfer>'),
        tag: 'Game'
    },
    {
        commands: ['pengumuman', 'announcement'],
        require: `${__dirname}/app/commands/pengumuman.js`,
        help: ['pengumuman', 'announcement'].map(v => '#' + v + ' <pesan>'),
        tag: 'Group'
    },
    {
        commands: ['rob', 'curi'],
        require: `${__dirname}/app/commands/rob.js`,
        help: ['rob', 'curi'].map(v => '#' + v + ' <Tag>'),
        tag: 'Game'
    },
    {
        commands: ['status', 'sendStatus'],
        require: `${__dirname}/app/commands/sendStatus.js`,
        help: ['status', 'sendStatus'].map(v => '#' + v + ' <Teks>'),
        tag: 'Owner'
    },
    {
        commands: ['speed', 'ping'],
        require: `${__dirname}/app/commands/speed.js`,
        help: ['speed', 'ping'].map(v => '#' + v),
        tag: 'Tools'
    },
    {
        commands: ['web', ''].map(v => 'ss' + v),
        require: `${__dirname}/app/commands/ss.js`,
        help: ['web', ''].map(v => '#ss' + v + ' <Url>'),
        tag: 'Tools'
    },
    {
        commands: ['cker', 'ker'].map(v => 'sti' + v),
        require: `${__dirname}/app/commands/sticker.js`,
        help: ['cker', 'ker'].map(v => '#sti' + v + ' (Caption)'),
        tag: 'Sticker'
    },
    {
        commands: ['suit'],
        require: `${__dirname}/app/commands/suit.js`,
        help: ['suit'].map(v => '#' + v + ' <pilihan>'),
        tag: 'Game'
    },
    {
        commands: ['taga', 'tag-a'].map(v => v + 'll'),
        require: `${__dirname}/app/commands/tagAll.js`,
        help: ['taga', 'tag-a'].map(v => '#' + v + 'll'),
        tag: 'Game'
    },
    {
        commands: ['har', 'tah'].map(v => v + 'ta'),
        require: `${__dirname}/app/commands/tahta.js`,
        help: ['harta', 'tahta'].map(v => '#' + v + ' <Teks>'),
        tag: 'Maker'
    },
    {
        commands: ['tinyurl'],
        require: `${__dirname}/app/commands/tinyurl.js`,
        help: ['tinyurl'].map(v => '#' + v + ' <Url>'),
        tag: 'Tools'
    },
    {
        commands: ['ttp'],
        require: `${__dirname}/app/commands/ttp.js`,
        help: ['ttp'].map(v => '#' + v + ' <Teks>'),
        tag: 'Sticker'
    },
    {
        commands: ['utranslate'],
        require: `${__dirname}/app/commands/utranslate.js`,
        help: ['utranslate'].map(v => '#' + v + ' <B. Asal> <B. Tujuan> <Teks>'),
        tag: 'Education'
    },
    {
        commands: ['gacha', ''].map(v => v + 'waifu'),
        require: `${__dirname}/app/commands/waifu.js`,
        help: ['#gacha', '#'].map(v => v + 'waifu'),
        tag: 'Anime'
    },
    {
        commands: ['wiki'],
        require: `${__dirname}/app/commands/wiki.js`,
        help: ['wiki'].map(v => '#' + v + ' <Pencarian>'),
        tag: 'Tools'
    },
    {
        commands: ['withdraw'],
        require: `${__dirname}/app/commands/withdraw.js`,
        help: ['withdraw'].map(v => '#' + v + ' <Jumlah Penarikan>'),
        tag: 'Game'
    },
    {
        commands: ['ytgold'],
        require: `${__dirname}/app/commands/ytgold.js`,
        help: ['ytgold'].map(v => '#' + v + ' <Nama>'),
        tag: 'Maker'
    },
    {
        commands: ['ytsilver'],
        require: `${__dirname}/app/commands/ytsilver.js`,
        help: ['ytsilver'].map(v => '#' + v + ' <Nama>'),
        tag: 'Maker'
    },
]

main.Run()
// main.client.clea

process.on('exit', () => {
    // console.clear()
    console.log('ENDED!');
})