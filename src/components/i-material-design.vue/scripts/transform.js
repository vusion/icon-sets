const fs = require('fs');
const path = require('path');

// https://fonts.google.com/metadata/icons
const metadata = require('./metadata.json');
const themes = require('./themes.json');

console.info('Icons count:', metadata.icons.length);

Object.keys(themes)
    .forEach((theme) => metadata.icons
        .forEach((icon) => {
            const filePath = path.resolve(__dirname, `../assets/${theme}/${icon.name}.svg`);
            let content = fs.readFileSync(filePath, 'utf8');
            content = content
                .replace(' height="24"', '')
                .replace(' width="24"', '')
                .replace(/ viewBox=".*?"/, ' viewBox="2 2 20 20"');
            fs.writeFileSync(filePath, content);
            console.info('[done]', theme + '/' + icon.name);
        }));
