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

        sections.forEach((section) => {
            const imageLeft = section.querySelector(".img-left")
            const imageRight = section.querySelector(".img-right")
            const textContentLeft = section.querySelector(".content-left")
            const textContentRight = section.querySelector(".content-right")

            gsap.fromTo(
                section,
                { y: 100, scale: 0.9, opacity: 0, zIndex: 0 },
                {
                    y: 0,
                    scale: 1,
                    opacity: 1,
                    zIndex: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 85%",
                        end: "top 60%",
                        scrub: 1,
                    },
                }
            )

            if (textContentLeft) {
                const split = new SplitText(textContentLeft.querySelector(".text"), {
                    type: "lines",
                    linesClass: "split-line",
                    smartWrap: true,
                })
                gsap.fromTo(
                    split.lines,
                    { color: '#29C0BE', yPercent: 100, xPercent: -20, opacity: 0 },
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
                            end: "+=200 70%",
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
                    { color: '#29C0BE', yPercent: 100, xPercent: 20, opacity: 0 },
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
                            end: "+=200 70%",
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
                            end: "+=400",
                            scrub: 1,
                        },
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
                            end: "+=400",
                            scrub: 1,
                        },
                    }
                )
            }
        })
    }, { scope: containerRef })

    return (
        <div ref={containerRef} className='lg:min-h-screen bg-[url("/images/review-mesh.png")] bg-no-repeat bg-cover overflow-hidden' id='services'>
            <Heading
                className='text-netural-white text-center pt-[100px]'
                darkColorText='Our'
                blueColorText='Service'
            />

            {/* === Service Sections === */}
            {[
                {
                    image: '/images/services/s1.jpg',
                    title: 'Personal Tax',
                    text: "Most individuals remain unaware of their need for acquiring the help of taxation professionals. However, getting the help of seasoned financial professionals can not only help you cut costs, but can also help you plan ahead for a better future. At Pinnacle Accounting, we offer Tax services in Toronto to cater to your personalized needs. It doesn’t matter if you’re confused about how to file your taxes or are in the middle of a financial crisis situation, our professionals can handle it all to provide Tax services in Toronto. Pinnacle Accounting is the place to go to for efficient, reliable and customizable Tax services in Toronto.",
                    imgPosition: 'left'
                },
                {
                    image: '/images/services/s2.jpg',
                    title: 'Corporate Tax',
                    text: "Corporate taxation is a monumental part of every business. Tax implications, tax laws and interpretations are always evolving, which is exactly why you need professionals to help you decode corporate taxation. At Pinnacle accounting, we take a proactive approach to tax planning & tax preparation services. Our tax experts identify opportunities that minimize both your current and future tax liabilities. We work with you throughout the year and tailor a highly personalized tax plan with savings strategies designed for your specific situation.",
                    imgPosition: 'right'
                },
                {
                    image: '/images/services/s3.jpg',
                    title: 'Accounting & Bookkeeping',
                    text: "Bookkeeping is the process of keeping accurate records of company revenues and spending in any given period. By having Pinnacle Accounting help with bookkeeping of your business records, you will get a benefit as we provide the best Accounting and Bookkeeping services in Toronto.",
                    imgPosition: 'left'
                },
                {
                    image: '/images/services/s4.jpg',
                    title: 'Consulting Services',
                    text: "We can help your business identify areas negatively providing Business Consulting Services in Toronto affecting profitability and growth and develop solutions that are practical and technically sound.",
                    imgPosition: 'right'
                },
                {
                    image: '/images/services/s5.jpg',
                    title: 'Virtual CFO Services',
                    text: "The Virtual CFO is a way for your business to get financial insight and guidance at a fraction of the cost of a full-time CFO. Our virtual CFO services can provide you the solutions you need.",
                    imgPosition: 'left'
                },
                {
                    image: '/images/services/s6.jpg',
                    title: 'Financial budgeting and planning',
                    text: "Financial budgeting and Planning is an integral part of any business. Running a successful business by getting Financial Planning Services in Toronto services does not only require proper allocation of your current resources but you also need to plan ahead to make sure you don’t run into any trouble.",
                    imgPosition: 'right'
                },
            ].map((item, idx) => (
                <Container key={idx} className={`service-section md:gap-6 flex flex-col md:flex-row ${item.imgPosition === 'right' ? 'md:flex-row-reverse ' : ''} lg:p-section-padding-yx py-10  space-y-6 md:space-y-0 items-center`}>
                    <div className={`w-full md:w-1/2 h-full ${item.imgPosition === 'right' ? 'img-right' : 'img-left'}`}>
                        <Image src={item.image} alt={item.title} width={500} height={500} className='rounded-lg w-full h-[300px] md:h-[500px] object-cover' />
                    </div>
                    <div className={`w-full md:w-1/2 h-full space-y-4 ${item.imgPosition === 'right' ? 'content-left' : 'content-right'}`}>
                        <Heading className='text-2xl text-light-blue font-semibold' darkColorText={item.title} />
                        <p className='text-base md:text-lg font-medium text-netural-white/80 leading-relaxed md:leading-[36px] text'>
                            {item.text}
                        </p>
                    </div>
                </Container>
            ))}
        </div>
    )
}

export default ServicesSection
