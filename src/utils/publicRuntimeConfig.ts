/**
 * Dynamic configuration available for the browser and server populated from your `next.config.js`.
 * Note: requires `ssr: true` or a `getInitialProps` in `_app.tsx`
 * @link https://nextjs.org/docs/api-reference/next.config.js/runtime-configuration
 */
import type * as config from "../../next.config";
import getConfig from "next/config";

type PublicRuntimeConfig = typeof config.publicRuntimeConfig;

const nextConfig = getConfig();

export const publicRuntimeConfig =
  nextConfig.publicRuntimeConfig as PublicRuntimeConfig;
