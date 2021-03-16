const { createCanvas } = require('canvas');
const { CanvasTextWrapper } = require('canvas-text-wrapper');
const fs = require('fs');
const GIFEncoder = require('gifencoder');

const path = `${__dirname}/../src/attp.gif`;

function maker(text) {
    const encoder = new GIFEncoder(512, 512);

    encoder.createReadStream().pipe(fs.createWriteStream(path));

    encoder.start();
    encoder.setRepeat(0);
    encoder.setDelay(120);
    encoder.setQuality(80);

    const canvas = createCanvas(512, 512);
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, 512, 512);
    
    const options = {
        font: `${canvas.width * (38 / canvas.width)}px Arial`,
        textAlign: 'center',
        verticalAlign: 'middle',
        allowNewLine: true,
        lineBreak: 'auto',
        sizeToFill: true,
        lineHeight: 80,
    };

    const color = [
        'red',
        'lime',
        'yellow',
        'magenta',
        'cyan'
    ];

    for (let i = 0; i < color.length; i++) {
        ctx.fillStyle = color[i];
        CanvasTextWrapper(canvas, decodeURIComponent(text), options);
        encoder.addFrame(ctx)
    }

    encoder.finish()
}

function helper(text) {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path)
        fs.unlinkSync(`${__dirname}/../src/attp.webp`)
        maker(text)
    } else {
        maker(text)
    }

}

module.exports = helper