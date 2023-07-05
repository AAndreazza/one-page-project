import React from "react"

const Videos = () => {
    return (
        <div class="bg-black py-24 md:py-0">
        <div class="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 ">
            
            <div role="list" class="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3">
            
            <div class="flex flex-col gap-10 pt-12 sm:flex-row">
            <iframe width="100%" height="315" class="padding-bottom:56.25%" src="https://www.youtube.com/embed/w0o2D_s9iQg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen> Seu navegador não suporta a TAG video... </iframe>
                <div class="max-w-xl flex-auto">
                <h3 class="-mt-8 lg:mt-0 text-lg font-bold leading-8 tracking-tight text-gray-500 text-center lg:text-left">Introdução: Como legalizar seus recebimentos do exterior</h3>
                <p class="text-base leading-7 text-gray-600 text-center lg:text-left">Dev Pleno</p>
                <p class="mt-6 text-base leading-7 text-gray-600">Nesta empolgante série de vídeos, você será guiado passo a passo através do processo de legalização dos seus recebimentos provenientes do exterior. Se você está envolvido em negócios internacionais, trabalha como freelancer ou recebe pagamentos de clientes estrangeiros, este conteúdo é essencial para garantir a conformidade legal e a segurança financeira.</p>
                </div>
            </div>

            <div class="flex flex-col gap-10 pt-12 sm:flex-row">
            <iframe width="100%" height="315" class="padding-bottom:56.25%" src="https://www.youtube.com/embed/5wTnzWYixPM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen> Seu navegador não suporta a TAG video... </iframe>
                <div class="max-w-xl flex-auto">
                <h3 class="-mt-8 lg:mt-0 text-lg font-bold leading-8 tracking-tight text-gray-500 text-center lg:text-left">FAQ: Como legalizar seus recebimentos do exterior</h3>
                <p class="text-base leading-7 text-gray-600 text-center lg:text-left">Dev Pleno</p>
                <p class="mt-6 text-base leading-7 text-gray-600">No vídeo de hoje, focarei em alguns termos contábeis essenciais que são fundamentais para entender as complexidades do processo de legalização dos recebimentos provenientes do exterior. Desde a definição de conceitos como "renda estrangeira", "taxas de câmbio" e "retenção de impostos", até explicações sobre os diferentes tipos de documentos e declarações necessários para cumprir com as obrigações fiscais e aduaneiras, tudo será abordado de maneira clara e acessível. </p>
                </div>
            </div>

            <div class="flex flex-col gap-10 pt-12 sm:flex-row">
            <iframe width="100%" height="315" class="padding-bottom:56.25%" src="https://www.youtube.com/embed/SdIzSVhAas8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen> Seu navegador não suporta a TAG video... </iframe>
                <div class="max-w-xl flex-auto">
                <h3 class="-mt-8 lg:mt-0 text-lg font-bold leading-8 tracking-tight text-gray-500 text-center lg:text-left">É mais vantajoso receber como PF ou como PJ?</h3>
                <p class="text-base leading-7 text-gray-600 text-center lg:text-left">Dev Pleno</p>
                <p class="mt-6 text-base leading-7 text-gray-600">Ao longo do vídeo, abordaremos aspectos relevantes, como as implicações fiscais de receber como PJ ou PF, os encargos trabalhistas e previdenciários envolvidos em cada opção, além das vantagens e desvantagens em termos de controle financeiro, flexibilidade e perspectivas de crescimento.</p>
                </div>
            </div>

            {/* More people */}
            </div>
        </div>
        </div>

    )
}

export default Videos