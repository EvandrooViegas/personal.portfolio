import React, { useEffect, useState } from 'react'
import Item from './Item'

type Props = {
    list: React.ReactNode[]
}
export default function List(props: Props) {
  const { list } = props
  const [targetItem, setTargetItem] = useState(1)
  const [scrollY, setScrollY] = useState(0) 
  

  const onScroll = () => {
    const ti = Math.floor((window.scrollY + window.innerHeight) / window.innerHeight) + 1
    setScrollY(window.scrollY)
    setTargetItem(ti )
}
  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
}, [])
// console.log(targetItem)
    return (
    <>
    {list.map((item, index) => (
        <Item key={index} i={index} scrollY={scrollY} targetItem={targetItem} >
            {item}
        </Item>
    ))}
    {list.map(() => (
        <div className='h-screen' />
    ))}
    </>
  )
}
