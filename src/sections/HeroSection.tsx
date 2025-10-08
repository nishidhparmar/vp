"use client"
import Container from '@/components/Container'
import { useGSAP } from '@gsap/react'
import Image from 'next/image'
import gsap from 'gsap'
import SplitText from 'gsap/SplitText'
import ScrollTrigger from 'gsap/ScrollTrigger'



import React, { useRef } from 'react'
import { SlCalender } from 'react-icons/sl'
import Button from '@/components/Button'

const HeroSection = () => {
    const containerRef = useRef(null)
    gsap.registerPlugin(SplitText, ScrollTrigger)

    useGSAP(() => {

        const textT1 = SplitText.create('.t1', {
            type: 'lines',
            mask: 'lines'
        })

        const textT2 = SplitText.create('.t2', {
            type: 'words',
            mask: 'words'
        })

        const textT3 = SplitText.create('.t3', {
            type: 'lines',
            mask: 'lines'
        })
        const t1 = gsap.timeline({ delay: 4 })

        t1.from(textT1.lines, {
            x: -200,
            ease: 'power4',
            duration: 0.6,
            color: 'white',
            filter: 'blur(5px)'
        })
        t1.from(textT2.words, {
            y: 100,
            stagger: 0.4,
            ease: 'circ',
            duration: 0.6,
            filter: 'blur(5px)'

        })
        t1.from(textT3.lines, {
            y: 100,
            opacity: 0,
            filter: 'blur(10px)',
            stagger: 0.6,
            ease: 'circ',
            duration: 0.6
        })
        t1.from('.btn', {
            opacity: 0,
            y: 50,
            ease: 'circ',
            duration: 1
        })
        t1.from('.hero-image', {
            opacity: 0,
            // yPercent: -100,
            filter: 'grayscale(1) blur(10px)',
            duration: 1,
            ease: 'back.out'
        })

        gsap.to('.parallex', {
            y: 100,
            duration: 1,
            scrollTrigger: {
                trigger: containerRef.current,
                scrub: 1,
                start: '90% 80%',
                end: '+=300'
            }
        })


    }, {
        scope: containerRef
    })

    return (
        <div ref={containerRef} style={{
            background: "radial-gradient(circle at 50% 50%,#086f79, #05606b, rgba(2,81,92,1))"
        }} id='home'>

            <Container className='min-h-screen w-full flex gap-10'>

                <div className='w-1/2 flex flex-col gap-4 justify-center parallex'>
                    <p className='text-light-blue font-semibold text-xl t1'># Your Tax Consultants</p>
                    <p className='text-netural-white font-semibold lg:space-y-0 space-y-4 text-5xl uppercase mt-2 t2'>Experienced Exceptional</p>
                    <p className='text-netural-white font-semibold lg:space-y-0 space-y-4 text-5xl uppercase t2'>Accounting Services</p>
                    <p className='text-netural-white/90 font-normal t3 leading-[25px]'>Unlock Your Potential with Personalized Accounting Solutions from Pinnacle Accounting & Tax Consultants</p>
                    <Button className='mt-10' icon={<SlCalender className='text-netural-black text-xl ' />}>Book Appointment</Button>
                </div>
                <div className='w-1/2  flex items-center justify-center hero-image parallex'>
                    <Image src={'/images/hero.jpg'} width={1000} height={1000} alt='hero' className='rounded-b-lg drop-shadow-xl h-screen object-cover bg-top' />
                </div>
            </Container >
        </div>

    )
}

export default HeroSection