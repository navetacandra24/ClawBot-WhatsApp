const main = require(`${__dirname}/app/main`)

main.Run()
// main.client.clea

process.on('exit', () => {
    console.clear()
})