// import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const applicationRouter = createTRPCRouter({
  hello: publicProcedure
    // .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello`,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.application.findMany()
  }),
});
