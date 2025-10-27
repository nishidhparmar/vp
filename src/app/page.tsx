import Footer from '@/components/Footer'
import Header from '@/components/Header'
import LenisProvider from '@/providers/LenisProvider'
import AboutSection from '@/sections/AboutSection'
import ArticleSection from '@/sections/ArticleSection'
import HeroSection2 from '@/sections/HeroSection2'
import LoaderSection2 from '@/sections/LoaderSection2'
import OurTeamSection from '@/sections/OurTeamSection'
import ReviewsSection from '@/sections/ReviewsSection'
import ServicesSection from '@/sections/ServicesSection'
import React from 'react'
import AnimatedCursor from 'react-animated-cursor'

function page() {
  return (
    <div className='relative'>
      <LenisProvider>
        <AnimatedCursor
          outerStyle={{ background: 'rgb(41, 192, 190)' }}
          innerSize={30}
          outerScale={4}
          innerStyle={{ background: 'transparent', border: '1px solid rgb(41, 192, 190)' }}
        />
        <LoaderSection2 />
        <Header />
        {/* <HeroSection /> */}
        <HeroSection2 />
        <AboutSection />
        <ServicesSection />
        <OurTeamSection />
        <ReviewsSection />
        <ArticleSection />
        <Footer />
      </LenisProvider>
    </div>
  )
}

export default page