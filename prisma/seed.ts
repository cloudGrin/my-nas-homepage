import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    const inner = await prisma.applicationType.upsert({
        where: { name: "内网" },
        update: {},
        create: {
            name: "内网",
            apps: {
                create: [
                    {
                        name: "群辉",
                        path: "nas",
                        url: "http://192.168.31.6:5000/",
                        logo: "https://cloudgrin.oss-cn-shanghai.aliyuncs.com/images/dashborad/synology_1.png",
                        requireLogin: true,
                        sortOrder: 10
                    },
                    {
                        name: "群晖文件夹",
                        path: "folder",
                        url: "http://192.168.31.6:18502/",
                        logo: "https://cloudgrin.oss-cn-shanghai.aliyuncs.com/images/dashborad/finder.png",
                        requireLogin: true,
                        sortOrder: 11
                    },
                    {
                        name: "ChatGpt",
                        path: "gpt",
                        url: "http://192.168.31.6:12356/",
                        logo: "https://cloudgrin.oss-cn-shanghai.aliyuncs.com/images/dashborad/chatgpt_1.png",
                        requireLogin: true,
                        sortOrder: 20
                    },
                    {
                        name: "相册",
                        path: "photo",
                        url: "http://192.168.31.6:21065/",
                        logo: "https://cloudgrin.oss-cn-shanghai.aliyuncs.com/images/dashborad/tupian_1.png",
                        requireLogin: true,
                        sortOrder: 30
                    },
                    {
                        name: "Driver",
                        path: "driver",
                        url: "http://192.168.31.6:16502/",
                        logo: "https://cloudgrin.oss-cn-shanghai.aliyuncs.com/images/dashborad/driver.png",
                        requireLogin: true,
                        sortOrder: 31
                    },
                    {
                        name: "我的云盘",
                        path: "cloud",
                        url: "http://192.168.31.6:2199/index.php?dir=/var",
                        logo: "https://cloudgrin.oss-cn-shanghai.aliyuncs.com/images/dashborad/yunpan_1.png",
                        requireLogin: false,
                        sortOrder: 40
                    },
                    {
                        name: "云盘管理",
                        path: "cloud-manage",
                        url: "http://192.168.31.6:1898/",
                        logo: "https://cloudgrin.oss-cn-shanghai.aliyuncs.com/images/dashborad/iCloud-Drive_1.png",
                        requireLogin: true,
                        sortOrder: 50
                    },
                    {
                        name: "电子书",
                        path: "book",
                        url: "http://192.168.31.6:25083/",
                        logo: "https://cloudgrin.oss-cn-shanghai.aliyuncs.com/images/dashborad/ibook_1.png",
                        requireLogin: false,
                        sortOrder: 60
                    },
                    {
                        name: "家庭影院",
                        path: "movie",
                        url: "http://192.168.31.6:8096/",
                        logo: "https://cloudgrin.oss-cn-shanghai.aliyuncs.com/images/dashborad/Videos_1.png",
                        requireLogin: true,
                        sortOrder: 70
                    },
                    {
                        name: "画图",
                        path: "draw",
                        url: "http://192.168.31.6:18080/?lang=zh&offline=1",
                        logo: "https://cloudgrin.oss-cn-shanghai.aliyuncs.com/images/dashborad/drawio_1.png",
                        requireLogin: false,
                        sortOrder: 80
                    },
                    {
                        name: "爱快",
                        path: "ikuai",
                        url: "http://192.168.31.1/",
                        logo: "https://cloudgrin.oss-cn-shanghai.aliyuncs.com/images/dashborad/Internet_1.png",
                        requireLogin: true,
                        sortOrder: 90
                    },
                    {
                        name: "Openwrt",
                        path: "openwrt",
                        url: "http://192.168.31.8/",
                        logo: "https://cloudgrin.oss-cn-shanghai.aliyuncs.com/images/dashborad/openwrt_1.png",
                        requireLogin: true,
                        sortOrder: 100
                    },
                    {
                        name: "Aria2下载",
                        path: "aria2",
                        url: "http://192.168.31.6:10000/",
                        logo: "https://cloudgrin.oss-cn-shanghai.aliyuncs.com/images/dashborad/Transmission_1.png",
                        requireLogin: false,
                        sortOrder: 110
                    },
                    {
                        name: "Esxi虚拟机",
                        path: "esxi",
                        url: "http://192.168.31.3/",
                        logo: "https://cloudgrin.oss-cn-shanghai.aliyuncs.com/images/dashborad/esxi_1.png",
                        requireLogin: true,
                        sortOrder: 120
                    },
                    {
                        name: "HomeAssistant",
                        path: "ha",
                        url: "http://192.168.31.6:8123/",
                        logo: "https://cloudgrin.oss-cn-shanghai.aliyuncs.com/images/dashborad/ha.png",
                        requireLogin: true,
                        sortOrder: 130
                    },
                    {
                        name: "n8n",
                        path: "n8n",
                        url: "http://192.168.31.6:9518/",
                        logo: "https://cloudgrin.oss-cn-shanghai.aliyuncs.com/images/dashborad/n8n.png",
                        requireLogin: true,
                        sortOrder: 140
                    },
                    {
                        name: "ChineseSubFinder",
                        path: "sub",
                        url: "http://192.168.31.6:19035/",
                        logo: "https://cloudgrin.oss-cn-shanghai.aliyuncs.com/images/dashborad/sub.png",
                        requireLogin: true,
                        sortOrder: 150
                    },
                    {
                        name: "Alist",
                        path: "alist",
                        url: "http://192.168.31.6:15244/",
                        logo: "https://cloudgrin.oss-cn-shanghai.aliyuncs.com/images/dashborad/alist.png",
                        requireLogin: true,
                        sortOrder: 160
                    },
                    {
                        name: "QingLong",
                        path: "qinglong",
                        url: "http://192.168.31.6:16100/",
                        logo: "https://cloudgrin.oss-cn-shanghai.aliyuncs.com/images/dashborad/qinglong.png",
                        requireLogin: true,
                        sortOrder: 170
                    },

                ],
            },
        },
    });
    const outer = await prisma.applicationType.upsert({
        where: { name: "外网" },
        update: {},
        create: {
            name: "外网",
            apps: {
                create: [
                    {
                        name: "我的博客",
                        path: "blog",
                        url: "https://blog.grin.cool/",
                        logo: "https://cloudgrin.oss-cn-shanghai.aliyuncs.com/images/dashborad/AppStore_1.png",
                        requireLogin: false,
                        sortOrder: 10
                    },
                    {
                        name: "ChatGpt",
                        path: "gpt",
                        url: "https://q.210313.cn:12357/",
                        logo: "https://cloudgrin.oss-cn-shanghai.aliyuncs.com/images/dashborad/chatgpt_1.png",
                        requireLogin: true,
                        sortOrder: 20
                    },
                    {
                        name: "相册",
                        path: "photo",
                        url: "https://q.210313.cn:21066/",
                        logo: "https://cloudgrin.oss-cn-shanghai.aliyuncs.com/images/dashborad/tupian_1.png",
                        requireLogin: true,
                        sortOrder: 30
                    },
                    {
                        name: "我的云盘",
                        path: "cloud",
                        url: "https://q.210313.cn:2200/index.php?dir=/var",
                        logo: "https://cloudgrin.oss-cn-shanghai.aliyuncs.com/images/dashborad/yunpan_1.png",
                        requireLogin: false,
                        sortOrder: 40
                    },
                    {
                        name: "家庭影院",
                        path: "movie",
                        url: "https://q.210313.cn:8096/",
                        logo: "https://cloudgrin.oss-cn-shanghai.aliyuncs.com/images/dashborad/Videos_1.png",
                        requireLogin: true,
                        sortOrder: 50
                    },
                    {
                        name: "电子书",
                        path: "book",
                        url: "https://q.210313.cn:5188/",
                        logo: "https://cloudgrin.oss-cn-shanghai.aliyuncs.com/images/dashborad/ibook_1.png",
                        requireLogin: false,
                        sortOrder: 60
                    },
                    {
                        name: "群晖文件夹",
                        path: "folder",
                        url: "https://q.210313.cn:18502/",
                        logo: "https://cloudgrin.oss-cn-shanghai.aliyuncs.com/images/dashborad/finder.png",
                        requireLogin: true,
                        sortOrder: 70
                    },
                    {
                        name: "Driver",
                        path: "driver",
                        url: "https://q.210313.cn:16502/",
                        logo: "https://cloudgrin.oss-cn-shanghai.aliyuncs.com/images/dashborad/driver.png",
                        requireLogin: true,
                        sortOrder: 80
                    },
                    {
                        name: "云盘管理",
                        path: "cloud-manage",
                        url: "https://q.210313.cn:1899/",
                        logo: "https://cloudgrin.oss-cn-shanghai.aliyuncs.com/images/dashborad/iCloud-Drive_1.png",
                        requireLogin: true,
                        sortOrder: 90
                    },
                    {
                        name: "画图",
                        path: "draw",
                        url: "https://q.210313.cn:18081/?lang=zh&offline=1",
                        logo: "https://cloudgrin.oss-cn-shanghai.aliyuncs.com/images/dashborad/drawio_1.png",
                        requireLogin: false,
                        sortOrder: 100
                    },
                ],
            },
        },
    });
    console.log({ inner, outer });
}
main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
