import React from "react"
import { Link } from "gatsby"

const CtaButton = () => {
    return (
        <div className='bg-sky-950 py-8' id='contato'>
        <div className='px-4 text-center sm:px-4 sm:text-center'>
            <h3 className='text-4xl font-semibold leading-9 text-gray-200'>Ficou interessado em aumentar <br /> as vendas e visibilidade do seu negócio?</h3>
        </div>
        <div className='mt-8 flex justify-center'>
            <Link
            to='#'
            className='rounded-md bg-sky-700 px-4 py-2 text-2xl font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500'
            >
            ENTRE EM CONTATO
            </Link>
        </div>
        </div>

    )
}

export default CtaButton