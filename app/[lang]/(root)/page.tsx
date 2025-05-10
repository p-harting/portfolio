import Hero from "@/components/Hero";
import { Locale } from "@/i18n-config";

interface PageProps {
  params: {
    lang: Locale
  }
}

export default function Home({ params }: PageProps)
{
  return (
    <main className="flex justify-center items-center mt-8">
      <Hero params={params} />
    </main>
  );
}
