const fs = require('fs');
const exec = require('child_process');

// let files = fs.readdirSync(`${__dirname}/commands/`, 'utf-8').filter(file => file.endsWith('.js'));
let dir = `C:\\Users\\Arinaveta\\Desktop\\Candra\\Project\\wa-bot\\app\\commands\\`
require(dir + 'anime.js')


const supervisor =  function () {
    console.log(require.cache[dir + 'anime.js']);
    fs.watch(dir, { encoding: 'utf-8' }, (event, filename) => {
        if (event === 'change') {
            delete require.cache[dir + filename]
            // console.log(require.cache[dir + filename]);
            require(dir + 'anime.js')
            this
        }
    })
}

supervisor()

