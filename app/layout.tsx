import type { Metadata } from "next";
import "./globals.css";
import { ClientProviders } from "../components/ClientProviders";
import Header from '../components/header'
import Footer from '../components/footer'

export const metadata: Metadata = {
  title: "Numera",
  description: "Track and analyze your finance and numbers - no effort",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen antialiased dark`}>
        <ClientProviders>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto py-12 px-4">
              {children}
            </main>
            <Footer />
          </div>
        </ClientProviders>
      </body>
    </html>
  );
}
