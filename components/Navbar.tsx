"use client";

import Link from "next/link"
import { useParams } from "next/navigation"
import { Locale, Dictionary } from "@/i18n-config"
import LanguageSelector from "./LanguageSelector"

export default function Navbar({ dictionary }: { dictionary: Dictionary["navbar"] }) {
  const params = useParams()
  const currentLang = params?.lang as Locale || 'de'
    return (
        <nav className="flex justify-between items-center mt-8">
            <div className="flex-1 flex justify-center">
                <div className="border border-solid border-white rounded-4xl py-4 px-8">
                    <ul className="flex text-white text-xl gap-6">
                        <li>
                            <Link href="/">{dictionary.home}</Link>
                        </li>
                        <li>
                            <Link href="/portfolio">{dictionary.portfolio}</Link>
                        </li>
                        <li>
                            <Link href="/ueber-mich">{dictionary.about}</Link>
                        </li>
                        <li>
                            <Link href="/blog">{dictionary.blog}</Link>
                        </li>
                        <li>
                            <Link href="/kontakt">{dictionary.contact}</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <LanguageSelector currentLang={currentLang} />
        </nav>
    )
}
