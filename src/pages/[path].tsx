import { type GetServerSideProps, type NextPage } from "next";
import { prisma } from "~/server/db";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  ctx.res.statusCode = 307;

  let { path } = ctx.params as { path: string };
  const position = path.endsWith("-in")
    ? ((path = path.replace("-in", "")), "in")
    : "out";

  console.log("********", path, position);

  const result = await prisma.application.findFirst({
    where: {
      path,
      typeId: ["in", "out"].indexOf(position) + 1,
    },
  });

  if (result) {
    ctx.res.setHeader("Location", result.url);
    return { props: {} };
  } else if (position === "out") {
    const resultAgain = await prisma.application.findFirst({
      where: {
        path,
        typeId: 1,
      },
    });
    if (resultAgain) {
      ctx.res.setHeader("Location", resultAgain.url);
      return { props: {} };
    }
  }

  ctx.res.setHeader("Location", "/");
  return { props: {} };
};

const Redirect: NextPage = () => {
  return <></>;
};

export default Redirect;
