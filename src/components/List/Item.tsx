import React, {  useMemo } from 'react'

type Props = {
    i: number
    targetItem: number
scrollY: number
    children: React.ReactNode
}
export default function Item(props: Props) {
  const { i, children, scrollY, targetItem } = props;

  const index = i + 1;
  const top = useMemo(() => {
    return index === 1 ? 0 : (
        index === targetItem 
        ? (window.innerHeight * (index - 1)) - scrollY
        : index > targetItem 
          ? window.innerHeight * index 
          : 0
    )
  }, [index, scrollY, targetItem])

    return (
    <div style={{
        position: "fixed",
        left: 0,
        right: 0,
        zIndex: index,
        top: top,
        bottom: 0,
    }}>{children}</div>
  )
}
