"use client";
import "../../src/styles/scss/_main.scss";
import { Inter } from "next/font/google";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { useState, useEffect } from "react";
import ReactHotToast from "@/components/ReactHotToast";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

// export const metadata = {
//   title: "Frienducation",
//   description: "India’s best tech learning company",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=MuseoModerno:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className={inter.className}>
        <Provider store={store}>
          {children}
          {hasWindow && <ReactHotToast />}
        </Provider>
      </body>
    </html>
  );
}
