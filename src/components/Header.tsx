"use client"
import React, { Fragment, useRef } from 'react'
import Container from './Container'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitText from 'gsap/SplitText'

import { GiHamburgerMenu } from 'react-icons/gi'

const Header = () => {

    const containerRef = useRef(null)
    const containerMRef = useRef(null)

    gsap.registerPlugin(ScrollTrigger, SplitText)

    const { contextSafe } = useGSAP({ scope: containerMRef })

    const t2 = useRef<gsap.core.Timeline>(null)

    useGSAP(() => {
        const text = SplitText.create('.mlink', {
            type: 'lines',
            mask: 'lines'
        })
        t2.current = gsap.timeline({ paused: true })
            .set(containerMRef.current, { display: 'flex', xPercent: 100, opacity: 0 })
            .to(containerMRef.current, {
                xPercent: 0,
                opacity: 1,
                duration: 0.6,
                ease: 'power3.out',
            }).from(text.lines, {
                opacity: 0,
                y: 100,
                stagger: 0.2,
                duration: 0.6
            })
    }, [])

    const openMenu = contextSafe(() => {
        t2.current?.play()
    })

    const closeMenu = contextSafe(() => {
        t2.current?.reverse()
    })

    useGSAP(() => {
        gsap.from(containerRef.current, {
            y: -100,
            duration: 1,
        })
        gsap.to('.d-header', {
            backgroundColor: 'rgba(2, 81, 92, 0.8)',
            scrollTrigger: {
                trigger: '#about',
                start: '+=300 90%',
                end: '+=0 30%',
                scrub: 1,
            }
        })

    })

    return (
        <Fragment>
            <div ref={containerRef} className='h-[10vh] d-header backdrop-blur-xl border-b border-white/10 shadow-lg z-[100] fixed w-full top-0'>
                <Container className='flex items-center justify-between w-full h-full'>
                    <div className='font-bold logo text-netural-white text-2xl flex items-center'>
                        VATSAL & PARTNER
                    </div>
                    <div className='lg:flex hidden items-center gap-6 text-netural-white font-semibold text-base uppercase'>
                        <Link href={'#home'} >HOME</Link>
                        <Link href={'#about'} >ABOUT US</Link>
                        <Link href={'#services'} >SERVICES</Link>
                        <Link href={'/#team'} >OUR TEAM</Link>
                        <Link href={'/#review'} >Testimonials</Link>
                        <Link href={'/'} >PAY NOW</Link>

                    </div>
                    <div className='flex lg:hidden text-netural-white' onClick={() => {
                        openMenu()
                    }}>
                        <GiHamburgerMenu className='text-2xl' />
                    </div>
                </Container>
            </div>

            <div ref={containerMRef} className='h-screen overflow-auto hidden shadow bg-dark-blue z-[100] fixed w-screen top-0 '>
                <div onClick={() => {
                    closeMenu()
                }} className='text-netural-white text-3xl absolute right-10 top-[2.5vh]'>
                    X
                </div>
                <div className='flex flex-col items-start text-5xl gap-8 p-10 text-netural-white font-semibold w-full uppercase'>
                    <Link onClick={() => closeMenu()} className='pb-2 mlink' href={'#home'} >HOME</Link>
                    <Link onClick={() => closeMenu()} className='pb-2 mlink' href={'#about'} >ABOUT US</Link>
                    <Link onClick={() => closeMenu()} className='pb-2 mlink' href={'/#services'} >SERVICES</Link>
                    <Link onClick={() => closeMenu()} className='pb-2 mlink' href={'/#team'} >OUR TEAM</Link>
                    <Link onClick={() => closeMenu()} className='pb-2 mlink' href={'/#review'} >Testimonials</Link>
                    <Link onClick={() => closeMenu()} className='pb-2 mlink' href={'/'} >PAY NOW</Link>
                </div>
            </div>

        </Fragment>
    )
}

export default Header