const fs = require('fs-extra');

const src = `${__dirname}/app`;
const out = `${__dirname}/build`;

fs.copySync(src, out, { overwrite: true }, function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('Build Completed!')
    }
});