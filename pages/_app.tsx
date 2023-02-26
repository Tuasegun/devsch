import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../config/theme";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>SchforDevs</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/assets/ogImage.png" />   
        <meta
      name="description"
      content="SchforDevs for frontend developers"
    />
          </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
