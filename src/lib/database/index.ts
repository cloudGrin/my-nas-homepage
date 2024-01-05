import { PrismaClient } from "@prisma/client";
import { env } from "@/env.mjs";

const cached = { conn: undefined } as {
  conn: PrismaClient | undefined;
};

export const connectToDatabase = () => {
  if (cached.conn) return cached.conn;

  cached.conn = new PrismaClient({
    log:
      env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

  return cached.conn;
};
