"use client"

import React, { useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import SplitText from 'gsap/SplitText'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Container from '@/components/Container'
import Button from '@/components/Button'
import { SlCalender } from 'react-icons/sl'
import { FaPhoneVolume } from 'react-icons/fa6'

const HeroSection2: React.FC = () => {
    const containerRef = useRef<HTMLDivElement | null>(null)
    gsap.registerPlugin(SplitText, ScrollTrigger)

    useGSAP(() => {
        const textT1 = SplitText.create('.t1', { type: 'lines', mask: 'lines' })
        const textT2 = SplitText.create('.t2', { type: 'lines', mask: 'lines' })
        const textT3 = SplitText.create('.t3', { type: 'lines', mask: 'lines' })

        const t1 = gsap.timeline({ delay: 7 })

        t1.from(textT1.lines, {
            x: -200,
            ease: 'power4',
            duration: 0.6,
            color: 'white',
            filter: 'blur(5px)',
        })
            .from(textT2.lines, {
                yPercent: 100,
                stagger: 0.4,
                ease: 'circ',
                duration: 0.6,
                filter: 'blur(5px)',
            })
            .from(textT3.lines, {
                y: 100,
                opacity: 0,
                filter: 'blur(10px)',
                stagger: 0.6,
                ease: 'circ',
                duration: 0.6,
            })
            .from('.btn', {
                opacity: 0,
                y: 50,
                ease: 'circ',
                duration: 1,
            })

        // Horizontal scroll-based text movement
        const scrollContainer = containerRef.current?.querySelector<HTMLDivElement>('.scroll-text')
        if (scrollContainer) {
            ScrollTrigger.create({
                trigger: containerRef.current!,
                pin: true,
                scrub: 2,
                onUpdate: (self) => {
                    const totalWidth = scrollContainer.scrollWidth
                    const visibleWidth = scrollContainer.offsetWidth
                    const scrollableWidth = totalWidth - visibleWidth
                    const scrollX = scrollableWidth * self.progress

                    scrollContainer.scrollTo({ left: scrollX, behavior: 'auto' })
                },
            })
        }
    }, { scope: containerRef })

    return (
        <div ref={containerRef} id="home" className="overflow-hidden relative min-h-screen">
            {/* Background Video */}
            <video
                muted
                loop
                autoPlay
                playsInline
                className="absolute inset-0 w-full h-full object-cover -z-10 brightness-50"
                src="/videos/hero.mp4"
            />

            <Container className="min-h-screen py-10 w-full z-10 flex items-center overflow-hidden px-4 sm:px-6 md:px-8">
                <div className="w-full pt-[15vh] md:pt-[20vh] parallex space-y-6 md:space-y-0">
                    {/* Tagline */}
                    <p className="t1 text-center md:text-left text-light-blue font-semibold text-lg sm:text-xl md:text-2xl">
                        # Your Tax Consultants
                    </p>

                    {/* Scrollable Text */}
                    <div className="overflow-x-hidden overflow-y-hidden scroll-text">
                        <p className="t2 text-netural-white font-semibold text-[64px] md:text-[160px] lg:text-[200px] text-nowrap uppercase leading-[1.1] inline-block">
                            Experienced Exceptional
                        </p>
                    </div>

                    {/* Subheading */}
                    <p className="t3 md:text-left text-center text-netural-white font-normal text-base sm:text-lg md:text-xl leading-relaxed mt-4 max-w-3xl">
                        Unlock Your Potential with Personalized Accounting Solutions from Pinnacle Accounting & Tax Consultants
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col md:flex-row items-center gap-4 mt-8">
                        <Link target="_blank" href="https://calendly.com/pinnacle-accounting">
                            <Button className="btn w-full sm:w-auto" icon={<SlCalender className="text-xl" />}>
                                Book Appointment
                            </Button>
                        </Link>

                        <Link target="_blank" href="tel:+1 416-606-0079">
                            <Button
                                variant="transparent"
                                className="btn w-full sm:w-auto border-light-blue border-[1px] text-netural-white"
                                icon={<FaPhoneVolume className="text-netural-white text-xl" />}
                            >
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
