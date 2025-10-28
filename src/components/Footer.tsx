import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='w-full  bg-[url("/images/review-mesh.png")]  bg-no-repeat bg-cover p-section-padding-x py-10 flex mt-10'>

            <div className='w-1/2 text-netural-white'>
                <p className='text-netural-white font-semibold text-5xl mb-4'>VATSAL & PARTNER</p>
                <p className='text-netural-white/80 text-s font-mediumm'>7223 Dishley Crt,<br />
                    Mississauga ON L5N 7X3</p>
                <p className='mt-4 text-netural-white/80 text-sm font-medium'>416-606-0079
                </p>
                <p className='text-netural-white/80 text-sm font-medium'>vatsal@pinnacletaxcpa.com</p>
            </div>
            <div className='w-1/2 flex'>
                <div className='w-1/2 flex flex-col'>
                    <p className='text-netural-white font-semibold text-lg'>Site Map</p>
                    <div className='space-y-2 flex flex-col mt-4 text-netural-white/80 text-sm font-medium'>
                        <Link className='hover:underline' href={'#home'} >HOME</Link>
                        <Link className='hover:underline' href={'#about'} >ABOUT US</Link>
                        <Link className='hover:underline' href={'#services'} >SERVICES</Link>
                        <Link className='hover:underline' href={'/#team'} >OUR TEAM</Link>
                        <Link className='hover:underline' href={'/#review'} >CUSTOM REVIEW</Link>
                        <Link className='hover:underline' href={'/'} >SECURE PAYMENT PAGE</Link>
                    </div>
                </div>
                <div className='w-1/2'>
                    <p className='text-netural-white font-semibold text-lg '>Legal</p>
                    <div className='space-y-2 flex flex-col mt-4 text-netural-white/80 text-sm font-medium'>
                        <Link className='hover:underline' href={'#home'} >Privacy Policy</Link>
                        <Link className='hover:underline' href={'#about'} >Terms & Conditions</Link>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer