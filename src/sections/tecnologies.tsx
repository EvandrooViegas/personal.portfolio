import { useState } from "react";
import Section from "../components/Section";
import { Project, Tecnology, data } from '../data'
import ProjectCard from "../components/ProjectCard";
import Animate from "../components/Animate";

const levelMap = new Map<number, string>([
    [1, "Beginner"],
    [2, "Advanced"],
    [3, "Master"],
])
export default function Tecnologies() {
    const [selectedTecn, setSelectedTecn] = useState(data.skills[0].tecnologies[0])
    const [isOpen, setIsOpen] = useState(false)
    const selectTecn = (tecn: Tecnology) => {
        setSelectedTecn(tecn)
        setIsOpen(false)
    }
    return (
        <Section
            menu={<Menu selectedTecn={selectedTecn} setSelectedTecn={selectTecn} />}
            isOpen={isOpen}
            close={() => setIsOpen(false)}
            open={() => setIsOpen(true)}
            title="Tecnologies"
            subtitle="The list of all tecnologies that I've used"
            id="skills"
            backgroundClassName="relative bg-gradient-to-t from-zinc-950 to-zinc-900"
            className="flex gap-12 "
        >

            <div className="hidden md:inline">
                <Menu selectedTecn={selectedTecn} setSelectedTecn={setSelectedTecn} />

            </div>
            <div className="flex flex-col gap-12 w-full">
                <div className="flex flex-col items-center md:flex-row justify-between gap-5">
                    <div className="flex items-center px-5 py-3 w-full justify-between    md:text-5xl text-3xl font-black">
                        <Animate
                            key={selectedTecn.name} animate={{ y: [-25, 0], opacity: [0, 1], transition: { duration: 0.4 } }}
                            className=" flex items-center gap-3"
                        >
                            <span style={{ color: selectedTecn.color }}>{selectedTecn.icon}</span>
                            <span>{selectedTecn.name}</span>
                        </Animate>

                    </div>
                    <Animate key={selectedTecn.name} className="flex items-center gap-4 ">
                        <div className="flex gap-2">
                            {Array(3).fill(1).map((i, idx) => (
                                <div key={i} className={`md:w-12 w-6 md:h-2 h-1 rounded-sm ${idx < selectedTecn.level ? 'bg-primary' : 'bg-neutral-600'}`} />
                            ))}
                        </div>
                        <span>{levelMap.get(selectedTecn.level)}</span>
                    </Animate>
                </div>
                <div className="space-y-2 w-full">
                    <span className="font-bold text-3xl font-mono">Used in: </span>
                    <div className="grid md:grid-cols-3 overflow-y-auto pr-4 max-h-[300px] gap-4" id="scrollbar">
                        {
                            getProjects(selectedTecn.category, selectedTecn.id)
                                .map((pr, idx) =>
                                    <Animate key={`${selectedTecn.name + pr.name}`} animate={{ y: [(50 * idx), 0], opacity: [0, 1], transition: { duration: 1 } }}>
                                        <ProjectCard border project={pr} small />
                                    </Animate>
                                )}
                    </div>
                </div>
            </div>
        </Section>
    )
}

function Menu({
    selectedTecn,
    setSelectedTecn,
}: {
    selectedTecn: Tecnology,
    setSelectedTecn: (t: Tecnology) => void,
}) {
    return (
        <div className={`flex flex-col gap-12  pr-4 max-h-[400px] overflow-y-auto  md:min-w-[400px]`} id="scrollbar">
            {data.skills.map(skill => (
                <div key={skill.category} className="flex flex-col gap-7">
                    <span className="font-semibold">{skill.category}</span>
                    <div className="grid md:grid-cols-3 grid-cols-2 gap-5">
                        {skill.tecnologies.map((tecnology, idx) => (
                            <Animate animate={{ y: [(-5 * idx), 0], opacity: [0, 1], transition: { duration: 0.5 } }}
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
                            </Animate>
                        ))}
                    </div>
                </div>
            ))}
        </div>
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