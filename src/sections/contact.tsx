import React from 'react'
import Section from '../components/Section'
import { TbBrandFiverr } from "react-icons/tb";
import { SiUpwork } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Typewriter } from 'react-simple-typewriter'
import Animate from '../components/Animate';
const icons = [
    { name: "Fiver", url: "fiverr.com/evandro_viegas", icon: <TbBrandFiverr /> },
    { name: "UpWork", url: "https://www.upwork.com/freelancers/~01e890f4e0779c8147", icon: <SiUpwork /> },
    { name: "Github", url: "https://github.com/EvandrooViegas", icon: <FaGithub /> },
    { name: "E-mail", url: "malito:evandrooviegas@gmail.com", icon: <FiMail /> },
]

const features = ["Fast Delivering", "Bugs Free", "SEO Friendly", "100% Responsive", "Lifetime support"]
export default function Contact() {
    return (
        <Section title='Contact' subtitle='Hire me!' backgroundClassName='bg-gradient-to-r from-zinc-900 to-black'>
            <h3 className='text-3xl mb-12 font-black font-mono'>
                Hiring me you'll get:
            </h3>
            <div className='md:grid md:grid-cols-2 flex flex-col gap-5' >
                <div className='text-5xl '>
                    <span className='text-neutral-300'>
                        <Typewriter words={features} loop />

                    </span>
                    <br />
                    <span className='font-black md:text-7xl text-5xl text-primary '>Websites</span>
                </div>
                <div className='flex md:items-center mx-auto mt-12 md:m-0 flex-wrap md:gap-12 gap-4 '>

                    {icons.map((item, idx) => (
                        <Animate element="a" animate={{ y: [(-10 * idx), 0], opacity: [0, 1], transition: { duration: 0.3 * idx } }}  href={item.url} target='_blank' className='group flex flex-col items-center justify-center text-neutral-400' key={idx}>
                            <span className='transition-all group-hover:text-white md:text-8xl text-5xl'>{item.icon}</span>
                            <span className='hidden md:inline text-xl  '>{item.name}</span>
                        </Animate>
                    ))}
                </div>
            </div>
        </Section>
    )
}
