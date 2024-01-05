"use server";
import { connectToDatabase } from "../database";
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { appValueToLable } from "../utils";

type AppLableType = ReturnType<typeof appValueToLable>;

export const getAllApplicationsByType = (name: AppLableType) => {
  try {
    const prisma = connectToDatabase();
    return prisma.applicationType.findFirst({
      where: {
        name,
      },
      orderBy: {
        name: "desc",
      },
      include: {
        apps: {
          where: {
            active: true,
          },
          orderBy: [
            { sortOrder: "asc" },
            { requireLogin: "desc" },
            { createdAt: "desc" },
          ],
        },
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch applications", { cause: error });
  }
};

export const getApplicationsByPath = async (path: string) => {
  const prisma = connectToDatabase();

  return await prisma.application.findMany({
    where: {
      path,
    },
    include: {
      type: true,
    },
  });
};
