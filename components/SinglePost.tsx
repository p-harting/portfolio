import Link from "next/link"

interface PostProps {
    title: string;
    description: string;
    date: string;
    tags: string[];
    slug: string;
}

export default function SinglePost({ title, description, date, tags, slug }: PostProps) {
    return (
        <Link href={`/blog/${slug}`}>
            <div className="flex flex-col justify-center items-center text-white border border-white w-6/12 rounded-2xl">
                <h2>{title}</h2>
                <p>{description}</p>
                <p>Last updated: {date}</p>
                <div className="flex gap-2">
                    {tags.map((tag, index) => (
                        <div key={index} className="bg-purple-500 rounded-2xl p-2.5">{tag}</div>
                    ))}
                </div>
            </div>
        </Link>
    )
}
