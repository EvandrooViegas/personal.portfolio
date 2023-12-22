import { useEffect, useState } from "react"
export default function Cursor() {
    const [pos, setPos] = useState({ x: 0, y: 0 })
    const [size, setSize] = useState(10)
    const onMouseMove = (e: MouseEvent) => {
        setPos({
            x: e.pageX,
            y: e.pageY,
        })
    }

    const onClick = () => {
        setSize(20)
        setTimeout(() => {
            setSize(10)
        }, 100)
    } 
    useEffect(() => {
        window.addEventListener("mousemove", onMouseMove)
        window.addEventListener("click", onClick)
        return () => {
            window.removeEventListener("mousemove", onMouseMove)
            window.removeEventListener("click", onClick)
        }
    }, [])
    return (
        <div 
        className="z-cursor absolute rounded-full bg-white " 
        style={{ left: pos.x , top: pos.y, width: size + "px", height: size + "px", "transition": "width 100ms, height 100ms" }} 
        />
    )
}