type Props = {
    section: string
}
export default function CurrentSection(props: Props) {
    const { section } = props
    return (
        <div className="fixed text-4xl left-0 bottom-0 p-10 text-gray-1 font-black z-fg ">
            {section}
        </div>
    )
}