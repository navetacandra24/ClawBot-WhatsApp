const fs = require('fs');

function log(log) {
    const path = `${__dirname}/logs.log`;
    const date = new Date();
    const logTime = `[${date.getDate()} : ${date.getMonth() + 1} : ${date.getFullYear()}][${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}]`;
    const bData = fs.readFileSync(path, 'utf-8');
    const logs = `${bData}\n${logTime}${JSON.stringify(log)}`
    fs.writeFileSync(path, logs)
}

module.exports = log