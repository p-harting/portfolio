import Link from "next/link"
import Image from "next/image"

import { projects } from "@/data/projects"
import { GithubIcon, PlayIcon } from "./Icons";
import Project from "./Project";

export default function SelectedProjects() {

    const projectList = projects?.map(project => {
        return (
            project.selected &&
                <Project
                    key={project.id} 
                    title={project.title}
                    title_image={project.title_image}
                    short_description={project.short_description}
                    stack={project.stack}
                    github_link={project.github_link}
                    live_link={project.live_link}
                    allign={project.allign}
                />
        )
    })

    return (
        <div className="text-white mb-8 max-w-6xl p-4">
            <div>
                <h2 className="text-4xl">Selected Projects</h2>
                <Link href="/portfolio">View all →</Link>
            </div>
            <div>
                {projectList}
            </div>
        </div>
    )
}