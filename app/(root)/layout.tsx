import "@/app/globals.css"
import Navbar from "@/components/Navbar";
import { hanken } from "@/components/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${hanken.className}`}>
        <header>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
