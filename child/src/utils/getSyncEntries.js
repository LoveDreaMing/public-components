const fs = require('fs');
const path = require('path');
/**
 * 同步读取组件入口
 * @return { Object } 包含所有组件入口的对象
 */
function getSyncEntries() {
    const entries = {};
    const files = fs.readdirSync(path.resolve(__dirname, '../packages'));
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const isDirectory = fs.lstatSync(path.resolve(__dirname, `../packages/${file}`)).isDirectory();
        if (isDirectory) {
            entries[file] = `./src/packages/${file}/index.ts`;
        }
    }
    return entries;
}

module.exports = getSyncEntries;
