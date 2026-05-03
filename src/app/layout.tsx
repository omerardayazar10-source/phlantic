import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Phlantic — Operasyonel yükten karlılığa.",
  description:
    "Phlantic, n8n ve yapay zeka altyapısıyla işletmenizin manuel operasyonel yükünü kaldırır; zaman kaybını ve maliyetleri minimuma indirerek kar marjını yukarı çeker.",
  metadataBase: new URL("https://phlantic.com"),
  openGraph: {
    title: "Phlantic — Operasyonel yükten karlılığa.",
    description:
      "Yapay zeka, n8n ve özel sistemlerle işletme verimliliğini artıran teknoloji ajansı.",
    type: "website",
    locale: "tr_TR",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#f9f9f9",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      className={`${display.variable} ${body.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,300..700,0..1,-25..200&display=swap"
        />
      </head>
      <body className="chatbot-safe-area">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
