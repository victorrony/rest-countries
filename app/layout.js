"use client";
import "./globals.css";
import { Providers } from "./theme/provider";

export default function RootLayout({ children }) {
   return (
      <html lang="en" className="dark">
         <body className="mx- ">
            <Providers>
               {" "}
               <main>{children}</main>
            </Providers>
         </body>
      </html>
   );
}
