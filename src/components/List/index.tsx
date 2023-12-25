import { useEffect, useState } from 'react'
import Item from './Item'
import Projects from '../../sections/projects'
import Skills from '../../sections/tecnologies'
import Me from '../../sections/me'
import CurrentSection from '../CurrentSection'


const list = [
  { name: "Me", comp: <Me /> },
  { name: "Skills", comp: <Skills /> },
  { name: "Projects", comp: <Projects /> },
]
export default function List() {
  const [targetItem, setTargetItem] = useState(1)
  const [scrollY, setScrollY] = useState(0)


  const onScroll = () => {
    const ti = Math.floor((window.scrollY + window.innerHeight) / window.innerHeight) + 1
    setScrollY(window.scrollY)
    setTargetItem(ti)
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])
  const currSection = list[targetItem - 2]?.name
  return (
    <>
      <CurrentSection section={currSection} />
      {list.map((item, index) => (
        <Item key={index} i={index} scrollY={scrollY} targetItem={targetItem} >
          {item.comp}
        </Item>
      ))}
      {list.map(() => (
        <div className='h-screen' />
      ))}
    </>
  )
}
