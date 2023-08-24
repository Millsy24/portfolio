import React from 'react'
import {Cursor, useTypewriter} from "react-simple-typewriter"
import BackgroundCircles from './BackgroundCircles'

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ["Aspiring Frontend Developer💻 ", "Poker player🃏", "Dog Lover🐶"],
        loop: true,
        delaySpeed: 2000
    })
  return (
    <div className = "h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles/>
        <img src="https://imgur.com/a/YI6poE2" alt="me"/>
        <h1>
        <span>{text}</span>
        <Cursor cursorColor = 'white'/>
        </h1>
    </div>
  )
}