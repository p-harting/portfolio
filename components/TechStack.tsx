import { techstack } from "@/app/[lang]/(root)/techstack";
import { JavaScriptIcon, PythonIcon } from "./Icons";

export default function TechStack() {

    const iconComponents: Record<string, React.FC> = {
        JavaScript: JavaScriptIcon,
        Python: PythonIcon,
    };


    const techStackList = techstack.map((tech) => {
        const Icon = iconComponents[tech.icon];
        return (
            <div key={tech.name} className="flex flex-row">
                <div className="flex">
                    {Icon && <Icon />}
                    <p className="text-white">{tech.name}</p>
                </div>
            </div>
        )
    })

    return (
        <div>
            <h2 className="text-white text-4xl">Tech Stack</h2>
            {techStackList}
        </div>
    )
}