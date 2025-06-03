"use client"

import { techstack } from "@/app/[lang]/(root)/techstack";
import { JavaScriptIcon, PythonIcon, ReactIcon, NextJsIcon, DjangoIcon } from "./Icons";
import { useState } from "react";

export default function TechStack() {

    const [open, setOpen] = useState(false)

    const iconComponents: Record<string, React.FC> = {
        JavaScript: JavaScriptIcon,
        Python: PythonIcon,
        React: ReactIcon,
        NextJs: NextJsIcon,
        Django: DjangoIcon,
    };

    const techStackList = techstack.map((tech) => {
        const Icon = iconComponents[tech.icon];
        return  (
            <div key={tech.name} className="flex items-center gap-2 p-2 border border-white rounded-2xl w-fit">
                {Icon && <Icon />}
                <p className="text-white">{tech.name}</p>
            </div>
        )
    })

    return (
        <div>
            <h2 className="text-white text-4xl">Tech Stack</h2>
            <div className="flex gap-1">
                {open ? techStackList : techStackList.slice(0, 5)}
            </div>
            <div className="text-white text-1xl" onClick={() => setOpen(prev => !prev)}>{open ? "stack verstecken →" : "...kompletten stack anzeigen →"}</div>
        </div>
    )
}