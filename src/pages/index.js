import React from "react"
import './global.css'
import Hero from "../components/hero"
import About from "../components/about"
import Instagram from "../components/instagram"
import Depoimentos from "../components/depoimentos"
import CtaButton from "../components/ctaButton"
import Footer from "../components/footer"
import Videos from "../components/videos"
import Seo from "../components/seo"

const Index = () => {
    return(
        <div> 
            <Seo title='AzzaMarketing' description='Este é um site de marketing e foi feito com o intuito de aprendizagem.'/>
            <Hero />
            <About />
            <Videos />
            <Instagram />
            <Depoimentos />
            <CtaButton />
            <Footer />
            
        </div>
    )
}

export default Index