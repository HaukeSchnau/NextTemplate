import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";

export async function createContext(opts: trpcNext.CreateNextContextOptions) {
  return {};
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
