"use client"
import Container from '@/components/Container'
import Heading from '@/components/Heading'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import gsap from 'gsap'

import Image from 'next/image'
import React, { useRef } from 'react'

const OurTeamSection = () => {
    gsap.registerPlugin(ScrollTrigger)
    const containerRef = useRef<HTMLDivElement>(null);
    const teamContainerRef = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        const t1 = gsap.timeline()
        t1.from('.team-member', {
            opacity: 0,
            x: -100,
            stagger: {
                amount: 0.6
            },
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 90%',
                end: 'bottom 80%',
                scrub: 1
            }
        })
        ScrollTrigger.create({
            trigger: containerRef.current,
            pin: true,
            scrub: 2,
            onUpdate: (self) => {
                const totalWidth = teamContainerRef.current?.scrollWidth ?? 0;
                const visibleWidth = teamContainerRef.current?.offsetWidth ?? 0;
                const scrollableWidth = totalWidth - visibleWidth;

                const scrollPercent = self.progress;
                const scrollX = scrollableWidth * scrollPercent;

                if (teamContainerRef.current) {
                    teamContainerRef.current.scrollTo({
                        left: scrollX,
                        behavior: 'auto',
                    });
                }
            },
        });


    }, {
        scope: containerRef
    })
    return (
        <div id='team' ref={containerRef}>
            <Container className='p-section-padding-yx h-screen'>
                <div className='space-y-4 h-full '>
                    <Heading darkColorText="Our" blueColorText='Team' />
                    <Heading className='text-xl font-semibold text-netural-black' darkColorText="Meet Our Expert Team at Pinnacle Accounting & Tax Consultants" />
                    <div className='bg-red-5 h-full flex flex-col mt-10 '>
                        <div className='h-[calc(100%-50px)] flex gap-6 items-end overflow-hidden' ref={teamContainerRef}>
                            {
                                Array(6).fill(0).map((i, index) => (
                                    <div key={index} className='h-[100%] w-[300px] shrink-0 flex flex-col justify-end team-member'>
                                        <div className='h-[80%]  w-full shrink-0'>
                                            <Image src={`/images/team/${index + 1}.jpg`} alt='team' className='h-full rounded-lg w-full object-cover' width={200} height={200} />
                                        </div>
                                        <div className='py-2 h-[20%] flex flex-col items-center  gap-2 '>
                                            <p className='text-lg font-medium text-netural-black'>John Wick</p>
                                            <p className='text-base font-medium text-netural-black/50'>CEO</p>

                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='w-full h-[3px] bg-light-blue'></div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default OurTeamSection