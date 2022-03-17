const fg = require("fast-glob");
const path = require("path");
const fs = require("fs");
function globFiles(dirName) {
    const pathDir = path.resolve(__dirname, '../docs/' + dirName + "/src/")
    const rootPathDir = path.resolve(__dirname, '../docs/' + dirName)
    const entries = fg.sync("*/config.json", { dot: true, cwd: pathDir });
    let list_data = [];
    for (let index = 0; index < entries.length; index++) {
        const item = entries[index];
        const json_path = path.resolve(pathDir, item);
        let contnt = require(json_path);
        const name = item.split('/')[0];
        contnt.link = contnt.link ? contnt.link : `/${dirName}/src/${name}/index`
        contnt.root = dirName;
        list_data.push(contnt);
    }
    let data_json_path = path.resolve(rootPathDir, "data.json");
    fs.writeFileSync(data_json_path, JSON.stringify(list_data))
}
function run() {
    globFiles("framework");
    globFiles("function");
    globFiles("question");
}

run()