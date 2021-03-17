// const fetch = require('node-fetch');
// (async () => {
//     const response = await fetch('https://api.xteam.xyz/attp?file&text=gigi%20kuda', { mode: 'no-cors' });
//     const data = await response.buffer()
//     const b64 = data.toString('base64');
//     console.log(b64);
// })();
var fs = require('fs'),
    request = require('request');

var download = function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
        console.log('content-type:', res.headers['content-type']);
        console.log('content-length:', res.headers['content-length']);

        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};
download('https://fierce-brushlands-90323.herokuapp.com/ssweb?url=https://github.com', 'tes.jpg', function () {
    console.log('Done');
})