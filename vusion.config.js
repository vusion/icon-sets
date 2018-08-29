module.exports = {
    version: '>=0.5.0',
    type: 'library',
    lint: true,
    webpack: {
        entry: {
            bundle: './src/index.js',
        },
        output: {
            publicPath: '/icon-sets/',
        },
    },
    webpackDevServer: {
        historyApiFallback: {
            index: '/icon-sets/',
        },
    },
    docs: {
        title: 'Vusion 图标库',
        mode: 'history',
        base: '/icon-sets/',
        navbar: [
            { text: '图标库', to: '/components' },
        ],
    },
};
