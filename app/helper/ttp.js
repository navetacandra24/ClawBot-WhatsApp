// const GIFEncoder = require('gifencoder');
const { createCanvas } = require('canvas');
const { CanvasTextWrapper } = require('canvas-text-wrapper');
const fs = require('fs');
const PATH = `${__dirname}/../src/ttp.jpg`;

const helper = function (text) {

    const canvas = createCanvas(512, 512);
    const ctx = canvas.getContext('2d');
    const options = {
        font: `${canvas.width * (38 / canvas.width)}px Arial`,
        textAlign: 'center',
        verticalAlign: 'middle',
        allowNewLine: true,
        lineBreak: 'auto',
        sizeToFill: true,
        lineHeight: 80,
    };

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, 512, 512);

    ctx.fillStyle = 'black';
    CanvasTextWrapper(canvas, text, options);

    let base64 = canvas.toDataURL('image/jpeg').replace('data:image/jpeg;base64,', '');
    let data = new Buffer.from(base64, 'base64');

    fs.writeFileSync(PATH, data)

};

module.exports = helper