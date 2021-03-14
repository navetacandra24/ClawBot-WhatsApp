const GIFEncoder = require('gifencoder');
const { createCanvas } = require('canvas');
const { CanvasTextWrapper } = require('canvas-text-wrapper');
const fs = require('fs');
const PATH = `${__dirname}/../src/attp.gif`;

const helper = function (text) {

    const encoder = new GIFEncoder(512, 512);

    encoder.createReadStream().pipe(fs.createWriteStream(PATH));

    encoder.start();
    encoder.setRepeat(0);
    encoder.setDelay(120);
    encoder.setQuality(80);

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

    ctx.fillStyle = 'white'; // or 'transparent'
	ctx.fillRect(0, 0, 512, 512);

    const color = [
        'red',
        'lime',
        'yellow',
        'magenta',
        'cyan'
    ]

    for (let i = 0; i < color.length; i++) {
        ctx.fillStyle = color[i];
        CanvasTextWrapper(canvas, text, options);
        encoder.addFrame(ctx)
    }
    encoder.finish()

};

module.exports = helper