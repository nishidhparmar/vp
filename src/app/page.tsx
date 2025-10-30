import Footer from '@/components/Footer'
import Header from '@/components/Header'
import LenisProvider from '@/providers/LenisProvider'
import AboutSection from '@/sections/AboutSection'
import ArticleSection2 from '@/sections/ArticleSection2'
import HeroSection2 from '@/sections/HeroSection2'
import LoaderSection4 from '@/sections/LoaderSection4'
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
        <LoaderSection4 />
        <Header />
        <HeroSection2 />
        <AboutSection />
        <ServicesSection />
        <OurTeamSection />
        <ReviewsSection />
        <ArticleSection2 />
        <Footer />
      </LenisProvider>
    </div>
  )
}

export default page