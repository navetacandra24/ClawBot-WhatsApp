const main = require(`${__dirname}/app/main`)

main.Run()

process.on('exit', () => {
    console.clear()
})