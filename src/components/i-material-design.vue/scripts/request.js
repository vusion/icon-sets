const fs = require('fs');
const path = require('path');
const https = require('https');

const wstream = fs.createWriteStream(path.resolve(__dirname, 'metadata.json'));

https.request('https://fonts.google.com/metadata/icons', (err, res) => {
    res.pipe(wstream);
});
