require('ignore-styles');
require('@babel/polyfill');

require('@babel/register')({
    ignore: [ /(node_modules)/ ],
    presets: ['@babel/react', '@babel/preset-env']
});

require('./index');