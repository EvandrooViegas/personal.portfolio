import { useState } from 'react'
import Section from '../components/Section'
import { Tecnology, UsedTecnologies, data } from '../data'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  const [selectedProj, setSelectedProj] = useState(data.projects[0])
  return (
    <Section
      title='Projects'
      subtitle="The list of the best projects that i've made so far"
      id='projects'
      backgroundClassName='bg-neutral-900'
      className=' gap-6 grid grid-cols-[3fr_1fr]'>
      <div className='flex flex-col gap-3'>
        <span className='text-xl font-black'>{selectedProj.name}</span>
      {selectedProj.image && (
        <img src={`/projects/${selectedProj.image}`} className='w-full h-[400px] rounded-xl object-cover' />

      )}
        <p className='text-lg text-neutral-300 font-mono'>{selectedProj.description}</p>
        <div className='text-xl'>
          <span >Tec used: </span>
          <div className='flex items-center gap-5 text-5xl'>
            {getTecnologies(selectedProj.used_tecnologies).map(tec => (
              <span style={{ color: tec.color }} key={tec.name}>{tec.icon}</span>
            ))}
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-4 overflow-y-auto max-h-[80vh]' id='scrollbar'>
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
    </Section>
  )
}

function getTecnologies(usedTecnologies: UsedTecnologies[]) {
  const tecnologies = [] as Tecnology[]
  usedTecnologies.forEach(tecnology => {
    const c = data.skills.find(sk => sk.category === tecnology.category)
    tecnology.tecnologies.map(tec => {
      const t = c?.tecnologies.find(t => t.id === tec)
      if(!t) return 
      tecnologies.push(t) 
    })
  })
  return tecnologies
}