const fs = require('fs');
const path = require('path');
/**
 * 异步读取组件入口
 * @return { Promise } 包含所有组件入口的promise
 */
function getAsyncEntries() {
    return new Promise((resolve, reject) => {
        fs.readdir(path.resolve(__dirname, '../packages'), (err, files) => {
            if (err) {
                return console.log('packages目录不存在');
            }
            const entries = {};
            for (let file of files) {
                const isDirectory = fs.lstatSync(path.resolve(__dirname, `../packages/${file}`)).isDirectory();
                if (isDirectory) {
                    entries[file] = `./src/packages/${file}/index.ts`;
                }
            }
            resolve(entries);
        });
    });
}

module.exports = getAsyncEntries;
