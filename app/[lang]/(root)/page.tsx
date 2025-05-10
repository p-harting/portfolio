import Hero from "@/components/Hero";
import { Locale } from "@/i18n-config";

export default async function Home({
  params,
}: {
  params: { lang: Locale };
}) {
  return (
    <main className="flex justify-center items-center mt-8">
      <Hero params={params} />
    </main>
  );
}
