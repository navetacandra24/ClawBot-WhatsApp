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

main.Run()
// main.client.clea

process.on('exit', () => {
    console.clear()
})