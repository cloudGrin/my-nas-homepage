# My Nas Homepage

这是一个使用[Nextjs](https://nextjs.org/)搭建的项目，用来承载[我的群晖Nas的应用导航页](https://grin.cool)

## 使用了哪些技术

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://typescriptlang.org)
- [Prisma](https://prisma.io)
- [Planetscale](https://planetscale.com/)
- React Server Components

## 一个静态页面为什么整这么复杂

单纯只是好奇一些新技术，例如 Prisma、Planetscale 和 React Server Components 的这种从数据库--前端页面有模型数据类型支撑的方案，作为同构项目真的很棒。

## 部署

使用Planetscale作为在线数据库，Vercel用来部署Nextjs项目，Cloudflare做DNS加速，都是免费的方案。唯一就是域名花一点钱。有兴趣的可以参照我的[这篇博客](https://blog.grin.cool/blog/hexo-blog)，只不过把其中的Netlify部分换成Vercel网站的用法就可以了。

## 开发

```bash
pnpm install
pnpm prisma generate
```

修改根目录.env文件的DATABASE_URL

```bash
pnpm db:push
pnpm db:seed
pnpm dev
```
