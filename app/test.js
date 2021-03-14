const webp = require('webp-converter');
const fs = require('fs');

webp.grant_permission();

// function get_webpbase64(path) {
//     fs.readFile(path, function (error, data) {
//         if (error) {
//             throw error;
//         } else {
//             let buf = Buffer.from(data);
//             let dataBase64 = Buffer.from(buf).toString('base64');
//             // base64str of image
//             // base64str image type jpg,png ...
//             //option: options and quality,it should be given between 0 to 100
//             let result = webp.str2webpstr(dataBase64,"jpg","-q 80");
//             result.then(function(result) {
//             // you access the value from the promise here
//             console.log(result)
//             });
//         }
//     });
// }

// use the custom temp path for conversion
// get_webpbuffer("./nodejs_logo.jpg","/home/user/Desktop/webp/temp")
// webp.

console.log(fs.readFileSync(`${__dirname}/attp-1.webp`, 'base64'));

// const result = webp.gwebp(`${__dirname}/attp.gif`,`${__dirname}/attp-2.webp`,"-q 80",logging="-v");
// result.then(res => {
//     console.log(res);
// })
