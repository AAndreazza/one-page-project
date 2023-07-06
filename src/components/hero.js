import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { CTA_WHATSAPP_MENSAGENS } from '../utils/constants'
import { getWhatsUrl } from '../utils/index.js'
import { graphql, useStaticQuery, Link } from 'gatsby'

const HERO_QUERY = graphql`
    query {
        conteudo: allContentfulConteudoSite {
        edges {
            node {
            fotoInicial {
                resize(width: 5418, height: 3612) {
                src
                }
            }
            }
        }
        }
    }
`

const Hero = () => {
    const data = useStaticQuery(HERO_QUERY)
    return(
        <div className='bg-gray-900'>
        <header className='absolute inset-x-0 top-0 z-50'>
            <nav className='flex items-center justify-between p-6 lg:px-8' aria-label='Global'>
            <div className='flex lg:flex-1'>
                <Link to='/' className='-m-1.5 p-1.5'>
                <span className='sr-only'>AzzaMarketing</span>
                <StaticImage className='h-12 w-12 rounded-full' src='../images/logo.png' alt='logo'/>
                </Link>
            </div>

            <div className='hidden lg:flex lg:gap-x-12'>
                <Link to='/#empresa' className='text-sm font-semibold leading-6 text-white'>Empresa</Link>
                <Link to='/#institucional' className='text-sm font-semibold leading-6 text-white'>Institucional</Link>
                <Link to='/#depoimentos' className='text-sm font-semibold leading-6 text-white'>Depoimentos</Link>
            </div>
            <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
                <Link to={getWhatsUrl(CTA_WHATSAPP_MENSAGENS.ctaButton)} className='text-sm font-semibold leading-6 text-white'>Whatsapp <span aria-hidden='true'>&rarr;</span></Link>
            </div>
            </nav>
        </header>
        {data.conteudo.edges.map(conteudos => {
            return ( 
        <div className='relative isolate overflow-hidden pt-14'>
            <img src={conteudos.node.fotoInicial.resize.src} alt='' className='absolute inset-0 -z-10 h-full w-full object-cover'/>
            <div className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80' aria-hidden='true'>
            <div className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#000000] to-[#000000] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'></div>
            </div>
            <div className='mx-auto max-w-2xl -mt-8 py-32 sm:py-48 lg:py-56'>
            <div className='text-center'>
                <h1 className='pr-4 pl-4 text-4xl font-bold tracking-tight text-white sm:text-6xl'>Impulsione seu sucesso através do marketing</h1>
                <p className='mt-6 text-lg leading-8 text-gray-300'>Com estratégias de marketing inteligentes, conecte-se com seu público-alvo, construa relacionamentos duradouros e maximize seus resultados de negócios.</p>
                <div className='mt-10 flex items-center justify-center gap-x-6'>
                <Link to={getWhatsUrl(CTA_WHATSAPP_MENSAGENS.ctaButton)} className='rounded-md bg-sky-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400'>Entre em contato</Link>
                <Link to='/#empresa' className='text-sm font-semibold leading-6 text-white'>Saiba mais <span aria-hidden='true'>→</span></Link>
                </div>
            </div>
            </div>
            <div className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]' aria-hidden='true'>
            <div className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#000000] to-[#666666] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'></div>
            </div>
        </div>
        )
    })}
        </div>

    )
}

export default Hero