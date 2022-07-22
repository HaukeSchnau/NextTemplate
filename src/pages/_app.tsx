import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextLayoutPage } from "next";
import { DefaultLayout } from "~/components/DefaultLayout";
import { trpc } from "~/utils/trpc";

type AppPropsWithLayout = AppProps & {
  Component: NextLayoutPage;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>);

  return getLayout(<Component {...pageProps} />);
}

export default trpc.withTRPC(MyApp);
