const fs = require('fs');

const sPath = `${__dirname}/status.json`
const status = JSON.parse(fs.readFileSync(sPath, 'utf-8'));

const handler = function (client) {

    let endtimeString = `0.1`; //menit
    let endtime = Number(endtimeString) * 60000
    setTimeout(async () => {
        status.botOn = false
        // fs.writeFileSync(sPath, JSON.stringify(status))
        await client.setStatus('Im a Bot! 🤖 || Bot OFF')
    }, endtime);

}

module.exports = handler