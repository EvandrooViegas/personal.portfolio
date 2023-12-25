import { useState } from 'react'
import Section from '../components/Section'
import { Project, Tecnology, UsedTecnologies, data } from '../data'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  const [selectedProj, setSelectedProj] = useState<Project>(data.projects[0])
  const [isOpen, setIsOpen] = useState(false)

  const menu = <Menu selectedProj={selectedProj} setSelectedProj={setSelectedProj} />
  return (
    <Section
      menu={menu}
      isOpen={isOpen}
      close={() => setIsOpen(false)}
      open={() => setIsOpen(true)}
      title='Projects'
      subtitle="The list of the best projects that i've made so far"
      id='projects'
      backgroundClassName='bg-neutral-900'
      className=' gap-6 flex'>
      <div className='flex flex-col md:gap-3 gap-10 w-full md:min-w-[900px]'>
        <div className='space-y-2 md:px-7 md:py-4 md:bg-white/10 rounded-xl'>
          <span className='text-xl font-black '>{selectedProj.name}</span>
          <p className='md:text-lg text-neutral-300 font-mono'>{selectedProj.description}</p>
        </div>
        <div className='text-xl'>
          <span >Tec used: </span>
          <div className='flex md:items-center flex-wrap gap-5 text-5xl'>
            {getTecnologies(selectedProj.used_tecnologies).map(tec => (
              <span style={{ color: tec.color }} key={tec.name}>{tec.icon}</span>
            ))}
          </div>
        </div>
      </div>
      <div className='hidden md:flex'>
        {menu}

      </div>
    </Section>
  )
}

function getTecnologies(usedTecnologies: UsedTecnologies[]) {
  const tecnologies = [] as Tecnology[]
  usedTecnologies.forEach(tecnology => {
    const c = data.skills.find(sk => sk.category === tecnology.category)
    tecnology.tecnologies.map(tec => {
      const t = c?.tecnologies.find(t => t.id === tec)
      if (!t) return
      tecnologies.push(t)
    })
  })
  return tecnologies
}

function Menu({
  setSelectedProj,
  selectedProj
}: {
  setSelectedProj: (selectedProj: Project) => void,
  selectedProj: Project
}) {
  return (
    <div className='flex flex-col gap-4'>
      <span className='font-semibold text-xl text-neutral-400 '>My Projects</span>
      <div className='flex flex-col gap-4 overflow-y-auto max-h-[80vh] pr-4' id='scrollbar'>
      {data.projects.map(pr => (
        <ProjectCard
          onClick={() => setSelectedProj(pr)}
          border
          selected={pr.name === selectedProj.name}
          project={pr}
          key={pr.name}
          className='cursor-pointer'
        />
      ))}
    </div>
    </div>
  )
}