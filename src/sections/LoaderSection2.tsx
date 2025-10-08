"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import SplitText from 'gsap/SplitText'
import React, { useRef } from 'react'


const LoaderSection2 = () => {
    gsap.registerPlugin(SplitText)
    const containerRef = useRef(null)
    useGSAP(() => {
        const text = SplitText.create('.text', {
            type: 'words',
            mask: 'words',
            wordsClass: 'w++'
        })
        const t1 = gsap.timeline()

        t1.from(['.w1', '.w3'], {
            y: 100,
            stagger: 0.2,
            duration: 0.5
        })
        t1.from('.w2', {
            y: 100,
            duration: 1
        })
        t1.to(text.words, {
            color: 'black',
            stagger: 0.2,
            ease: 'back',
            duration: 1
        })
        t1.to('.text', {
            display: 'none'
        })
        t1.to('.s1', {
            duration: 1,
            yPercent: -100,
            ease: 'expo'
        })
        t1.to('.s2', {
            duration: 1,
            yPercent: 100,
            ease: 'expo'
        }, "<")
        t1.set(containerRef.current, {
            display: 'none'
        })
    }, {
        scope: containerRef
    })
    return (
        <div ref={containerRef} className='fixed w-screen flex flex-col justify-center z-20 h-screen overflow-hidden'>
            <div className='h-[50vh] w-full s1 bg-white/10 backdrop-blur-xl'>
            </div>
            <p className='bg-netural-white text-dark-blue text-[80px] text-center text font-semibold backdrop-blur-2xl'>VATSAL & PARTNER</p>
            <div className='h-[50vh] w-full s2 bg-white/10 backdrop-blur-xl'>
            </div>
        </div>
    )
}

export default LoaderSection2