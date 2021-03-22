const chalk = require("chalk");

function logMSG(m, command, from) {
    let numFrom = from.split('@')[0];
    let d = new Date();
    let _is = command.includes(m.body.toLowerCase().slice(1).split(/ +/)[0])
    let date = `${d.toLocaleDateString('id-ID').replace(new RegExp('/', 'g'), ' : ')} | ${d.toLocaleTimeString('id-ID').replace('.', ' : ').replace('.', ' : ')}`;
    const format = `${chalk.cyanBright('[ RECEIVED ]')} ${chalk.green('~' + numFrom)} ${chalk.white.bgYellow(date)} ${m.hasMedia ? `${chalk.bgYellow.black(' MEDIA ')}` : ``}\n${_is ? `${chalk.yellow(m.body)}` : `${m.body}`}`
    console.log(format);
}

module.exports = logMSG