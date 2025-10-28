"use client"
import Container from '@/components/Container'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import SplitText from 'gsap/SplitText'
import ScrollTrigger from 'gsap/ScrollTrigger'



import React, { useRef } from 'react'
import { SlCalender } from 'react-icons/sl'
import Button from '@/components/Button'
import { FaPhoneVolume } from 'react-icons/fa6'
import Link from 'next/link'

const HeroSection2 = () => {
    const containerRef = useRef(null)
    gsap.registerPlugin(SplitText, ScrollTrigger)

    useGSAP(() => {

        const textT1 = SplitText.create('.t1', {
            type: 'lines',
            mask: 'lines'
        })

        const textT2 = SplitText.create('.t2', {
            type: 'lines',
            mask: 'lines'
        })

        const textT3 = SplitText.create('.t3', {
            type: 'lines',
            mask: 'lines'
        })
        const t1 = gsap.timeline({ delay: 5 })

        t1.from(textT1.lines, {
            x: -200,
            ease: 'power4',
            duration: 0.6,
            color: 'white',
            filter: 'blur(5px)'
        })
        t1.from(textT2.lines, {
            yPercent: 100,
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

        gsap.to('.t2', {
            xPercent: -50,
            color: '#29c0be',
            duration: 6,
            scrollTrigger: {
                trigger: containerRef.current,
                pin: containerRef.current,
                scrub: 1,
            }
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
        <div
            ref={containerRef}
            id="home"
            className="overflow-hidden relative min-h-screen"
        // style={{
        //     background: "radial-gradient(circle at 50% 50%,#086f79, #05606b, rgba(2,81,92,1))",
        // }}
        >
            {/* Background Video */}
            <video
                muted
                loop
                autoPlay
                playsInline
                className="absolute inset-0 w-full h-full object-cover -z-10 brightness-50"
                src="/videos/hero.mp4"
            />

            <Container className="min-h-screen w-full z-10 gap-10 flex items-center">
                <div className="w-full pt-[15vh] parallex">
                    <p className="text-light-blue font-semibold text-2xl t1"># Your Tax Consultants</p>
                    <p className="text-netural-white font-semibold lg:space-y-0 text-[200px] text-nowrap uppercase t2 leading-[200px] inline-block">
                        {/* Experienced Exceptional Accounting Services */}
                        Experienced Exceptional

                    </p>
                    <p className="text-netural-white font-normal t3 text-xl leading-[25px]">
                        Unlock Your Potential with Personalized Accounting Solutions from Pinnacle Accounting & Tax Consultants
                    </p>
                    <div className='flex items-center gap-4'>
                        <Link target='_blank' href={'https://calendly.com/pinnacle-accounting'}>
                            <Button className="mt-10" icon={<SlCalender className="text-xl" />}>
                                Book Appointment
                            </Button>
                        </Link>
                        <Link target='_blank' href={'tel:+1 416-606-0079'}>
                            <Button variant='transparent' className='mt-10 border-light-blue border-[1px] text-netural-white' icon={<FaPhoneVolume className='text-netural-white text-xl ' />}>
                                +1 416-606-0079
                            </Button>

                        </Link>

                    </div>
                </div>
            </Container>
        </div>


    )
}

export default HeroSection2