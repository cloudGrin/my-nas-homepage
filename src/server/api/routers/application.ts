// import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const applicationRouter = createTRPCRouter({
  hello: publicProcedure
    // .input(z.object({ text: z.string() }))
    .query(({ input: _input }) => {
      return {
        greeting: `Hello`,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.applicationType.findMany({
      orderBy: {
        name: "desc",
      },
      include: {
        apps: {
          orderBy: [
            {
              sortOrder: "asc",
            },
            {
              requireLogin: "desc",
            },
            {
              createdAt: "desc",
            },
          ],
        },
      },
    });
  }),
});
