import { GlobalProvider } from "../context/GlobalContext";
import Router from "next/router";
import NProgress from "nprogress";
import "@/public/css/nprogress.css";

NProgress.configure({ showSpinner: false });
export function MyApp({ Component, pageProps }) {
  Router.events.on("routeChangeStart", () => NProgress.start());
  Router.events.on("routeChangeComplete", () => NProgress.done());
  Router.events.on("routeChangeError", () => NProgress.done());
  return (
    <GlobalProvider initialIsMobile={pageProps.initialIsMobile}>
      <Component {...pageProps} />
    </GlobalProvider>
  );
}
