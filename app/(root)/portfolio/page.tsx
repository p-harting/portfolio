import { createClient } from '@/utils/supabase/server';

export default async function Page() {
    const supabase = await createClient();
    const { data } = await supabase.from("projects").select();
    console.log(data)

    const projects = data?.map(project => {
      return(
        <div key={project.id}>
          <h2 className="text-white">{project.name}</h2>
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
  