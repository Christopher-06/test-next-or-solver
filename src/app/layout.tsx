"use client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { LocaleContextProvider } from "@/components/LocaleProvider/LocaleProvider";
import NavBar from "@/components/NavBar/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LocaleContextProvider>
          <header>
            {/* MUI Mobile First */}
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
          </header>

          <NavBar />

          {children}
        </LocaleContextProvider>
      </body>
    </html>
  );
}
