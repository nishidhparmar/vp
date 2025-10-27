"use client"

import Container from '@/components/Container'
import Heading from '@/components/Heading'
import { cn } from '@/utils/cn'
import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import { Flip } from 'gsap/Flip'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(Flip)

interface Article {
    id: number
    date: string
    title: string
    image: string
}

const initialArticles: Article[] = [
    {
        id: 1,
        date: 'July 17, 2023',
        title: 'Tax Planning and Strategies',
        image: '/images/services/s5.jpg',
    },
    {
        id: 2,
        date: 'August 10, 2023',
        title: 'Investment Tips for 2024',
        image: '/images/services/s5.jpg',
    },
    {
        id: 3,
        date: 'September 5, 2023',
        title: 'How to Save More on Taxes',
        image: '/images/services/s5.jpg',
    },
]

const ArticleSection: React.FC = () => {
    const [openId, setOpenId] = useState<number | null>(null)
    const [articles, setArticles] = useState<Article[]>(initialArticles)
    const containerRef = useRef<HTMLDivElement>(null)

    // Store original sequence so we can restore it
    const originalOrder = useRef(initialArticles)

    useGSAP(
        () => {
            const state = Flip.getState('.article-card')
            Flip.from(state, {
                duration: 0.8,
                ease: 'power2.inOut',
                absolute: true,
                scale: true,
                stagger: 0.05,
            })
        },
        { scope: containerRef, dependencies: [articles, openId] }
    )

    const handleToggle = (id: number) => {
        setArticles((prev) => {
            // If the same card is open — restore original order
            if (openId === id) {
                setOpenId(null)
                return initialArticles
            }

            // Otherwise, move clicked card to first position
            const clicked = prev.find((a) => a.id === id)
            const others = prev.filter((a) => a.id !== id)
            setOpenId(id)
            return [clicked!, ...others]
        })
    }

    return (
        <Container
            className="p-section-padding-yx w-full min-h-screen space-y-8"
        >
            <Heading darkColorText="Articles" blueColorText="" />

            <div className="grid grid-cols-12 gap-4">
                {articles.map((article) => {
                    const isOpen = openId === article.id
                    return (
                        <div
                            key={article.id}
                            className={cn(
                                'article-card rounded-lg bg-cover bg-no-repeat bg-center cursor-pointer',
                                'transition-all duration-700',
                                isOpen ? 'col-span-12 h-[500px]' : 'col-span-4 h-[300px]'
                            )}
                            style={{ backgroundImage: `url(${article.image})` }}
                        >
                            <div className="h-full w-full bg-gradient-to-t from-black/70 to-transparent rounded-lg flex flex-col justify-end items-start gap-3 p-4">
                                <p className="text-netural-white text-xs font-semibold line-clamp-1">
                                    {article.date}
                                </p>
                                <p className="text-netural-white text-base font-semibold line-clamp-1">
                                    {article.title}
                                </p>
                                <button
                                    onClick={() => handleToggle(article.id)}
                                    className="rounded-lg bg-netural-white font-semibold text-sm px-4"
                                >
                                    {isOpen ? 'Close' : 'View'}
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Container>
    )
}

export default ArticleSection
