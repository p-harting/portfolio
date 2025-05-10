import { useRouter } from 'next/navigation';
import { Locale } from '@/i18n-config';

export default function LanguageSelector({ currentLang }: { currentLang: Locale }) {
  const router = useRouter();

  const switchLanguage = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value as Locale;
    const path = window.location.pathname.split('/').slice(2).join('/');
    document.cookie = `NEXT_LOCALE=${lang}; path=/; max-age=${60 * 60 * 24 * 365}`;
    router.push(`/${lang}/${path}`);
  };

  return (
    <select
      value={currentLang}
      onChange={switchLanguage}
      className="bg-transparent text-white border border-solid border-white rounded-4xl py-4 px-8 appearance-none"
    >
      <option value="en">EN</option>
      <option value="de">DE</option>
    </select>
  );
}
