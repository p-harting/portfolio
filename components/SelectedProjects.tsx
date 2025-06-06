import Link from "next/link"
import Image from "next/image"

import { portfolio } from "@/data/portfolio"
import { GithubIcon, PlayIcon } from "./Icons";

export default function SelectedProjects() {

    const iconComponents: Record<string, React.FC> = {
        Github: GithubIcon,
        Play: PlayIcon,
    };

    const selectedProjects = portfolio.map(project => {
        return (
            <div key={project.id} className={`flex ${project.allign === "right" ? "flex-row" : "flex-row-reverse"}`}>
                <div>
                    <Image src={`/portfolio/${project.title_image}`} alt={project.title} width={1800} height={760}/>
                </div>
                <div>
                    <h3 className="text-2xl">{project.title}</h3>
                    <p>{project.short_description}</p>
                    <p>Built with:</p>
                    <div className="flex">
                        {project.stack.map(language => {
                            return <div className="bg-purple-500 rounded-xl p-1 mr-1" key={language}>{language}</div>
                        })}
                    </div>
                    <div className="flex flex-col items-start gap-2">
                        {project.github_link != "" && (
                            <div className="flex items-center border border-white rounded-xl px-4 py-2 hover:bg-white/10 transition-colors">
                                <GithubIcon />
                                <a href={project.github_link}>View on Github</a>
                            </div>
                            )}
                        {project.live_link != "" && (
                            <div className="flex items-center border border-white rounded-xl px-4 py-2 hover:bg-white/10 transition-colors">
                                <PlayIcon />
                                <a href={project.live_link}>View Live</a>
                            </div>
                            )}
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="text-white mb-8 max-w-6xl p-4">
            <div>
                <h2 className="text-4xl">Selected Projects</h2>
                <Link href="/portfolio">View all →</Link>
            </div>
            <div>
                {selectedProjects}
            </div>
        </div>
    )
}