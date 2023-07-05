import React from "react"
import './global.css'
import Hero from "../components/hero"
import About from "../components/about"
import Instagram from "../components/instagram"
import Depoimentos from "../components/depoimentos"
import CtaButton from "../components/ctaButton"
import Footer from "../components/footer"

const Index = () => {
    return(
        <div> 
            <Hero />
            <About />
            <Instagram />
            <Depoimentos />
            <CtaButton />
            <Footer />
            
        </div>
    )
}

export default Index