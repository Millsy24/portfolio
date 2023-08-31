import React from 'react'
import {motion} from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { Experience } from '../typings'


type Props = {
    experiences: Experience[]
}

export default function Experience({experiences}: Props) {
  return (
    <motion.div 
    initial={{
        opacity:0
    }}
    whileInView={{
        opacity:1
    }}
    transition={{
        duration: 1.5
    }}
    className = "flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 h-screen justify-evenly mx-auto items-center">
        <h3 className = "absolute top-14 uppercase tracking-[20px] text-2xl text-white">Experience</h3>
        <div className='w-full flex space-x-5 overflow-x-scroll pt-20 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#2272FF]'>
        {experiences?.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
        </div>

    </motion.div>
  )
}