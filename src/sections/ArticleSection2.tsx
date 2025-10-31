"use client"

import Container from "@/components/Container"
import Heading from "@/components/Heading"
import { cn } from "@/utils/cn"
import { useGSAP } from "@gsap/react"
import Image from "next/image"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import React, { useRef, useState } from "react"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Dialog = ({ article, onClose }: { article: any; onClose: () => void }) => {
    const dialogRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        gsap.fromTo(
            dialogRef.current,
            { opacity: 0, scale: 0.95, y: 30 },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.6,
                ease: "power3.out",
            }
        )
    }, [])

    const handleClose = () => {
        gsap.to(dialogRef.current, {
            opacity: 0,
            scale: 0.95,
            y: 30,
            duration: 0.4,
            ease: "power2.inOut",
            onComplete: onClose,
        })
    }

    return (
        <div className="fixed inset-0 z-[50] flex items-center justify-center backdrop-blur-lg bg-black/40 px-3 sm:px-6 py-6 sm:py-8">
            <div
                ref={dialogRef}
                className="relative w-full max-w-[900px] h-[80vh] rounded-2xl overflow-hidden 
                bg-gradient-to-br from-[#0a0a0a]/80 to-[#1a1a1a]/80
                border border-white/30 shadow-[0_0_40px_rgba(255,255,255,0.1)] 
                flex flex-col md:flex-row"
            >
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 text-white bg-black/40 hover:bg-black/60 rounded-full px-2.5 sm:px-3 py-1 text-xs sm:text-sm font-semibold transition-all"
                >
                    ✕
                </button>

                {/* Left Image Section */}
                <div className="w-full md:w-1/2 h-[200px] sm:h-[250px] md:h-full shrink-0">
                    <Image
                        src={article.image}
                        alt={article.title}
                        className="object-cover h-full w-full"
                        width={600}
                        height={600}
                        priority
                    />
                </div>

                {/* Right Content Section */}
                <div className="w-full md:w-1/2 p-4 sm:p-6 flex flex-col justify-between overflow-y-auto max-h-[calc(80vh-60px)] md:max-h-full">
                    <div className="space-y-3 sm:space-y-4">
                        <p className="text-xs sm:text-sm text-netural-white font-semibold">{article.date}</p>
                        <h3 className="text-xl sm:text-2xl font-bold text-netural-white leading-tight">
                            {article.title}
                        </h3>
                        <p className="text-sm sm:text-base text-netural-white/80 leading-relaxed">
                            {article.description}
                        </p>
                    </div>

                    <div className="mt-4 sm:mt-6">
                        <button
                            onClick={handleClose}
                            className="w-full sm:w-auto rounded-lg bg-dark-blue text-white font-semibold text-sm sm:text-base px-4 sm:px-5 py-2 sm:py-2.5 transition-all duration-300 hover:bg-dark-blue/90"
                        >
                            View more articles
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}



const ArticleSection2 = () => {
    const [isOpen, setIsOpen] = useState(false)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [activeArticle, setActiveArticle] = useState<any | null>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const cardsRef = useRef<(HTMLDivElement | null)[]>([])

    const articles = [
        {
            id: 1,
            title: "Tax Planning and Strategies",
            description:
                "Explore the world of tax planning and strategies in this blog category. Discover valuable insights on minimizing tax liabilities, maximizing deductions, and optimizing your overall tax situation. Stay updated on the latest tax regulations and learn how to make strategic financial decisions that can benefit both individuals and businesses.",
            date: "July 17, 2023",
            image: "/images/services/s1.jpg",
        },
        {
            id: 2,
            title: "Take charge of your personal finances with the insights shared in this blog category",
            description:
                "Take charge of your personal finances with the insights shared in this blog category. From budgeting and savings strategies to retirement planning and investment management, explore topics that help you build a secure financial future. Learn how to make smart financial decisions, grow your wealth, and navigate complex financial landscapes with confidence.",
            date: "July 17, 2023",
            image: "/images/services/s2.jpg",
        },
        {
            id: 3,
            title: "Running a small business comes with its unique set of challenges",
            description:
                "Running a small business comes with its unique set of challenges, particularly in the realm of accounting. Dive into this blog category to gain practical knowledge on managing bookkeeping, tracking expenses, understanding financial statements, and implementing effective accounting systems. Whether you’re a startup entrepreneur or a seasoned small business owner, these blog posts will provide you with essential tips and best practices for maintaining a healthy financial foundation.",
            date: "July 17, 2023",
            image: "/images/services/s3.jpg",
        },
    ]

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.set(cardsRef.current, {
            opacity: 0,
            y: 50,
            scale: 0.95,
        })

        gsap.to(cardsRef.current, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.2,
            ease: "power2.out",
            stagger: 0.2,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play reverse play reverse",
            },
        })
    }, [])

    return (
        <div ref={containerRef}>
            <Container className="p-section-padding-yx w-full space-y-8">
                <Heading darkColorText="Articles" blueColorText="" />
                <div className="grid grid-cols-12 gap-6">

                    {articles.map((i, index) => (
                        <div
                            key={i.id}
                            ref={(el) => {
                                cardsRef.current[index] = el
                            }}
                            className={cn(
                                "col-span-12 md:col-span-6 lg:col-span-4 group cursor-pointer rounded-2xl overflow-hidden bg-cover bg-center relative transform transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]",
                                "before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/70 before:to-transparent before:z-0"
                            )}
                            style={{ backgroundImage: `url(${i.image})` }}
                            onClick={() => {
                                setActiveArticle(i)
                                setIsOpen(true)
                            }}
                        >
                            <div className="relative z-10  bg-gradient-to-t from-black to-transparent flex flex-col justify-end h-[300px] p-5 space-y-2">
                                <p className="text-white text-xs font-medium">{i.date}</p>
                                <p className="text-white text-lg font-semibold leading-snug line-clamp-2">
                                    {i.title}
                                </p>
                                <button className="rounded-lg bg-netural-white font-semibold text-sm px-4 py-1 mt-2">
                                    View Article
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {isOpen && (
                    <Dialog
                        article={activeArticle}
                        onClose={() => {
                            setIsOpen(false)
                            setActiveArticle(null)
                        }}
                    />
                )}
            </Container>
        </div>
    )
}

export default ArticleSection2
