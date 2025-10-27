"use client"
import * as React from "react"
import { KeenSliderInstance, useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Container from "@/components/Container"
import Image from "next/image"
import ReactStars from "react-stars"
import Heading from "@/components/Heading"
import { GrNext } from "react-icons/gr"

export default function ReviewsSection() {
    const sliderRef = React.useRef<KeenSliderInstance | null>(null)

    const [ref] = useKeenSlider<HTMLDivElement>(
        {
            loop: true,
            slides: {
                perView: 2,
                spacing: 15,
            },
        },
        [
            (slider) => {
                let timeout: ReturnType<typeof setTimeout>
                let mouseOver = false

                function clearNextTimeout() {
                    clearTimeout(timeout)
                }

                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000) // auto scroll every 2s
                }

                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })

                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)

                sliderRef.current = slider // save instance for buttons
            },
        ]
    )

    const handlePrev = () => sliderRef.current?.prev()
    const handleNext = () => sliderRef.current?.next()

    return (
        <div className=" flex items-center justify-center bg-[url('/images/review-mesh.png')] bg-no-repeat bg-cover"
        // style={{
        //     background: "radial-gradient(circle at 50% 50%,#086f79, #05606b, rgba(2,81,92,1))",
        // }}
        >
            <Container className="w-full space-y-10 p-section-padding-yx ">
                <Heading darkColorText="Testimonials" className=" text-white" blueColorText="" />
                <div ref={ref} className="keen-slider ">
                    {Array(6)
                        .fill(0)
                        .map((_, index) => (
                            <div
                                key={index}
                                className="keen-slider__slide slider bg-white/10 backdrop-blur-3xl border border-white/20 shadow-lg rounded-2xl h-[300px] text-white text-2xl flex gap-4 p-4 "
                            >

                                <div className="w-[250px] h-full shrink-0">
                                    <Image
                                        src={`/images/team/${index + 1}.jpg`}
                                        alt="reviewer"
                                        width={200}
                                        height={200}
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                                <div className="p-4">
                                    <p className="font-bold text-xl mb-2">John Wick</p>
                                    <p className="font-medium text-base mb-10 line-clamp-5">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit deleniti, quas
                                        earum maiores nihil, quidem molestias officia amet provident quo laudantium sint
                                        sed velit sunt, nisi impedit odio quod? Dolor.
                                    </p>
                                    <ReactStars edit={false} count={5} value={5} size={24} color2={"oklch(87.9% 0.169 91.605)"} />
                                </div>
                            </div>
                        ))}
                </div>

                {/* Navigation Buttons */}
                <div className="flex  gap-4">
                    <button
                        onClick={handlePrev}
                        className="px-4 py-4 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all"
                    >
                        <GrNext className="rotate-180" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="px-4 py-4 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all"
                    >
                        <GrNext />
                    </button>
                </div>
            </Container>
        </div>
    )
}
