import useCurrentSection, { ISectionID } from "../store/useCurrentSection"
import { useEffect, useMemo } from "react"
import getSectionID from "../utils/get-section-id"
type Props = {
    children: React.ReactNode
    id: ISectionID;
    backgroundClassName?: string
} & React.HTMLAttributes<HTMLElement>

export default function Section(props: Props) {
    const { children, id, backgroundClassName, className, ...rest } = props
    const sectionID = useMemo(() => getSectionID(id), [id])
    const { setCurrentSection } = useCurrentSection()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && entry.target.id === sectionID) {
                    setCurrentSection(id)
                }
            })
        })
        const el = document.getElementById(sectionID)
        if (el) observer.observe(el)

        return () => {
            observer.disconnect()
            observer.unobserve(el!)
        }
    }, [id, sectionID])
    return (
        <section  className={` h-screen ${backgroundClassName} `} id={sectionID} {...rest}>
            <div className={` max-app-width mx-auto  h-full px-20 ${className}`}>
                {children}
            </div>
        </section>
    )
}
