import type { NextPage } from "next";

declare module "next" {
  export type NextLayoutPage = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
  };
}
