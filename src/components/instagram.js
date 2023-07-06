import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

const INSTA_QUERY = graphql `
    query {
        conteudo: allContentfulConteudoSite {
        edges {
            node {
            instaPostOne {
                resize(width: 1842, height: 2763) {
                src
                }
            }
            instaPostTwo {
                resize(width: 4160, height: 6240) {
                src
                }
            }
            instaPostThree {
                resize(width: 3991, height: 5986) {
                src
                }
            }
            instaPostFour {
                resize(height: 4000, width: 3000) {
                src
                }
            }
            }
        }
        }
    }
`
/* <pre>{JSON.stringify(data.conteudo.edges, null, 2)}</pre> */

const Instagram = () => {
    const data = useStaticQuery(INSTA_QUERY)
    return (
        <div className='bg-black'>
        {data.conteudo.edges.map(conteudos => {
            return ( 
        
        <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
            <h2 className=' text-center text-4xl font-bold tracking-tight text-white sm:text-5xl'>Acompanhe nosso Instagram</h2>

            <div className='mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
            <div className='group relative'>
                <Link to=''>
                    <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80'>
                    <img src={conteudos.node.instaPostOne.resize.src} alt='' className='h-full w-full object-cover object-center lg:h-full lg:w-full'/>
                    </div>
                </Link>
            </div>

            <div className='group relative'>
                <Link to=''>
                    <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80'>
                    <img src={conteudos.node.instaPostTwo.resize.src} alt='' className='h-full w-full object-cover object-center lg:h-full lg:w-full'/>
                    </div>
                </Link>
            </div>

            <div className='group relative'>
                <Link to=''>
                    <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80'>
                    <img src={conteudos.node.instaPostThree.resize.src} alt='' className='h-full w-full object-cover object-center lg:h-full lg:w-full'/>
                    </div>
                </Link>
            </div>

            <div className='group relative'>
                <Link to=''>
                    <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80'>
                    <img src={conteudos.node.instaPostFour.resize.src} alt='' className='h-full w-full object-cover object-center lg:h-full lg:w-full'/>
                    </div>
                </Link>
            </div>
            </div>
        </div>
        )
    })}
        </div>
    )
}

export default Instagram


/*
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
*/