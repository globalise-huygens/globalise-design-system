import "@/app/globals.css";
import { SiteNavbar } from "@/components/SiteNavbar";
import { Container } from "@globalise/design-system";
import type { Metadata } from "next";
import { Noto_Sans, Noto_Serif } from "next/font/google";
import { ClientProviders } from "./provider";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Globalise Design System",
  description:
    "Documentation and component library for the Globalise design system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body
        className={`${notoSans.variable} ${notoSerif.variable} bg-brand-black text-brand-white min-h-screen font-sans antialiased`}
      >
        <ClientProviders>
          <SiteNavbar />
          <main>{children}</main>
          <footer className="bg-brand-black py-8">
            <Container>
              <p className="text-sm text-brand-white/50 font-sans">
                &copy; {new Date().getFullYear()} Globalise / Huygens Institute
                / KNAW
              </p>
            </Container>
          </footer>
        </ClientProviders>
      </body>
    </html>
  );
}
