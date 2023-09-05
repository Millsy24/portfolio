import { motion } from 'framer-motion'
import React from 'react'
import { Experience } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    experience: Experience
}

export default function ExperienceCard({experience}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-slate-400/10 p-10  cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
        initial = {{
            y: -100, 
            opacity: 0
        }}
        transition = {{
            duration: 1.2
        }}
        whileInView={{
            opacity: 1, y: 0
        }}
        viewport={{
            once: true
        }}
        className = "w-20 h- rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src = {urlFor(experience?.companyImage).url()}
        alt= ""
        />

        <div className = "px-0 md:px-10">
            <h4 className = "text-4xl font-light">{experience.jobTitle}</h4>
            <p className='font-bold text-2xl mt-1 text-white'>{experience.company}</p>
            <div className = "flex space-x-2 my-2">
                {experience.technologies?.map((technology) => (
                    <img 
                    key={technology._id}
                    className = "h-10 w-10 founded-full"
                    src={urlFor(technology.image).url()}
                    />
                ))}
                {/*Tech Stack Used*/}
            </div>
            <p className='uppercase py-5'>{new Date(experience.dateStarted).toDateString()} - {experience.isCurrentlyWorkingHere ? "present" : new Date(experience.dateEnded).toDateString()}</p>

            <ul className = "list-disc space-y-4 ml-5 text-lg text-white">
            {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
            ))}
                
                
            </ul>
        </div>
    </article>
  )
}