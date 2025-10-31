"use client"

import React, { Fragment, useRef, useState, useEffect } from 'react'
import Container from './Container'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitText from 'gsap/SplitText'

const Header = () => {
    const headerRef = useRef<HTMLDivElement>(null)
    const mobileMenuRef = useRef<HTMLDivElement>(null)
    const tl = useRef<gsap.core.Timeline | null>(null)
    const [activeSection, setActiveSection] = useState<string>('home')

    gsap.registerPlugin(ScrollTrigger, SplitText)

    const { contextSafe } = useGSAP({ scope: mobileMenuRef })

    // Header scroll animation
    useGSAP(() => {
        gsap.from(headerRef.current, {
            y: -100,
            delay: 7,
            duration: 1,
            ease: 'power3.out',
        })

        gsap.to('.d-header', {
            backgroundColor: 'rgba(2, 81, 92, 0.8)',
            scrollTrigger: {
                trigger: '#about',
                start: '+=300 90%',
                end: '+=0 30%',
                scrub: 1,
            },
        })
    }, [])

    // Mobile menu animation
    useGSAP(() => {
        const split = SplitText.create('.mlink', { type: 'lines', mask: 'lines' })

        tl.current = gsap.timeline({ paused: true })
            .set(mobileMenuRef.current, { display: 'flex', xPercent: 100, opacity: 0 })
            .to(mobileMenuRef.current, {
                xPercent: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
            })
            .from(split.lines, {
                opacity: 0,
                y: 100,
                stagger: 0.2,
                duration: 0.2,
            })
    }, [])

    const openMenu = contextSafe(() => tl.current?.play())
    const closeMenu = contextSafe(() => tl.current?.reverse())

    const menuLinks = [
        { href: '#home', label: 'HOME' },
        { href: '#about', label: 'ABOUT US' },
        { href: '#services', label: 'SERVICES' },
        { href: '#team', label: 'OUR TEAM' },
        { href: '#review', label: 'TESTIMONIALS' },
        { href: '/', label: 'PAY NOW' },
    ]

    // Track active section
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const sections = menuLinks
            .map(link => link.href)
            .filter(href => href.startsWith('#'))
            .map(href => document.querySelector(href))
            .filter(Boolean) as HTMLElement[]

        const triggers: ScrollTrigger[] = []

        sections.forEach(section => {
            const id = section.getAttribute('id')!
            const trigger = ScrollTrigger.create({
                trigger: section,
                start: 'top center',
                end: 'bottom center',
                onEnter: () => setActiveSection(id),
                onEnterBack: () => setActiveSection(id),
            })
            triggers.push(trigger)
        })

        return () => {
            triggers.forEach(t => t.kill())
        }
    }, [])

    return (
        <Fragment>
            {/* Desktop Header */}
            <header
                ref={headerRef}
                className="d-header fixed top-0 z-[50] w-full h-[10vh] backdrop-blur-xl border-b border-white/10 shadow-lg"
            >
                <Container className="flex items-center justify-between w-full h-full">
                    <div className="font-bold text-2xl text-netural-white">
                        VATSAL & PARTNER
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-6 text-netural-white font-semibold text-base uppercase">
                        {menuLinks.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className={`transition-colors duration-300 ${activeSection === href.replace('#', '') ? 'text-[#19FFFB]' : 'text-white/80'}`}
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Icon */}
                    <button
                        onClick={openMenu}
                        className="lg:hidden text-netural-white text-2xl"
                        aria-label="Open Menu"
                    >
                        <GiHamburgerMenu />
                    </button>
                </Container>
            </header>

            {/* Mobile Menu */}
            <div
                ref={mobileMenuRef}
                className="hidden fixed top-0 w-screen h-screen bg-dark-blue z-[50] flex-col items-start text-netural-white text-4xl font-semibold uppercase px-10 py-20 gap-8 overflow-auto"
            >
                <button
                    onClick={closeMenu}
                    className="absolute right-10 top-[2.5vh] text-3xl"
                    aria-label="Close Menu"
                >
                    ×
                </button>

                {menuLinks.map(({ href, label }) => (
                    <Link
                        key={href}
                        href={href}
                        onClick={closeMenu}
                        className={`mlink pb-2 ${activeSection === href.replace('#', '') ? 'text-[#19FFFB]' : ''}`}
                    >
                        {label}
                    </Link>
                ))}
            </div>
        </Fragment>
    )
}

export default Header
