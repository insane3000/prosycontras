import "./globals.css";
import type { Metadata } from "next";
import { motiva300, motiva400, motiva500, motiva700, motiva1000 } from "@/fonts/fontsConfig";

export const metadata: Metadata = {
  title: "PROS & CONTRAS",
  description: "Descubre los pros y contras de lo que sea, usando IA.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8031343129952656"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body
        className={`${motiva1000.variable} ${motiva300.variable} ${motiva400.variable} ${motiva500.variable} ${motiva700.variable}  ${motiva1000.variable}`}
      >
        <main className="main">{children}</main>
      </body>
    </html>
  );
}
