const fs = require('fs');
const path = require('path');
const axios = require('axios');
const download = require('download');

const themes = require('./themes.json');

(async () => {
    const res = await axios.get('https://fonts.google.com/metadata/icons');
    const data = res.data.replace(/^.+\n/, '');
    fs.writeFileSync(path.resolve(__dirname, 'metadata.json'), data);
    const metadata = JSON.parse(data);
    console.info('Icons count:', metadata.icons.length);

    for (const theme of Object.keys(themes)) {
        for (const icon of metadata.icons) {
            // https://fonts.gstatic.com/s/i/materialicons/3d_rotation/v9/24px.svg?download=true
            // "/s/i/{theme}/{icon}/v{version}/{asset}
            try {
                // eslint-disable-next-line no-await-in-loop
                const result = await download(`https://fonts.gstatic.com/s/i/materialicons${themes[theme]}/${icon.name}/v${icon.version}/24px.svg`, path.resolve(__dirname, `../assets/${theme}`), {
                    filename: icon.name + '.svg',
                });
                console.info('[done]', theme + '/' + icon.name);
            } catch (e) {
                console.error('[error]', theme + '/' + icon.name, e);
            }
        }
    }
})();
