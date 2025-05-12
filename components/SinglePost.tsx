import Link from "next/link"

export default function SinglePost() {
    return (
        <Link href="/blog/hello-world">
            <div className="flex flex-col justify-center items-center text-white border border-white w-6/12 rounded-2xl">
                <h2>This is the title of the blogpost</h2>
                <p>This is the description...</p>
                <p>Last updated: 01.01.2025</p>
                <div className="flex gap-2">
                    <div className="bg-purple-500 rounded-2xl p-2.5">JavaScript</div>
                    <div className="bg-purple-500 rounded-2xl p-2.5">Coding</div>
                </div>
            </div>
        </Link>
    )
}