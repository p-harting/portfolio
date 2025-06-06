import Image from "next/image";
import { GithubIcon, PlayIcon } from "./Icons";

interface ProjectProps {
    title: string;
    title_image: string;
    allign: string;
    short_description: string;
    stack: Array<string>;
    github_link: string;
    live_link: string;
}

const iconComponents: Record<string, React.FC> = {
    Github: GithubIcon,
    Play: PlayIcon,
};

export default function Project({ title, title_image, short_description, stack, github_link, live_link, allign }: ProjectProps) {
    return (
        <div className={`flex ${allign === "right" ? "flex-row" : "flex-row-reverse"} text-white mb-8 max-w-6xl p-4`}>
            <div>
                <Image src={`/portfolio/${title_image}`} alt={title} width={1800} height={760}/>
            </div>
            <div>
                <h3 className="text-2xl">{title}</h3>
                <p>{short_description}</p>
                <p>Built with:</p>
                <div className="flex">
                    {stack.map(language => {
                        return <div className="bg-purple-500 rounded-xl p-1 mr-1" key={language}>{language}</div>
                    })}
            </div>
            <div className="flex flex-col items-start gap-2">
                {github_link != "" && (
                    <div className="flex items-center border border-white rounded-xl px-4 py-2 hover:bg-white/10 transition-colors">
                        <GithubIcon />
                        <a href={github_link}>View on Github</a>
                    </div>
                )}
                {live_link != "" && (
                    <div className="flex items-center border border-white rounded-xl px-4 py-2 hover:bg-white/10 transition-colors">
                        <PlayIcon />
                        <a href={live_link}>View Live</a>
                    </div>
                )}
                    </div>
                </div>
            </div>
        )
}