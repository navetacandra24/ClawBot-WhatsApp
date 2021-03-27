global.f = require('firebase');
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
const db = require('./helper/database');
(async () => {
    let _a = await db.GETUser();
    console.log(Object.keys(_a).length);
})();
