import React from 'react'
import {Cursor, useTypewriter} from "react-simple-typewriter"
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'
type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ["Frontend Developer💻", "Poker Player🃏", "Dog Lover🐶"],
        loop: true,
        delaySpeed: 2000
    })
  return (
    <div className = "h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles/>
        <img 
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFtc3RlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
        alt ="hamster"/>
        <div className = "z-20">
            <h2 className = "text-sm uppercase text-white pb-2 tracking-[15px]">Software Engineer</h2>
        
        <h1 className = "text-5xl lg:text-6xl font-semibold px-10">
        <span className = "mr-3">{text}</span>
        <Cursor cursorColor = 'white'/>
        </h1>
        <div className = "pt-5">
            <Link href = "#about">
            <button className ="heroButton">About</button>
            </Link>
            <Link href="#experience">
            <button className ="heroButton">Experience</button>
            </Link>
            <Link href= "#skills">
            <button className ="heroButton">Skills</button>
            </Link>
            <Link href= "#projects">
            <button className ="heroButton">Projects</button>
            </Link>
        </div>
        </div>
    </div>
  )
}