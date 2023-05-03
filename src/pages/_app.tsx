import { type AppType } from "next/app";

import { api } from "~/utils/api";
import { dark } from '@clerk/themes';

import "~/styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import type { AppProps } from "next/app";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}
    appearance={{
      baseTheme: dark
    }}>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default api.withTRPC(MyApp);
