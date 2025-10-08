import { cn } from '@/utils/cn'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import SplitText from 'gsap/SplitText'
import ScrollTrigger from 'gsap/ScrollTrigger'



import React, { FC, useRef } from 'react'

type HeadingProps = {
    className?: string
    darkColorText: React.ReactNode,
    blueColorText?: string
}
const Heading: FC<HeadingProps> = (props) => {
    const { className, darkColorText, blueColorText } = props
    const pRef = useRef(null)
    gsap.registerPlugin(SplitText, ScrollTrigger)
    useGSAP(() => {
        const text = SplitText.create(pRef.current, {
            type: 'words',
            mask: 'words'
        })
        gsap.from(text.words, {
            y: 100,
            stagger: 0.4,
            ease: 'circ',
            scrollTrigger: {
                trigger: text.words,
                start: 'start 90%',
                end: '+=100',
                scrub: 1
            }
        })
    }, {
        scope: pRef
    })
    return (
        <p ref={pRef} className={cn('font-semibold text-3xl text-netural-black', className)}>{darkColorText} <span className='text-light-blue'>{blueColorText}</span></p>
    )
}

export default Heading