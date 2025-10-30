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
                perView: 3,
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
        <div id="review" className=" flex items-center justify-center bg-[url('/images/review-mesh.png')] bg-no-repeat bg-cover"
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
                                className="keen-slider__slide bg-white/10 backdrop-blur-2xl border border-white/20 shadow rounded-3xl h-[320px] flex flex-col justify-between p-6 text-left text-white hover:bg-white/15 "
                            >

                                {/* <div className="w-[250px] h-full shrink-0">
                                    <Image
                                        src={`/images/team/${index + 1}.jpg`}
                                        alt="reviewer"
                                        width={200}
                                        height={200}
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div> */}
                                <div>
                                    <p className="font-semibold text-lg mb-3 text-white/90">John Wick</p>
                                    <p className="text-base text-white/80 leading-relaxed line-clamp-5">
                                        “Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, adipisci
                                        minus corrupti repudiandae nemo delectus assumenda. Quae pariatur facilis
                                        inventore deleniti illum.”
                                    </p>
                                </div>
                                <div className="mt-6 flex items-center justify-between w-full">
                                    <Image className="w-[100px]" src={'/images/logos/google-logo.png'} alt="google" width={100} height={100} />
                                    <ReactStars edit={false} count={5} value={5} size={22} color2={"#00fff0"} />
                                </div>
                            </div>
                        ))}
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-start gap-6 mt-8">
                    <button
                        onClick={handlePrev}
                        className="group relative w-12 h-12 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md transition-all flex items-center justify-center"
                    >
                        <GrNext className="rotate-180 text-white text-xl group-hover:scale-110 transition-transform" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="group relative w-12 h-12 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md transition-all flex items-center justify-center"
                    >
                        <GrNext className="text-white text-xl group-hover:scale-110 transition-transform" />
                    </button>
                </div>
            </Container>
        </div>
    )
}
