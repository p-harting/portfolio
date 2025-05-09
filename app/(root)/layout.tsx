import "@/app/globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        <header>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
