"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import React, { useRef } from "react";

const LoaderSection4 = () => {
    gsap.registerPlugin(SplitText);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const percentageRef = useRef<HTMLParagraphElement | null>(null);

    useGSAP(() => {
        const split = SplitText.create(".text", {
            type: "chars",
            charsClass: "char",
        });

        const tl = gsap.timeline({
            defaults: { ease: "power3.out" },
        });

        // Simulated loading progress (feels natural)
        const count = { val: 0 };
        tl.to(count, {
            val: 100,
            duration: 3,
            ease: "power2.inOut",
            onUpdate: () => {
                if (percentageRef.current) {
                    percentageRef.current.innerText = `${Math.floor(count.val)}%`;
                }
            },
        });

        // Characters fly in with scale & blur
        tl.from(split.chars, {
            yPercent: 150,
            scale: 0.8,
            opacity: 0,
            filter: "blur(8px)",
            stagger: {
                each: 0.05,
                from: "center",
            },
            duration: 1.5,
            ease: "back.out(1.7)",
        }, "<0.3");

        // Subtle glowing color effect
        tl.to(split.chars, {
            color: "#f9fafb",
            textShadow: "0 0 20px rgba(255,255,255,0.6)",
            duration: 1,
            stagger: 0.03,
        });

        // Panels reveal outwards
        tl.to(".s1", {
            yPercent: -100,
            duration: 1,
            ease: "expo.inOut",
        });
        tl.to(".s2", {
            yPercent: 100,
            duration: 1,
            ease: "expo.inOut",
        }, "<");

        // Add a pulse glow on percentage before hiding
        tl.to(percentageRef.current, {
            scale: 1.2,
            color: "#ffffff",
            textShadow: "0 0 25px rgba(255,255,255,0.8)",
            duration: 0.5,
            yoyo: true,
            repeat: 1,
        });

        // Fade everything out cleanly
        tl.to(containerRef.current, {
            opacity: 0,
            duration: 1,
            pointerEvents: "none",
            ease: "power4.inOut",
            onComplete: () => {
                if (containerRef.current) containerRef.current.style.display = "none";
            },
        });
    }, { scope: containerRef });

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-50 flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-dark-blue via-dark-blue to-light-blue"
        >
            {/* Glass panels */}
            <div className="h-[50vh] w-full s1 bg-white/10 backdrop-blur-xl absolute top-0 border-b border-white/10 shadow-lg"></div>
            <div className="h-[50vh] w-full s2 bg-white/10 backdrop-blur-xl absolute bottom-0 border-t border-white/10 shadow-lg"></div>

            {/* Glowing overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_60%)] pointer-events-none"></div>

            {/* Center text & progress */}
            <div className="relative text-center z-10">
                <p className="text-[60px] translate-y-[-60px] sm:text-[100px] font-bold text-white text tracking-wider uppercase">
                    VATSAL & PARTNER
                </p>
                <p
                    ref={percentageRef}
                    className="text-[26px] tracking-widest font-medium text-white/70"
                >
                    0%
                </p>
            </div>
        </div>
    );
};

export default LoaderSection4;
