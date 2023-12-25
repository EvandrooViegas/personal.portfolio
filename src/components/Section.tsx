type Props = {
    children: React.ReactNode
    backgroundClassName?: string
    title?: string
    subtitle?: string
} & React.HTMLAttributes<HTMLElement>

export default function Section(props: Props) {
    const { children, backgroundClassName, className, title, subtitle, ...rest } = props

    const hasText = !!(title || subtitle)
    return (
        <section className={`border-t-2 border-t-neutral-800 min-h-screen max-h-screen  ${backgroundClassName} `}  {...rest} id="scrollbar">
            <div className={`max-app-width  mx-auto p-20  ${hasText ? 'flex flex-col gap-20' : ''} `} >
                {hasText && (
                    <div className="flex flex-col gap-1 border-b border-neutral-500  border-dotted">
                        <span className="text-4xl font-museo font-black">{title}</span>
                        <span className="text-xl text-neutral-400 font-museo">{subtitle}</span>
                    </div>
                )}
                <div className={className} >

                    {children}
                </div>
            </div>
        </section>
    )
}
