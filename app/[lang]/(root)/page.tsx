import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";

import { Locale, Dictionary } from "@/i18n-config";
import { getDictionary } from "@/utils/get-dictionary";

export default async function Home({params,}: {params: Promise<{ lang: Locale }>;})
{
  const awaitedParams = await params;
  const dictionary: Dictionary = await getDictionary(awaitedParams.lang);
  
  return (
    <main className="flex flex-col justify-center items-center mt-8">
      <Hero dictionary={dictionary.hero} currentLang={awaitedParams.lang} />
      <TechStack />
    </main>
  );
}
