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
        <section className={`border-t-2 border-t-neutral-800 max-w-screen min-h-screen max-h-screen md:overflow-y-hidden overflow-y-auto ${backgroundClassName} `}  {...rest} id="scrollbar">
            <div className={`max-app-width  mx-auto p-20  ${hasText ? 'flex flex-col gap-20' : ''} `} >
                {hasText && (
                    <div className="flex flex-col gap-1 text-center md:text-left ">
                        <span className="text-4xl font-museo font-black">{title}</span>
                        <span className="md:text-xl text-sm text-neutral-400 font-museo">{subtitle}</span>
                    </div>
                )}
                <div className={className} >

                    {children}
                </div>
            </div>
        </section>
    )
}
