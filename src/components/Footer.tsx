import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="w-full bg-[url('/images/review-mesh.png')] bg-no-repeat bg-cover px-4 sm:px-6 md:px-8 py-10 mt-10 text-netural-white">
            <div className="flex flex-col md:flex-row gap-10 md:gap-20">
                {/* Left Section */}
                <div className="w-full md:w-1/2 space-y-3">
                    <p className="font-semibold text-3xl sm:text-4xl lg:text-5xl mb-4">VATSAL & PARTNER</p>
                    <p className="text-netural-white/80 text-sm sm:text-base font-medium leading-relaxed">
                        7223 Dishley Crt,<br />
                        Mississauga ON L5N 7X3
                    </p>
                    <div className="mt-4 space-y-1">
                        <p className="text-netural-white/80 text-sm sm:text-base font-medium">416-606-0079</p>
                        <p className="text-netural-white/80 text-sm sm:text-base font-medium">vatsal@pinnacletaxcpa.com</p>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-1/2 flex flex-col sm:flex-row gap-10 sm:gap-6">
                    {/* Site Map */}
                    <div className="w-full sm:w-1/2">
                        <p className="font-semibold text-lg sm:text-xl mb-3">Site Map</p>
                        <div className="space-y-2 flex flex-col text-netural-white/80 text-sm sm:text-base font-medium">
                            <Link className="hover:underline" href="#home">HOME</Link>
                            <Link className="hover:underline" href="#about">ABOUT US</Link>
                            <Link className="hover:underline" href="#services">SERVICES</Link>
                            <Link className="hover:underline" href="#team">OUR TEAM</Link>
                            <Link className="hover:underline" href="#review">CUSTOM REVIEW</Link>
                            <Link className="hover:underline" href="/">SECURE PAYMENT PAGE</Link>
                        </div>
                    </div>

                    {/* Legal */}
                    <div className="w-full sm:w-1/2">
                        <p className="font-semibold text-lg sm:text-xl mb-3">Legal</p>
                        <div className="space-y-2 flex flex-col text-netural-white/80 text-sm sm:text-base font-medium">
                            <Link className="hover:underline" href="#privacy">Privacy Policy</Link>
                            <Link className="hover:underline" href="#terms">Terms & Conditions</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-10 pt-6 border-t border-white/20 text-center text-xs sm:text-sm text-netural-white/70">
                © {new Date().getFullYear()} Vatsal & Partner. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer
