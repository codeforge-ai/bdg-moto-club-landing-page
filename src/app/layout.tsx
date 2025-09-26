import { Navigation } from "@/shared/components/navigation";
import { Toaster } from "@/shared/components/ui/sonner";

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className={`antialiased`}>
        <Navigation />
        <Toaster />

        <main>{children}</main>
      </body>
    </html>
  );
}
