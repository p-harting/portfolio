import "@/app/globals.css"
import { hanken } from "@/components/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={hanken.className}>
        {children}
      </body>
    </html>
  );
}
