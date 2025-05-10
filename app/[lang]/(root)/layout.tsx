import "@/app/globals.css"
import Navbar from "@/components/Navbar";
import { hanken } from "@/components/fonts";
import { i18n, type Locale } from "@/i18n-config";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout (props: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;})
{
  const params = await props.params;
  const { children } = props;
  
  return (
    <html lang={params.lang}>
      <body className={`${hanken.className}`}>
        <header>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
