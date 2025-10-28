"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import React, { useRef } from "react";

const LoaderSection3 = () => {
    gsap.registerPlugin(SplitText);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const percentageRef = useRef<HTMLParagraphElement | null>(null);

    useGSAP(() => {
        const split = SplitText.create(".text", {
            type: "words",
            wordsClass: "word",
        });

        const tl = gsap.timeline({
            defaults: { ease: "power3.out" },
        });

        // Animate percentage from 0 → 100
        const count = { val: 0 };
        tl.to(count, {
            val: 100,
            duration: 2,
            onUpdate: () => {
                if (percentageRef.current) {
                    percentageRef.current.innerText = `${Math.floor(count.val)}%`;
                }
            },
        });

        // Animate split text
        tl.from(split.words, {
            yPercent: 150,
            opacity: 0,
            stagger: 0.1,
            duration: 1,
            ease: "back.out(1.7)",
        }, "<");

        // Fade to color change
        tl.to(split.words, {
            color: "#0A1D37", // dark blue
            stagger: 0.05,
            duration: 1,
        });

        // Slide out panels
        tl.to(".s1", {
            yPercent: -100,
            duration: 1,
            ease: "expo.inOut",
        });
        tl.to(
            ".s2",
            {
                yPercent: 100,
                duration: 1,
                ease: "expo.inOut",
            },
            "<"
        );

        // Fade out loader
        tl.to(containerRef.current, {
            opacity: 0,
            duration: 0.8,
            pointerEvents: "none",
            onComplete: () => {
                if (containerRef.current) containerRef.current.style.display = "none";
            },
        });
    }, { scope: containerRef });

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-50 flex flex-col justify-center items-center overflow-hidden bg-dark-blue text-white"
        >
            {/* Top sliding panel */}
            <div className="h-[50vh] w-full s1 bg-white/10 backdrop-blur-xl absolute top-0"></div>

            {/* Text and Percentage */}
            <div className="relative text-center z-10">
                <p className="text-[70px] sm:text-[100px] font-bold text-white text">
                    VATSAL & PARTNER
                </p>
                <p
                    ref={percentageRef}
                    className="text-[24px] mt-2 tracking-widest font-medium text-white/70"
                >
                    0%
                </p>
            </div>

            {/* Bottom sliding panel */}
            <div className="h-[50vh] w-full s2 bg-white/10 backdrop-blur-xl absolute bottom-0"></div>
        </div>
    );
};

export default LoaderSection3;
