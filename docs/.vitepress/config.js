let glob = require("glob")
const fs = require("fs");
const readline = require('readline');
function fsReadLine(url) {
    return new Promise((resolve) => {
        let bool = fs.existsSync(url);
        if (!bool) {
            return resolve(false);
        }
        let readStream = fs.createReadStream(url);
        let rl = readline.createInterface({
            input: readStream
        });
        let n = 1;
        rl.on('line', (line) => {
            if (n == 1) {
                resolve(line.toString());
            }
            readStream.destroy();
            rl.close();
            n--
        });
    })
}
const baseMap = {
    base: {
        title: '基础',
        sort: 0,
    },
    forward: {
        title: '进阶',
        sort: 0
    },
    imaging: {
        title: '图形化',
        sort: 0
    },
    build: {
        title: '架构',
        sort: 0
    },
    WebRTC: {
        title: 'WebRTC',
        sort: 0
    },
}
// 获取独立模块
function handleNav() {


    let nav = {};
    let arr = glob.sync("./docs/**/index.md", {})
    arr = arr.map((item) => {
        return item.replace("./docs/", '').split('/');
    })
    let sidebarArr = [];
    arr.forEach((item) => {
        if (item.length <= 1 || item.length > 3) {
            return;
        }
        let text = item[item.length - 2];
        let link = item.join('/')
        let key = item[0];
        if (item.length > 2) {
            // 不是一级结构
            if (!nav[key]) {
                nav[key] = { text: baseMap[key] ? baseMap[key].title : key, items: [{ text, link }] }
            } else {
                nav[key].items.push({
                    text,
                    link
                })
            }
        } else {
            nav[key] = {
                text: baseMap[key] ? baseMap[key].title : key, link
            };
        }
        sidebarArr.push(item);

    })
    let sidebar = {};
    sidebarArr = sidebarArr.map((item) => {
        item.splice(-1, 1)
        return item.join('/');
    })
    let sidebar_glob_arr = glob.sync("./**/[0-9]*.md", { root: './docs' })
    sidebar_glob_arr = sidebar_glob_arr.map((item) => {
        let _item = item.replace("./docs/", '')
        return _item
    })
    sidebar_glob_arr = sidebar_glob_arr.filter((item) => {
        let _item = item.split('/')
        _item.splice(-1, 1);
        _item = _item.join('/')
        return sidebarArr.includes(_item);
    })
    sidebar_glob_arr.forEach(async (item) => {
        let _kename = await fsReadLine("./docs/" + item);
        if (_kename) {
            _kename = _kename.replace("#", '')
        }
        item = item.split('/')
        let text = _kename ? _kename : item[item.length - 1];
        // 查询对应的文章内容标题

        let kename = item[item.length - 2];
        let link = item.join('/')
        let _key = item;
        _key.splice(-1, 1);
        let key = "/" + _key.join('/');
        // 不是一级结构
        if (!sidebar[key]) {
            sidebar[key] = [{ text: kename.toLocaleUpperCase(), items: [{ text, link }] }]
        } else {
            sidebar[key][0].items.push({
                text, link
            })
        }

    })
    return [nav, sidebar];
}

const [nav, sidebar] = handleNav();
nav['github'] = {
    text: 'github',
    link: 'https://www.github.com/chunshand'
};
export default {
    title: '收藏&学习',
    description: '前端、算法、样式、HTML、CSS、JS、javascript、ES6',
    themeConfig: {
        nav,
        sidebar,
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2019-present chunshand'
        },

    },
    markdown: {
        lineNumbers: true
    }
}