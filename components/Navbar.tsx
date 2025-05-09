import Link from "next/link"

export default function Navbar() {
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
            <div className="flex text-white border border-solid border-white rounded-4xl py-4 px-8">
                <p>DE</p>
            </div>
        </nav>
    )
}