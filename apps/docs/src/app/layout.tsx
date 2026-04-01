import "@/app/globals.css";
import { SiteNavbar } from "@/components/SiteNavbar";
import { Container } from "@globalise/design-system";
import type { Metadata } from "next";
import { ClientProviders } from "./provider";

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
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700&family=Noto+Serif:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-brand-black text-brand-white min-h-screen font-sans antialiased">
        <ClientProviders>
          <SiteNavbar />
          <main>{children}</main>
          <footer className="bg-brand-black py-8">
            <Container>
              <p className="text-sm text-white/50 font-sans">
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
