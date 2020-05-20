const fs = require('fs');
const path = require('path');

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

fs.writeFileSync(path.resolve(__dirname, '../module.css'), Object.keys(FAMILIES)
    .map((theme) => metadata.icons
        .map((icon) => `.root[name="${icon.name}"]${theme === 'filled' ? '' : `[theme="${theme}"]`}::before {
    icon-font: url('./assets/${theme}/${icon.name}.svg');
}
`).join('\n')).join('\n'));

fs.writeFileSync(path.resolve(__dirname, '../docs/examples.md'), `## 图标集合

` + metadata.icons.map((icon) => `<u-icon-example icon="i-material-design" name="${icon.name}"></u-icon-example>`).join('\n'));
