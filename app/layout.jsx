import localFont from "next/font/local";
import { Toaster } from "@/components/ui/toaster";
import { GlobalProvider } from "@/lib/GlobalState";
import { ThemeProvider } from "@/lib/ThemeProvider";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "PlanningJs",
  description: "Cree et realiser par CHghosts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <link rel="apple-touch-icon" href="/images/favicon.ico" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <GlobalProvider>
            {children}
            <Toaster />
          </GlobalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
