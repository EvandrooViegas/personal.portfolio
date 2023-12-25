import { IoClose, IoMenu } from "react-icons/io5"

type Props = {
    children: React.ReactNode
    backgroundClassName?: string
    title?: string
    subtitle?: string

    menu?: React.ReactNode
    isOpen?: boolean
    open?: () => void
    close?: () => void
} & React.HTMLAttributes<HTMLElement>

export default function Section(props: Props) {
    const { children, backgroundClassName, className, title, subtitle, menu, open, close, isOpen, ...rest } = props
    const hasText = !!(title || subtitle)
    return (
        <section className={`relative border-t-2 border-t-neutral-800 max-w-screen min-h-screen max-h-screen md:overflow-y-hidden  ${backgroundClassName} `}  {...rest} >
            {isOpen && (
                <>
                    <div className="md:hidden absolute right-0 inset-y-0 bg-neutral-900 z-10  p-12 py-24">
                        {menu}
                    </div>

                    <div className="absolute right-6 top-6 z-10 text-3xl" >
                        <button onClick={close} className="transition-all bg-neutral-700 hover:brightness-125 rounded-xl p-1">
                            <IoClose />
                        </button>
                    </div>
               
                </>
            )}
            <div className={`max-app-width  mx-auto p-20  ${hasText ? 'flex flex-col gap-20' : ''} `} >
                {hasText && (
                    <div className="flex flex-col gap-1 text-center md:text-left ">
                        <div className="space-x-2">
                            <span className="text-4xl font-museo font-black">{title}</span>
                            {menu && (
                                <button className="md:hidden inline text-3xl" onClick={open}>
                                    <IoMenu />
                                </button>
                            )}
                        </div>
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
