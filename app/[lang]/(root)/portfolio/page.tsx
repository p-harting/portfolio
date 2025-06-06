import { projects } from "@/data/projects"
import Project from "@/components/Project"

export default async function Page() {

    const projectList = projects?.map(project => {
      return(
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
      <>
        <h1 className="text-8xl text-white">PORTFOLIO</h1>
        {projectList}
      </>
    );
  }
  