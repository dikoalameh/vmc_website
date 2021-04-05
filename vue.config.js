module.exports = {

    publicPath: process.env.NODE_ENV === 'production'
        ? '/vmc/' // for subdirectory settings
        // ? '/'       // for non subdirectory
        : '/'

};
