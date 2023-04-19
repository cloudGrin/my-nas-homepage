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
                        name: "我的云盘",
                        url: "http://192.168.31.6:2199/index.php?dir=/var",
                        logo: "https://q.210313.cn:2200/var/Grin/clip-images/dashborad/yunpan_1.png",
                        requireLogin: false,
                    },
                    {
                        name: "云盘管理",
                        url: "http://192.168.31.6:1898/",
                        logo: "https://q.210313.cn:2200/var/Grin/clip-images/dashborad/iCloud-Drive_1.png",
                        requireLogin: true,
                    },
                    {
                        name: "相册",
                        url: "http://192.168.31.6:21065/",
                        logo: "https://q.210313.cn:2200/var/Grin/clip-images/dashborad/tupian_1.png",
                        requireLogin: true,
                    },
                    {
                        name: "Openwrt",
                        url: "http://192.168.31.2/",
                        logo: "https://q.210313.cn:2200/var/Grin/clip-images/dashborad/openwrt_1.png",
                        requireLogin: true,
                    },
                    {
                        name: "爱快",
                        url: "http://192.168.31.1/",
                        logo: "https://q.210313.cn:2200/var/Grin/clip-images/dashborad/Internet_1.png",
                        requireLogin: true,
                    },
                    {
                        name: "电子书",
                        url: "http://192.168.31.6:25083/",
                        logo: "https://q.210313.cn:2200/var/Grin/clip-images/dashborad/ibook_1.png",
                        requireLogin: false,
                    },
                    {
                        name: "ChatGpt",
                        url: "http://192.168.31.6:12356/",
                        logo: "https://q.210313.cn:2200/var/Grin/clip-images/dashborad/chatgpt_1.png",
                        requireLogin: true,
                    },
                    {
                        name: "家庭影院",
                        url: "http://192.168.31.6:8096/",
                        logo: "https://q.210313.cn:2200/var/Grin/clip-images/dashborad/Videos_1.png",
                        requireLogin: true,
                    },
                    {
                        name: "Aria2 下载",
                        url: "http://192.168.31.6:10000/",
                        logo: "https://q.210313.cn:2200/var/Grin/clip-images/dashborad/Transmission_1.png",
                        requireLogin: false,
                    },
                    {
                        name: "群辉",
                        url: "http://192.168.31.6:5000/",
                        logo: "https://q.210313.cn:2200/var/Grin/clip-images/dashborad/synology_1.png",
                        requireLogin: true,
                    },
                    {
                        name: "Esxi虚拟机",
                        url: "http://192.168.31.3/",
                        logo: "https://q.210313.cn:2200/var/Grin/clip-images/dashborad/esxi_1.png",
                        requireLogin: true,
                    },
                    {
                        name: "画图",
                        url: "http://192.168.31.6:18080/?lang=zh&offline=1",
                        logo: "https://q.210313.cn:2200/var/Grin/clip-images/dashborad/drawio_1.png",
                        requireLogin: false,
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
                        url: "https://grin.cool/",
                        logo: "https://210313.cn/img/png/AppStore_1.png",
                        requireLogin: false,
                    },
                    {
                        name: "我的云盘",
                        url: "https://q.210313.cn:2200/index.php?dir=/var",
                        logo: "https://210313.cn/img/png/yunpan_1.png",
                        requireLogin: false,
                    },
                    {
                        name: "云盘管理",
                        url: "https://q.210313.cn:1899/",
                        logo: "https://210313.cn/img/png/iCloud-Drive_1.png",
                        requireLogin: true,
                    },
                    {
                        name: "电子书",
                        url: "https://q.210313.cn:5188/",
                        logo: "https://210313.cn/img/png/ibook_1.png",
                        requireLogin: false,
                    },
                    {
                        name: "ChatGpt",
                        url: "https://q.210313.cn:12357/",
                        logo: "https://210313.cn/img/png/chatgpt_1.png",
                        requireLogin: true,
                    },
                    {
                        name: "家庭影院",
                        url: "https://q.210313.cn:8096/",
                        logo: "https://210313.cn/img/png/Videos_1.png",
                        requireLogin: true,
                    },
                    {
                        name: "相册",
                        url: "https://q.210313.cn:21066/",
                        logo: "https://210313.cn/img/png/tupian_1.png",
                        requireLogin: true,
                    },
                    {
                        name: "画图",
                        url: "https://q.210313.cn:18081/?lang=zh&offline=1",
                        logo: "https://210313.cn/img/png/drawio_1.png",
                        requireLogin: false,
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
