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

