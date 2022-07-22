// @ts-check
const { z } = require("zod");

module.exports.envSchema = z.object({
  DATABASE_URL: z.string().url(),
  NODE_ENV: z.enum(["development", "test", "production"]),
});
