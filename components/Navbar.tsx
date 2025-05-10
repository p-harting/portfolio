"use client";

import Link from "next/link"
import { useParams } from "next/navigation"
import { Locale } from "@/i18n-config"
import LanguageSelector from "./LanguageSelector"

export default function Navbar() {
  const params = useParams()
  const currentLang = params?.lang as Locale || 'de'
    return (
        <nav className="flex justify-between items-center mt-8">
            <div className="flex-1 flex justify-center">
                <div className="border border-solid border-white rounded-4xl py-4 px-8">
                    <ul className="flex text-white text-xl gap-6">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                            <Link href="/ueber-mich">Über mich</Link>
                        </li>
                        <li>
                            <Link href="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link href="/kontakt">Kontakt</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <LanguageSelector currentLang={currentLang} />
        </nav>
    )
}
