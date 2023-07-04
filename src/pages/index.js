import React from "react"
import './global.css'
import Hero from "../components/hero"
import About from "../components/about"
import Instagram from "../components/instagram"
import Depoimentos from "../components/depoimentos"

const Index = () => {
    return(
        <div> 
            <Hero />
            <About />
            <Instagram />
            <Depoimentos />
            
        </div>
    )
}

export default Index