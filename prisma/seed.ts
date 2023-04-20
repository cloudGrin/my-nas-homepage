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
                        url: "http://192.168.31.6:5000/",
                        logo: "https://q.210313.cn:2200/var/Grin/clip-images/dashborad/synology_1.png",
                        requireLogin: true,
                        sortOrder: 10
                    },
                    {
                        name: "ChatGpt",
                        url: "http://192.168.31.6:12356/",
                        logo: "https://q.210313.cn:2200/var/Grin/clip-images/dashborad/chatgpt_1.png",
                        requireLogin: true,
                        sortOrder: 20
                    },
                    {
                        name: "相册",
                        url: "http://192.168.31.6:21065/",
                        logo: "https://q.210313.cn:2200/var/Grin/clip-images/dashborad/tupian_1.png",
                        requireLogin: true,
                        sortOrder: 30
                    },
                    {
                        name: "我的云盘",
                        url: "http://192.168.31.6:2199/index.php?dir=/var",
                        logo: "https://q.210313.cn:2200/var/Grin/clip-images/dashborad/yunpan_1.png",
                        requireLogin: false,
                        sortOrder: 40
                    },
                    {
                        name: "云盘管理",
                        url: "http://192.168.31.6:1898/",
                        logo: "https://q.210313.cn:2200/var/Grin/clip-images/dashborad/iCloud-Drive_1.png",
                        requireLogin: true,
                        sortOrder: 50
                    },
                    {
                        name: "电子书",
                        url: "http://192.168.31.6:25083/",
                        logo: "https://q.210313.cn:2200/var/Grin/clip-images/dashborad/ibook_1.png",
                        requireLogin: false,
                        sortOrder: 60
                    },
                    {
                        name: "家庭影院",
                        url: "http://192.168.31.6:8096/",
                        logo: "https://q.210313.cn:2200/var/Grin/clip-images/dashborad/Videos_1.png",
                        requireLogin: true,
                        sortOrder: 70
                    },
                    {
                        name: "画图",
                        url: "http://192.168.31.6:18080/?lang=zh&offline=1",
                        logo: "https://q.210313.cn:2200/var/Grin/clip-images/dashborad/drawio_1.png",
                        requireLogin: false,
                        sortOrder: 80
                    },
                    {
                        name: "爱快",
                        url: "http://192.168.31.1/",
                        logo: "https://q.210313.cn:2200/var/Grin/clip-images/dashborad/Internet_1.png",
                        requireLogin: true,
                        sortOrder: 90
                    },
                    {
                        name: "Openwrt",
                        url: "http://192.168.31.2/",
                        logo: "https://q.210313.cn:2200/var/Grin/clip-images/dashborad/openwrt_1.png",
                        requireLogin: true,
                        sortOrder: 100
                    },
                    {
                        name: "Aria2 下载",
                        url: "http://192.168.31.6:10000/",
                        logo: "https://q.210313.cn:2200/var/Grin/clip-images/dashborad/Transmission_1.png",
                        requireLogin: false,
                        sortOrder: 110
                    },
                    {
                        name: "Esxi虚拟机",
                        url: "http://192.168.31.3/",
                        logo: "https://q.210313.cn:2200/var/Grin/clip-images/dashborad/esxi_1.png",
                        requireLogin: true,
                        sortOrder: 120
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
                        logo: "https://q.210313.cn:2200/var/Grin/clip-images/dashborad/AppStore_1.png",
                        requireLogin: false,
                        sortOrder: 10
                    },
                    {
                        name: "ChatGpt",
                        url: "https://q.210313.cn:12357/",
                        logo: "https://q.210313.cn:2200/var/Grin/clip-images/dashborad/chatgpt_1.png",
                        requireLogin: true,
                        sortOrder: 20
                    },
                    {
                        name: "相册",
                        url: "https://q.210313.cn:21066/",
                        logo: "https://q.210313.cn:2200/var/Grin/clip-images/dashborad/tupian_1.png",
                        requireLogin: true,
                        sortOrder: 30
                    },
                    {
                        name: "我的云盘",
                        url: "https://q.210313.cn:2200/index.php?dir=/var",
                        logo: "https://q.210313.cn:2200/var/Grin/clip-images/dashborad/yunpan_1.png",
                        requireLogin: false,
                        sortOrder: 40
                    },
                    {
                        name: "家庭影院",
                        url: "https://q.210313.cn:8096/",
                        logo: "https://q.210313.cn:2200/var/Grin/clip-images/dashborad/Videos_1.png",
                        requireLogin: true,
                        sortOrder: 50
                    },
                    {
                        name: "云盘管理",
                        url: "https://q.210313.cn:1899/",
                        logo: "https://q.210313.cn:2200/var/Grin/clip-images/dashborad/iCloud-Drive_1.png",
                        requireLogin: true,
                        sortOrder: 60
                    },
                    {
                        name: "电子书",
                        url: "https://q.210313.cn:5188/",
                        logo: "https://q.210313.cn:2200/var/Grin/clip-images/dashborad/ibook_1.png",
                        requireLogin: false,
                        sortOrder: 70
                    },
                    {
                        name: "画图",
                        url: "https://q.210313.cn:18081/?lang=zh&offline=1",
                        logo: "https://q.210313.cn:2200/var/Grin/clip-images/dashborad/drawio_1.png",
                        requireLogin: false,
                        sortOrder: 80
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
