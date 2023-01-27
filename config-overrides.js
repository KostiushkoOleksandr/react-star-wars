/* config-overrides.js */
const {alias} = require('react-app-rewire-alias')

module.exports = function override(config, env) {
    alias(
        {
            '@components': 'src/components',
            '@ui': 'src/components/UI',
            '@constans': 'src/constans',
            '@hoc': 'src/hoc',
            '@services': 'src/services',
            '@utils': 'src/utils',
            '@containers': 'src/containers',
            '@styles': 'src/styles',
            '@routes': 'src/routes',
            '@static': 'src/static',
            '@hooks': 'src/hooks'
        })(config);
    return config;
}