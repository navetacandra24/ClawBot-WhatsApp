const brainly = require('brainly-scraper-v2')

const handler = {
    async exec({ args, client, m, messageFrom }) {
        
        if (args.length >= 1) {
            let soal = args.join(' ');
            try {
                let _f = await brainly(soal, 5, "id");
                let _data = _f.data;
                let data = [];
                let cb = [];
                if (_data.length >= 1) {
                    _data.forEach(res => {
                        const pertanyaan = res.pertanyaan;
                        let jawaban = [];
                        // const jawaban = res.jawaban;
                        // console.log(res.jawaban.length);
                        for (let i = 0; i < res.jawaban.length; i++) {
                            let colon = res.jawaban[i].text.indexOf(':')
                            jawaban.push(res.jawaban[i].text.substr(colon + 1))
                        }
                        data.push({ pertanyaan, jawaban })
                        // console.log(data);
                    });
                    data.forEach((data, i) => {
                        const pertanyaan = data.pertanyaan;
                        const jawaban = data.jawaban;
                        // jawaban.f
                        cb.push(`*Soal Ke ${i + 1}*\n*Pertanyaan :*\n${pertanyaan}\n*Jawaban :*\n${jawaban}\n\n`)
                    });
                    m.reply(cb.join(''))
                } else {
                    m.reply('Soal tidak ditemukan!')
                }
            } catch (err) {
                console.log(err);
            }
        } else {
            m.reply('Soalnya?')
        }
        
    }
}

module.exports = handler