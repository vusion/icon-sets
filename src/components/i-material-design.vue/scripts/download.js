const path = require('path');
const download = require('download');

// https://fonts.google.com/metadata/icons
const metadata = require('./metadata.json');

console.log('Icons count:', metadata.icons.length);
const FAMILIES = {
    filled: '',
    outlined: 'outlined',
    rounded: 'round',
    'two-tone': 'twotone',
    sharp: 'sharp',
};

(async () => {
    for (const family of Object.keys(FAMILIES)) {
        for (const icon of metadata.icons) {
            // https://fonts.gstatic.com/s/i/materialicons/3d_rotation/v9/24px.svg?download=true
            // "/s/i/{family}/{icon}/v{version}/{asset}
            try {
                // eslint-disable-next-line no-await-in-loop
                const result = await download(`https://fonts.gstatic.com/s/i/materialicons${FAMILIES[family]}/${icon.name}/v${icon.version}/24px.svg`, path.resolve(__dirname, `../assets/${family}`), {
                    filename: icon.name + '.svg',
                });
                console.info('[done]', family + '/' + icon.name);
            } catch (e) {
                console.error('[error]', family + '/' + icon.name, e);
            }
        }
    }
})();
