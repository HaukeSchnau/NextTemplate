import { Context } from "../context";
import * as trpc from "@trpc/server";
import superjson from "superjson";

export const t = trpc.initTRPC<{ ctx: Context }>()({
  transformer: superjson,
});
