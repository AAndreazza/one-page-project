import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const Instagram = () => {
    return (
        <div className='bg-black'>
        <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
            <h2 className='-mt-20 text-center text-4xl font-bold tracking-tight text-white sm:text-5xl'>Acompanhe nosso Instagram</h2>

            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
            <div className='group relative'>
                <Link to=''>
                    <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80'>
                    <StaticImage src='../images/post1.jpg' className='h-full w-full object-cover object-center lg:h-full lg:w-full'/>
                    </div>
                </Link>
            </div>

            <div className='group relative'>
                <Link to=''>
                    <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80'>
                    <StaticImage src='../images/post2.jpg' alt='Front of men&#039;s Basic Tee in black.' className='h-full w-full object-cover object-center lg:h-full lg:w-full'/>
                    </div>
                </Link>
            </div>

            <div className='group relative'>
                <Link to=''>
                    <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80'>
                    <StaticImage src='../images/post3.jpg' className='h-full w-full object-cover object-center lg:h-full lg:w-full'/>
                    </div>
                </Link>
            </div>

            <div className='group relative'>
                <Link to=''>
                    <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80'>
                    <StaticImage src='../images/post4.jpg' className='h-full w-full object-cover object-center lg:h-full lg:w-full'/>
                    </div>
                </Link>
            </div>
            </div>
        </div>
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