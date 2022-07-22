import { appRouter } from "../routers/_app";
import { prisma } from "./prisma";

export const caller = appRouter.createCaller({
  prisma: prisma,
});
