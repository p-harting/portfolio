//import { createClient } from '@/utils/supabase/server';
import { portfolio } from "@/data/portfolio";

export default async function Page() {
    //const supabase = await createClient();
    //const { data } = await supabase.from("projects").select();

    const projects = portfolio?.map(project => {
      return(
        <div key={project.id}>
          <h2 className="text-white">{project.title}</h2>
        </div>
      )
    })

    return (
      <>
        <h1 className="text-8xl text-white">PORTFOLIO</h1>
        {projects}
      </>
    );
  }
  