const chalk = require("chalk");

async function logMSG(m) {
    let numFrom = m.from.split('@')[0].split('-')[0];
    let numTo = m.to.split('@')[0].split('-')[0];
    let content = m.body;
    let d = new Date()
    let date = `${d.toLocaleDateString('id-ID').replace('/', ' : ')} | ${d.toLocaleTimeString('id-ID').replace('.', ' : ')}`;
    const format = `\n${chalk.cyan('[ RECEIVED ]')} ${chalk.green('~'+numFrom)} ${chalk.black.bgYellow(date)} to ${chalk.green(numTo)}\n${content}\n`
    console.log(format);
}

module.exports = logMSG