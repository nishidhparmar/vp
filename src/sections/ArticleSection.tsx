"use client"
import Container from '@/components/Container'
import Heading from '@/components/Heading'
import { cn } from '@/utils/cn'
import { useGSAP } from '@gsap/react'
import Image from 'next/image'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


import React, { useRef, useState } from 'react'

const ArticleSection = () => {
    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const cardsRef = useRef<(HTMLDivElement | null)[]>([])
    const [activeArticleId, setActiveArticleId] = useState<null | number>(null)
    const articles = [
        {
            id: 1,
            title: 'Tax Planning and Strategies',
            description: 'Explore the world of tax planning and strategies in this blog category. Discover valuable insights on minimizing tax liabilities, maximizing deductions, and optimizing your overall tax situation. Stay updated on the latest tax regulations and learn how to make strategic financial decisions that can benefit both individuals and businesses.',
            date: 'July 17, 2023',
            image: '/images/services/s1.jpg'
        },
        {
            id: 2,
            title: 'Take charge of your personal finances with the insights shared in this blog category',
            description: 'Take charge of your personal finances with the insights shared in this blog category. From budgeting and savings strategies to retirement planning and investment management, explore topics that help you build a secure financial future. Learn how to make smart financial decisions, grow your wealth, and navigate complex financial landscapes with confidence.',
            date: 'July 17, 2023',
            image: '/images/services/s2.jpg'

        },
        {
            id: 3,
            title: 'Running a small business comes with its unique set of challenges',
            description: 'Running a small business comes with its unique set of challenges, particularly in the realm of accounting. Dive into this blog category to gain practical knowledge on managing bookkeeping, tracking expenses, understanding financial statements, and implementing effective accounting systems. Whether you’re a startup entrepreneur or a seasoned small business owner, these blog posts will provide you with essential tips and best practices for maintaining a healthy financial foundation.',
            date: 'July 17, 2023',
            image: '/images/services/s3.jpg'

        },
        {
            id: 4,
            title: 'Tax Planning and Strategies',
            description: 'Explore the world of tax planning and strategies in this blog category. Discover valuable insights on minimizing tax liabilities, maximizing deductions, and optimizing your overall tax situation. Stay updated on the latest tax regulations and learn how to make strategic financial decisions that can benefit both individuals and businesses.',
            date: 'July 17, 2023',
            image: '/images/services/s1.jpg'
        },
        {
            id: 5,
            title: 'Take charge of your personal finances with the insights shared in this blog category',
            description: 'Take charge of your personal finances with the insights shared in this blog category. From budgeting and savings strategies to retirement planning and investment management, explore topics that help you build a secure financial future. Learn how to make smart financial decisions, grow your wealth, and navigate complex financial landscapes with confidence.',
            date: 'July 17, 2023',
            image: '/images/services/s2.jpg'

        },
        {
            id: 6,
            title: 'Running a small business comes with its unique set of challenges',
            description: 'Running a small business comes with its unique set of challenges, particularly in the realm of accounting. Dive into this blog category to gain practical knowledge on managing bookkeeping, tracking expenses, understanding financial statements, and implementing effective accounting systems. Whether you’re a startup entrepreneur or a seasoned small business owner, these blog posts will provide you with essential tips and best practices for maintaining a healthy financial foundation.',
            date: 'July 17, 2023',
            image: '/images/services/s3.jpg'

        }
    ]

    // GSAP ScrollTrigger animation
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)

        // Set initial state for cards
        gsap.set(cardsRef.current, {
            opacity: 0,
            y: 50,
            scale: 0.95
        })

        // Create scroll trigger animation
        gsap.to(cardsRef.current, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.15, // Stagger animation by 0.15s between cards
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play reverse play reverse"
            }
        })
    }, { scope: containerRef })

    return (
        <div ref={containerRef}>
            <Container className='p-section-padding-yx w-full space-y-8'>
                <Heading darkColorText='Articles' blueColorText=''></Heading>
                <div className='grid grid-cols-12 gap-4'>
                    {
                        articles.filter((i) => {
                            if (activeArticleId !== null) {
                                return activeArticleId === i.id

                            } else {
                                return i
                            }
                        })
                            .map((i, index) => (
                                <div
                                    key={index}
                                    ref={(el) => { cardsRef.current[index] = el }}
                                    className={cn('shadow-lg rounded-lg card', isOpen ? 'col-span-12  h-[500px]' : `col-span-4  h-[300px]   bg-cover bg-no-repeat `)}
                                    style={{ backgroundImage: `url(${i.image})` }}
                                >
                                    {isOpen ? <div className='bg-netural-white h-full w-full rounded-lg flex gap-10 p-4'>
                                        <div className='w-1/2 h-full shrink-0'>
                                            <Image src={`${i.image}`} alt='article' className='rounded-lg w-full h-full' width={500} height={500} />
                                        </div>
                                        <div className='space-y-4'> <p className='text-xs font-semibold line-clamp-1 text-netural-black'>{i.date}</p>
                                            <p className='text-netural-black text-xl font-semibold '>{i.title}</p>
                                            <p className='text-netural-black font-medium text-base'>{i.description}</p>
                                            <button onClick={() => {
                                                setIsOpen(false)
                                                setActiveArticleId(null)
                                            }} className='rounded-lg bg-dark-blue text-netural-white font-semibold text-sm px-4 py-2'>
                                                View more articles
                                            </button></div>
                                    </div> : <div className='h-full w-full bg-gradient-to-t from-black to-transparent rounded-lg flex flex-col justify-end items-start gap-3 p-4 '>
                                        <p className='text-netural-white text-xs font-semibold line-clamp-1'>{i.date}</p>
                                        <p className='text-netural-white text-base font-semibold line-clamp-2'>{i.title}</p>
                                        <button onClick={() => {
                                            setIsOpen(true)
                                            setActiveArticleId(i.id)
                                            // Scroll to top of container when opening article
                                            containerRef.current?.scrollIntoView({
                                                behavior: 'smooth',
                                                block: 'start'
                                            })
                                        }} className='rounded-lg bg-netural-white font-semibold text-sm px-4 py-1'>
                                            View Article
                                        </button>

                                    </div>}
                                </div>

                            ))
                    }
                </div>
            </Container>
        </div>
    )
}

export default ArticleSection