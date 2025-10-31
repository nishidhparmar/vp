"use client"
import Container from '@/components/Container'
import Heading from '@/components/Heading'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


import gsap from 'gsap'

import React, { useRef } from 'react'
import Button from '@/components/Button'
import Image from 'next/image'
import { MdMiscellaneousServices } from 'react-icons/md'
import Link from 'next/link'

const AboutSection = () => {
    const containerRef = useRef(null)
    gsap.registerPlugin(SplitText, ScrollTrigger)

    useGSAP(() => {
        const text1 = SplitText.create('.t1', {
            type: 'words',
            smartWrap: true,
            mask: 'words'
        })

        const text2 = SplitText.create('.t2', {
            type: 'chars',
            smartWrap: true
        })
        gsap.from(text1.words, {
            y: 100,
            stagger: 0.4,
            ease: 'circ',
            scrollTrigger: {
                trigger: text1.words,
                start: 'top 80%',
                end: '+=100',
                scrub: 1
            }
        })

        gsap.to(text2.chars, {
            stagger: 0.4,
            color: '#02515C',
            ease: 'bounce',
            scrollTrigger: {
                trigger: text1.words,
                scrub: 1,
                start: 'top 80%',
                end: '+=200',

            }
        })
        gsap.utils.toArray<HTMLElement>('.about-image').forEach((img) => {
            gsap.to(img, {
                y: -20,
                ease: 'circ',
                scrollTrigger: {
                    trigger: img,
                    scrub: 2,
                    start: 'top center',
                    end: '+=200',
                },
            })
        })

        gsap.to('.about-img-wrapper', {
            y: -50,
            ease: 'expo',
            scrollTrigger: {
                trigger: '.about-img-wrapper',
                scrub: 2,
                start: 'top center',
                end: '+=200'

            },
        })
        gsap.from('.about-image-wrapper', {
            opacity: 0,
            stagger: 0.4,
            x: 50,
            ease: 'expo',
            scrollTrigger: {
                trigger: '.about-img-wrapper',
                scrub: 2,
                start: 'top center',
                end: '+=200',
                once: true
            },
        })

    }, {
        scope: containerRef
    })
    return (
        <div ref={containerRef} id='about' className='bg-[url("/images/about-mesh.png")] bg-no-repeat bg-cover'>
            <Container className='p-section-padding-yx  min-h-screen flex overflow-hidden gap-4'>
                <div className='md:w-1/2 w-full space-y-4 flex flex-col justify-start'>
                    <Heading darkColorText='About' blueColorText='Us' />
                    <p className='text-lg md:text-2xl font-semibold text-netural-black t1'>Welcome to Pinnacle Accounting & Tax Consultants</p>
                    <p className='leading-[28px] text-base md:text-lg font-medium text-netural-black/20 t2 md:leading-[36px]'>Pinnacle Accounting & Tax Consultants provides full accounting services for business and individuals throughout the year. We believe that accounting and tax is not only about numbers, it is more about personal and business goals. We understand the needs of each client and customise our approach accordingly. We strive to achieve 100% satisfaction in client experience using our expertise. We believe that the growth of our client is our growth. </p>
                    <Link href={'/#services'}>
                        <Button className='mt-6'
                            icon={<MdMiscellaneousServices className='text-xl ' />}
                        >Our Services</Button>
                    </Link>
                </div>
                <div className='md:w-1/2 w-full hidden md:flex flex-col pl-6  about-img-wrapper'>
                    <div className='w-[500px] about-image-wrapper h-[300px] self-end border-4 border-white overflow-hidden rounded-lg'>
                        <Image
                            alt='about'
                            className='about-image'
                            src={'/images/about1.jpg'}
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className='w-[500px] h-[300px] -translate-y-[40px] border-4 border-white overflow-hidden rounded-lg about-image-wrapper'>
                        <Image
                            alt='about'
                            className='about-image'
                            src={'/images/about2.jpg'}
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </Container >
        </div >
    )
}

export default AboutSection