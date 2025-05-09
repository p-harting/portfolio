export default function Navbar() {
    return (
        <nav className="flex justify-between items-center mt-8">
            <div className="flex-1 flex justify-center">
                <div className="border border-solid border-white rounded-4xl py-4 px-8">
                    <ul className="flex text-white text-xl gap-6">
                        <li>Home</li>
                        <li>Portfolio</li>
                        <li>Über mich</li>
                        <li>Blog</li>
                        <li>Kontakt</li>
                    </ul>
                </div>
            </div>
            <div className="flex text-white border border-solid border-white rounded-4xl py-4 px-8">
                <p>DE</p>
            </div>
        </nav>
    )
}