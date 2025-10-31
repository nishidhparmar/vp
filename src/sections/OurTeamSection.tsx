"use client"

import Container from '@/components/Container'
import Heading from '@/components/Heading'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import Image from 'next/image'
import React, { useRef, useState } from 'react'

interface TeamMember {
    id: number
    name: string
    designation: string
    image: string
    description: string | React.ReactNode
}

interface DialogProps {
    member: TeamMember
    onClose: () => void
}


const Dialog: React.FC<DialogProps> = ({ member, onClose }) => {
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
                        src={member.image}
                        alt={member.name}
                        className="object-cover h-full w-full"
                        width={600}
                        height={600}
                        priority
                    />
                </div>

                {/* Right Content Section */}
                <div className="w-full md:w-1/2 p-4 sm:p-6 flex flex-col justify-between overflow-y-auto max-h-[calc(80vh-60px)] md:max-h-full">
                    <div className="space-y-3 sm:space-y-4">
                        <h3 className="text-xl sm:text-2xl font-bold text-netural-white leading-tight">
                            {member.name}
                        </h3>
                        <p className="text-sm sm:text-base text-netural-white/70 font-semibold">
                            {member.designation}
                        </p>
                        <p className="text-sm sm:text-base text-netural-white/80 leading-relaxed">
                            {member.description}
                        </p>
                    </div>

                    <div className="mt-4 sm:mt-6">
                        <button
                            onClick={handleClose}
                            className="w-full sm:w-auto rounded-lg bg-dark-blue text-white font-semibold text-sm sm:text-base px-4 sm:px-5 py-2 sm:py-2.5 transition-all duration-300 hover:bg-dark-blue/90"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}


// ----------------- OurTeamSection -----------------
const OurTeamSection = () => {
    gsap.registerPlugin(ScrollTrigger)
    const containerRef = useRef<HTMLDivElement>(null)
    const teamContainerRef = useRef<HTMLDivElement>(null)
    const [isOpen, setIsOpen] = useState(false)
    const [activeMember, setActiveMember] = useState<TeamMember | null>(null)

    const teamMembers: TeamMember[] = [
        {
            id: 1,
            name: "Vatsal Thakkar",
            designation: "CPA",
            image: "/images/team/our-team/1.jpg",
            description:
                <>
                    Since he founded the accounting firm in 2016, Vatsal has been committed to providing high-quality consulting advice and accounting services to small and medium-sized, owner-operated businesses.
                    <br />
                    <br />
                    Vatsal is both a Chartered Accountant from India and a Certified Professional Accountant in Canada.
                    <br />
                    <br />
                    He is recognized not only for his professionalism in his chosen field but also for his entrepreneurial spirit and his dedication to finding growth-oriented solutions for clients.
                </>,
        },
        {
            id: 2,
            name: "Taslim Shaikh",
            designation: "CPA",
            image: "/images/team/our-team/2.jpg",
            description:
                <>
                    Taslim joined the firm as a Manager. She possesses the ability to handle a broad range of tasks and can deliver effectively and accurately under tight deadlines with strong communication, coordination, analytical and networking skills.
                    <br />
                    <br />
                    Taslim is both a Chartered Accountant from India and a Certified Professional Accountant in Canada.
                    <br />
                    <br />
                    Versatile accountant with a go-better attitude.
                </>,
        },
        {
            id: 3,
            name: "Jugal Thakkar",
            designation: "CA (India)",
            image: "/images/team/our-team/3.jpg",
            description:
                <>
                    Jugal is a dedicated Chartered Accountant who goes above and beyond to serve and care for our clients and team members. With a belief in going the extra mile, Jugal brings over four years of leadership experience, specializing in optimizing business processes, driving growth, and enhancing efficiency through automation.
                    At the forefront of our accounting and MIS maintenance efforts, Jugal leads a dynamic team that seamlessly integrates with our clients’ operations, acting as their internal accounting department. With a keen focus on day-to-day accounting tasks, Jugal and his team ensure accurate financial management while fostering strong client relationships.</>,
        },
        {
            id: 4,
            name: "Aman Parmar",
            designation: "Bachelor's in Accounting",
            image: "/images/team/our-team/4.jpg",
            description:
                <>
                    Mr. Aman is a seasoned accounting professional with more than 9 years of experience. As a core member of our Bookkeeping Team. He skillfully oversees client daily requirements, ensuring smooth and efficient operations.
                    <br />
                    <br />
                    With a past remarkable background as a Head Accountant for a US subsidiary company, Aman brings a wealth of knowledge and expertise to the table. Proficient in a range of cloud-based software, including QuickBooks and Zoho, Aman is well-versed in leveraging technology to optimize financial processes and enhance efficiency.
                </>
        },
        {
            id: 5,
            name: "Anjani Patadia",
            designation: "Senior Staff Accountant",
            image: "/images/team/5.jpg",
            description: null,
        },
        {
            id: 6,
            name: "Isha Patel",
            designation: "Staff Accountant",
            image: "/images/team/6.jpg",
            description: null,
        },
    ]

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
                const totalWidth = teamContainerRef.current?.scrollWidth ?? 0
                const visibleWidth = teamContainerRef.current?.offsetWidth ?? 0
                const scrollableWidth = totalWidth - visibleWidth

                const scrollPercent = self.progress
                const scrollX = scrollableWidth * scrollPercent

                if (teamContainerRef.current) {
                    teamContainerRef.current.scrollTo({
                        left: scrollX,
                        behavior: 'auto',
                    })
                }
            },
        })
    }, { scope: containerRef })

    return (
        <div id='team' ref={containerRef} className='bg-[url("/images/about-mesh.png")] bg-no-repeat bg-cover'>
            <Container className='p-section-padding-yx h-screen'>
                <div className='space-y-4 h-full'>
                    <Heading darkColorText="Our" blueColorText='Team' />
                    <Heading className='font-semibold text-netural-black text-base md:text-xl' darkColorText="Meet Our Expert Team at Pinnacle Accounting & Tax Consultants" />
                    <div className='h-full flex flex-col mt-10'>
                        <div className='h-[calc(100%-50px)] flex gap-6 items-end overflow-hidden' ref={teamContainerRef}>
                            {teamMembers.map((member) => (
                                <div
                                    key={member.id}
                                    onClick={() => {
                                        setIsOpen(true)
                                        setActiveMember(member)
                                    }}
                                    className='h-[100%] w-[300px] shrink-0 flex flex-col justify-end team-member cursor-pointer'
                                >
                                    <div className='h-[80%] w-full shrink-0'>
                                        <Image src={member.image} alt={member.name} className='h-full rounded-lg w-full object-cover' width={200} height={200} />
                                    </div>
                                    <div className='py-2 h-[20%] flex flex-col items-center gap-2'>
                                        <p className='text-lg font-medium text-netural-black'>{member.name}</p>
                                        <p className='text-base font-medium text-netural-black/50'>{member.designation}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='w-full h-[3px] bg-light-blue'></div>
                    </div>
                </div>
            </Container>

            {isOpen && activeMember && (
                <Dialog
                    member={activeMember}
                    onClose={() => {
                        setIsOpen(false)
                        setActiveMember(null)
                    }}
                />
            )}
        </div>
    )
}

export default OurTeamSection
