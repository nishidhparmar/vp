"use client"
import Container from '@/components/Container'
import Heading from '@/components/Heading'
import React, { useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitText from 'gsap/SplitText'
import { useGSAP } from '@gsap/react'
import Image from 'next/image'

const ServicesSection = () => {
    const containerRef = useRef(null)

    gsap.registerPlugin(ScrollTrigger, SplitText)

    useGSAP(() => {
        const sections = gsap.utils.toArray<HTMLElement>(".service-section")

        sections.forEach((section, i) => {
            const imageLeft = section.querySelector(".img-left")
            const imageRight = section.querySelector(".img-right")
            const textContentLeft = section.querySelector(".content-left")
            const textContentRight = section.querySelector(".content-right")

            // gsap.fromTo(section, {
            //     backgroundColor: '#02515c',
            //     borderRadius: '20px',
            //     scale: 0.4,
            //     transformOrigin: i % 2 == 0 ? 'right' : 'left',

            //     // y: -100
            //     // transform: 'rotate3d(2, 2, 2, 10deg)'
            // }, {
            //     scale: 1,
            //     y: 0,
            //     borderRadius: '0px',
            //     transformOrigin: i % 2 == 0 ? 'right' : 'left',
            //     backgroundColor: '#02515c',
            //     scrollTrigger: {
            //         trigger: section,
            //         start: 'top 80%',
            //         end: '+=400px',
            //         scrub: 1,
            //     },
            //     transform: 'rotate3d(0, 0, 0, 0deg)'

            // })

            // gsap.to(section, {
            //     scrollTrigger: {
            //         trigger: containerRef.current,
            //         start: 'top 80%',
            //         end: '+=400px',
            //         scrub: 1,
            //         markers: true,
            //         pin: section,
            //         pinSpacing: true
            //     }
            // })

            if (textContentLeft) {
                const split = new SplitText(textContentLeft.querySelector(".text"), {
                    type: "lines",
                    linesClass: "split-line",
                    smartWrap: true,
                })
                gsap.fromTo(
                    split.lines,
                    {
                        color: '#29C0BE',
                        yPercent: 100,
                        xPercent: -20,
                        opacity: 0,
                    },
                    {
                        color: '#eaeaea',
                        yPercent: 0,
                        xPercent: 0,
                        opacity: 1,
                        stagger: 0.15,
                        duration: 1.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: textContentLeft,
                            start: "top 80%",
                            end: "bottom 70%",
                            scrub: 1,
                        },
                    }
                )
            }

            if (textContentRight) {
                const split = new SplitText(textContentRight.querySelector(".text"), {
                    type: "lines",
                    linesClass: "split-line",
                    smartWrap: true,

                })
                gsap.fromTo(
                    split.lines,
                    {
                        color: '#29C0BE',
                        yPercent: 100,
                        xPercent: 20,
                        opacity: 0,
                    },
                    {
                        color: '#eaeaea',
                        yPercent: 0,
                        xPercent: 0,
                        opacity: 1,
                        stagger: 0.15,
                        duration: 1.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: textContentRight,
                            start: "top 80%",
                            end: "bottom 70%",
                            scrub: 1,
                        },
                    }
                )

            }

            if (imageLeft) {
                gsap.fromTo(
                    imageLeft,
                    { xPercent: -100, yPercent: -50, opacity: 0, transform: 'rotate3d(2, 2, 2, 45deg)' },
                    {
                        xPercent: 0,
                        yPercent: 0,
                        opacity: 1,
                        duration: 1.2,
                        ease: "power3.out",
                        transform: 'rotate3d(0, 0, 0, 0deg)',
                        scrollTrigger: {
                            trigger: section,
                            start: "top 85%",
                            end: "bottom 70%",
                            scrub: 1,
                        }
                    }
                )
            }

            if (imageRight) {
                gsap.fromTo(
                    imageRight,
                    { xPercent: 100, yPercent: 50, opacity: 0, transform: 'rotate3d(2, 2, 2, 45deg)' },
                    {
                        xPercent: 0,
                        yPercent: 0,
                        opacity: 1,
                        duration: 1.2,
                        transform: 'rotate3d(0, 0, 0, 0deg)',
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 85%",
                            end: "bottom 70%",
                            scrub: 1,
                        }
                    }
                )
            }
        })
    }, { scope: containerRef })

    return (
        <div ref={containerRef} className='min-h-screen bg-dark-blue overflow-hidden' id='services'>
            <Heading
                className='text-netural-white text-center pt-[100px]'
                darkColorText='Our'
                blueColorText='Service'
            />

            {/* === Section 1 === */}
            <Container className='service-section flex p-section-padding-yx space-x-10 items-center'>
                <div className='w-1/2 h-full img-left'>
                    <Image src='/images/services/s1.jpg' alt='service' width={500} height={500} className='rounded-lg w-full h-[500px] object-cover' />
                </div>
                <div className='w-1/2 h-full space-y-4 content-right'>
                    <Heading className='text-2xl text-light-blue font-semibold' darkColorText='Personal Tax' />
                    <p className='text-lg font-medium text-netural-white/80 leading-[36px] text'>
                        Most individuals remain unaware of their need for acquiring the help of taxation professionals. However, getting the help of seasoned financial professionals can not only help you cut costs, but can also help you plan ahead for a better future. At Pinnacle Accounting, we offer Tax services in Toronto to cater to your personalized needs. It doesn’t matter if you’re confused about how to file your taxes or are in the middle of a financial crisis situation, our professionals can handle it all to provide Tax services in Toronto. Pinnacle Accounting is the place to go to for efficient, reliable and customizable Tax services in Toronto.
                    </p>
                </div>
            </Container>

            {/* === Section 2 === */}
            <Container className='service-section flex p-section-padding-yx space-x-10 items-center'>
                <div className='w-1/2 h-full space-y-4 content-left'>
                    <Heading className='text-2xl font-semibold text-light-blue' darkColorText='Corporate Tax' />
                    <p className='text-lg font-medium text-netural-white/80 leading-[36px] text'>
                        Corporate taxation is a monumental part of every business. Tax implications, tax laws and interpretations are always evolving, which is exactly why you need professionals to help you decode corporate taxation. At Pinnacle accounting, we take a proactive approach to tax planning & tax preparation services. Our tax experts identify opportunities that minimize both your current and future tax liabilities. We work with you throughout the year and tailor a highly personalized tax plan with savings strategies designed for your specific situation. We provide our individual and business clients with the taxation expertise and knowledge that they deserve.
                    </p>
                </div>
                <div className='w-1/2 h-full img-right'>
                    <Image src='/images/services/s2.jpg' alt='service' width={500} height={500} className='rounded-lg w-full h-[500px] object-cover' />
                </div>
            </Container>

            {/* === Section 3 === */}
            <Container className='service-section flex p-section-padding-yx space-x-10 items-center'>
                <div className='w-1/2 h-full img-left'>
                    <Image src='/images/services/s3.jpg' alt='service' width={500} height={500} className='rounded-lg w-full h-[500px] object-cover' />
                </div>
                <div className='w-1/2 h-full space-y-4 content-right'>
                    <Heading className='text-2xl text-light-blue font-semibold' darkColorText='Accounting & Bookkeeping' />
                    <p className='text-lg font-medium text-netural-white/80 leading-[36px] text'>
                        Bookkeeping is the process of keeping accurate records of company revenues and spending in any given period. By having Pinnacle Accounting help with bookkeeping of your business records, you will get a benefit as we provide the best Accounting and Bookkeeping services in Toronto . Finance is the most important part since this is where the business relies upon to what extent the business remains. It is where Bookkeeping and Accounting come in. You manage your business; we make sure your books reflect it.
                    </p>
                </div>
            </Container>

            {/* === Section 4 === */}
            <Container className='service-section flex p-section-padding-yx space-x-10 items-center'>
                <div className='w-1/2 h-full space-y-4 content-left'>
                    <Heading className='text-2xl font-semibold text-light-blue' darkColorText='Consulting Services' />
                    <p className='text-lg font-medium text-netural-white/80 leading-[36px] text'>
                        We can help your business identify areas negatively providing Business Consulting Services in Toronto affecting profitability and growth and develop solutions that are practical and technically sound. Delivering this kind of value requires a broad range of talent and capabilities – across human capital, strategy, operations, and technology – and importantly, aligned to the unique needs of specific sectors, businesses, and organizations.
                    </p>
                </div>
                <div className='w-1/2 h-full img-right'>
                    <Image src='/images/services/s4.jpg' alt='service' width={500} height={500} className='rounded-lg w-full h-[500px] object-cover' />
                </div>
            </Container>

            {/* === Section 5 === */}
            <Container className='service-section flex p-section-padding-yx space-x-10 items-center'>
                <div className='w-1/2 h-full img-left'>
                    <Image src='/images/services/s5.jpg' alt='service' width={500} height={500} className='rounded-lg w-full h-[500px] object-cover' />
                </div>
                <div className='w-1/2 h-full space-y-4 content-right'>
                    <Heading className='text-2xl text-light-blue font-semibold' darkColorText='Virtual CFO Services' />
                    <p className='text-lg font-medium text-netural-white/80 leading-[36px] text'>
                        The Virtual CFO is a way for your business to get financial insight and guidance at a fraction of the cost of a full-time CFO. Our virtual CFO services can provide you the solutions you need. Some companies find they don’t require an in-house, full-time CFO—especially at their earliest stages of development.
                    </p>
                </div>
            </Container>

            {/* === Section 6 === */}
            <Container className='service-section flex p-section-padding-yx space-x-10 items-center'>
                <div className='w-1/2 h-full space-y-4 content-left'>
                    <Heading className='text-2xl font-semibold text-light-blue' darkColorText='Financial budgeting and planning' />
                    <p className='text-lg font-medium text-netural-white/80 leading-[36px] text'>
                        Financial budgeting and Planning is an integral part of any business. Running a successful business by getting Financial Planning Services in Toronto services does not only require proper allocation of your current resources but you also need to plan ahead to make sure you don’t run into any trouble.
                    </p>
                </div>
                <div className='w-1/2 h-full img-right'>
                    <Image src='/images/services/s6.jpg' alt='service' width={500} height={500} className='rounded-lg w-full h-[500px] object-cover' />
                </div>
            </Container>
        </div>
    )
}

export default ServicesSection