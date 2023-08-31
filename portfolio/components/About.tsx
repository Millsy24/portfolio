import React from 'react'
import {motion} from 'framer-motion'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'


type Props = {
    pageInfo : PageInfo
}

export default function About({pageInfo}: Props) {
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
    
    className = "flex relative flex-col h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className = "absolute top-24 uppercase tracking-[20px] text-2xl text-white">About</h3>

        <motion.img
        initial = {{
            x:-200,
            opacity: 0,
            
        }}
        transition={{
            duration: 1.2
        }}
        whileInView = {{
            x: 0,
            opacity: 1
        }}
        viewport = {{
            once: true
        }}
        src={urlFor(pageInfo.profilePic).url()}
        className = "-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:h-[600px] xl:w-[500px]"
        />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className = "text-4xl font-semibold"><span className='text-[#2272FF]'>My </span> <span className='text-white underline decoration-[#2272FF] animate-pulse'>Background</span></h4>
            <p className = "text-white text-base">{pageInfo.backgroundInformation}</p>
        </div>
    </motion.div>
  )
}