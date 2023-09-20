const path = require('path');
const fs = require('fs');

function getDefaultConfig() {
    return {
        libName: 'dist',
        changelogMdPath: 'CHANGELOG.md',
        siteLogDir: 'project-changelog',
    }
}

function translatePath(config) {
    const needTranslate =  ['libName', 'changelogMdPath'];
    needTranslate.forEach(item => {
        if (config[item]) {
            config[item] = path.resolve(process.cwd(), config[item]);
        }
    })
}

function getConfig(){
    const configPath = path.resolve(process.cwd(), 'docs.config.json');
    let config;
    if (fs.existsSync(configPath)) {
        config = require(configPath);
    } else {
        // 默认配置
        config = getDefaultConfig();
    }
    translatePath(config);
    return config;
}

module.exports = {
    getConfig
}