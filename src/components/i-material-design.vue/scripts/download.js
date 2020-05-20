const path = require('path');
const download = require('download');

// https://fonts.google.com/metadata/icons
const metadata = require('./metadata.json');
const themes = require('./themes.json');

console.info('Icons count:', metadata.icons.length);

(async () => {
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
