import "@/app/globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <header>
        <Navbar />
      </header>
      <body>
        {children}
      </body>
    </html>
  );
}
