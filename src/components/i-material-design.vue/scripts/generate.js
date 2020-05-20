const fs = require('fs');
const path = require('path');

// https://fonts.google.com/metadata/icons
const metadata = require('./metadata.json');
const themes = require('./themes.json');

console.info('Icons count:', metadata.icons.length);

fs.writeFileSync(path.resolve(__dirname, '../module.css'), Object.keys(themes)
    .map((theme) => theme === 'two-tone' ? '' : metadata.icons
        .map((icon) => `.root[name="${icon.name}"]${theme === 'filled' ? '' : `[theme="${theme}"]`}::before {
    icon-font: url('./assets/${theme}/${icon.name}.svg');
}
`).join('\n')).join('\n'));

fs.writeFileSync(path.resolve(__dirname, '../docs/examples.md'), `
<p></p>

<u-subtabs>
` + Object.keys(themes)
    .map((theme) => theme === 'two-tone' ? '' : `    <u-subtab title="${theme}">
` + metadata.icons.map((icon) => `        <u-icon-example icon="i-material-design" theme="${theme}" name="${icon.name}"></u-icon-example>
`).join('')
 + `    </u-subtab>
`).join('')
 + `</u-subtabs>
`);

