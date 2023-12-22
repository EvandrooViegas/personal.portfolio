import useCurrentSection from "../store/useCurrentSection"

export default function CurrentSection() {
    const { currentSection, getCurrentSectionName } =  useCurrentSection()
    return (
        <div className="fixed text-4xl left-0 bottom-0 p-10 text-gray-1 font-black ">
            {getCurrentSectionName(currentSection)}
        </div>
    )
}