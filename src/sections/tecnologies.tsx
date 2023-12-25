import { useState } from "react";
import Section from "../components/Section";
import { Project, data } from '../data'
import ProjectCard from "../components/ProjectCard";



const levelMap = new Map<number, string>([
    [1, "Beginner"],
    [2, "Advanced"],
    [3, "Master"],
])
export default function Tecnologies() {
    const [selectedTecn, setSelectedTecn] = useState(data.skills[0].tecnologies[0])
    return (
        <Section
            title="Tecnologies"
            subtitle="The list of all tecnologies that I've used"
            id="skills"
            backgroundClassName="bg-gradient-to-r from-neutral-900 to-neutral-900"
            className="flex md:flex-row flex-col  gap-12 md:justify-start "
        >
            <div className=" flex flex-col gap-12 overflow-y-auto max-h-[400px] min-w-[400px]  " id="scrollbar">
                {data.skills.map(skill => (
                    <div key={skill.category} className="flex flex-col gap-7">
                        <span className="font-semibold">{skill.category}</span>
                        <div className="grid grid-cols-3 gap-5">
                            {skill.tecnologies.map(tecnology => (
                                <div
                                    onClick={() => setSelectedTecn(tecnology)}

                                    className={`rounded-xl transition-all cursor-pointer border border-dashed p-4  flex flex-col items-center justify-center gap-1
                                ${selectedTecn.id === tecnology.id && selectedTecn.category === tecnology.category
                                            ? 'border-white'
                                            : "border-neutral-600"
                                        } `}
                                    key={tecnology.id}
                                >
                                    <span className={`text-[${tecnology.color}]`}>{tecnology.icon}</span>
                                    <span className="font-mono text-sm">{tecnology.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div id="scrollbar" className="w-full flex flex-col justify-between gap-12">
                <div>
                    <div className="flex flex-col md:flex-row justify-between gap-5">
                        <div className="flex items-center gap-3 text-5xl font-black">
                            <span style={{ color: selectedTecn.color }}>{selectedTecn.icon}</span>
                            <span>{selectedTecn.name}</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex gap-2">
                                {Array(3).fill(1).map((i, idx) => (
                                    <div key={i} className={`w-12 h-2 rounded-sm ${idx < selectedTecn.level ? 'bg-primary' : 'bg-neutral-600'}`} />
                                ))}
                            </div>
                            <span>{levelMap.get(selectedTecn.level)}</span>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
                    {
                        getProjects(selectedTecn.category, selectedTecn.id)
                            .map(pr => <ProjectCard project={pr} small />)}
                </div>
            </div>
        </Section>
    )
}
function getProjects(category: string, id: number) {
    const projects = [] as Project[]
    data.projects.forEach((pr) => {
        const sameCat = pr.used_tecnologies.filter(t => t.category === category)
        const hasID = sameCat.some(t => t.tecnologies.includes(id))
        if (hasID) projects.push(pr)
    })
    return projects
}