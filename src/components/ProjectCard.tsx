import React, { HTMLAttributes } from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { Project } from '../data';

type Props = {
    project: Project
    small?: boolean
    selected?: boolean
    border?: boolean
} & HTMLAttributes<HTMLDivElement>
export default function ProjectCard(props: Props) {
    const { project, selected, className, border, ...rest } = props
    return (
        <div 
        key={project.name} 
        className={`
        w-full aspect-video
        transition-all flex flex-col 
        ${border || selected ? 'border rounded hover:brightness-150' : ''}
        ${border && !selected ? 'border border-neutral-700' : ''} 
        ${selected ? 'border border-primary' : ''} 
        ${className}
        `}
        {...rest}
        > 
            <div className='relative w-full aspect-video  rounded bg-gradient-to-r from-neutral-600 to-neutral-700'>

                {project.image && (
                    <img src={`/projects/${project.image}`} className="aspect-video h-full object-center object-cover rounded" />
                )}
                <div className='absolute inset-0 bg-black/70 rounded flex justify-center items-center'>
                    <div className='transition-all flex items-center text-3xl hover:text-4xl gap-2 '>
                        {!!(project.website_url) && (
                            <a href={project.website_url} target='_blank'>
                                <span className=' cursor-pointer'>

                                    <FaLink />
                                </span>
                            </a>
                        )}

                        <a href={project.github_url} target='_blank'>

                            <span className=' cursor-pointer '>

                                <FaGithub />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <span className='font-semibold font-mono px-4 py-2'>{project.name}</span>
        </div>
    )
}
