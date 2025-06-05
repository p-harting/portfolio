import Link from "next/link"
import Image from "next/image"

import { portfolio } from "@/data/portfolio"

export default function SelectedProjects() {

    const selectedProjects =  portfolio.map(project => {
        return (
            <div key={project.id} className={`flex ${project.allign === "right" ? "flex-row" : "flex-row-reverse"}`}>
                <div>
                    <Image src={`/portfolio/${project.title_image}`} alt={project.title} width={1800} height={760}/>
                </div>
                <div>
                    <h3>{project.title}</h3>
                    <p>{project.short_description}</p>
                    <p>Built with:</p>
                    <div className="flex">
                        {project.stack.map(language => {
                            return <div className="bg-purple-500 rounded-xl p-1 mr-1" key={language}>{language}</div>
                        })}
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="text-white mb-8 max-w-6xl p-4">
            <div>
                <h2 className="text-4xl">Selected Projects</h2>
                <Link href="/portfolio">View all</Link>
            </div>
            <div>
                {selectedProjects}
            </div>
        </div>
    )
}