import { GlobalProvider } from "../context/GlobalContext";
import { GlobalContext } from "@/lib/GlobalState";
function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider initialIsMobile={pageProps.initialIsMobile}>
      <Component {...pageProps} />
    </GlobalProvider>
  );
}
