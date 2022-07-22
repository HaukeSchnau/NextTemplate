// @ts-check
const { env } = require("./src/server/framework/env");

/**
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
function getConfig(config) {
  return config;
}

module.exports = getConfig({
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    NODE_ENV: env.NODE_ENV,
    WS_URL: env.WS_URL,
  },
});
