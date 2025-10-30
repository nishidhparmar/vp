"use client"

import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 400) setVisible(true)
            else setVisible(false)
        }

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-[100] flex items-center justify-center rounded-full w-12 h-12 border border-[#19FFFB] text-[#19FFFB] bg-transparent backdrop-blur-lg transition-all duration-300 hover:bg-[#19FFFB]/20 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                }`}
            aria-label="Scroll to top"
        >
            <FaArrowUp size={20} />
        </button>
    )
}

export default ScrollToTopButton
