import React from "react"

const Depoimentos = () => {
    return (
        <div class="relative isolate bg-black pb-32 pt-24 sm:pt-5">
        <div class="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl" aria-hidden="true">
            <div class="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#777777] to-[#2b2b2b]"></div>
        </div>
        <div class="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end" aria-hidden="true">
            <div class="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#777777] to-[#2b2b2b] xl:ml-0 xl:mr-[calc(50%-12rem)]"></div>
        </div>
        <div class="mx-auto max-w-7xl px-6 lg:px-8" id='depoimentos'>
            <div class="mx-auto max-w-xl text-center">
            <h2 class="text-lg font-semibold leading-8 tracking-tight text-gray-300">Depoimentos</h2>
            <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-3xl">Nós impulsionamos o sucesso de mais de 30 empresas...</p>
            </div>
            <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
            <figure class="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1">
                <blockquote class="p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900">
                <p>“A equipe de marketing demonstrou grande expertise em estratégias de publicidade digital, o que nos ajudou a atingir nosso público-alvo de forma eficaz e gerar um retorno positivo sobre o investimento.”</p>
                </blockquote>
                {/*<figcaption class="flex items-center gap-x-4 border-gray-900/10 px-12 py-4">
                <div class="flex-auto">
                    <div class="font-semibold">- Lucas Mendes</div>
                </div>
                </figcaption>*/}
            </figure>
            <div class="space-y-8 xl:contents xl:space-y-0">
                <div class="space-y-8 xl:row-span-2">
                <figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
                    <blockquote class="text-gray-900">
                    </blockquote>
                    <p>“Estamos extremamente satisfeitos com a consultoria de marketing fornecida pela AzzaMarketing. Suas recomendações estratégicas nos permitiram alcançar um crescimento notável em um curto espaço de tempo.”</p>
                    <figcaption class="mt-6 flex items-center gap-x-4">
                    <div>
                        <div class="font-semibold">- Isabella Santos</div>
                    </div>
                    </figcaption>
                </figure>

                <figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
                    <blockquote class="text-gray-900">
                    <p>“Graças aos serviços de marketing da empresa, nossa presença online aumentou significativamente, resultando em um aumento impressionante nas vendas.”</p>
                    </blockquote>
                    <figcaption class="mt-6 flex items-center gap-x-4">
                    <div>
                        <div class="font-semibold">- Gabriel Oliveira</div>
                    </div>
                    </figcaption>
                </figure>

                {/* mais depoimentos */}
                </div>
                <div class="space-y-8 xl:row-start-1">
                <figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
                    <blockquote class="text-gray-900">
                    <p>“A empresa de marketing superou todas as nossas expectativas! Seus esforços resultaram em um aumento significativo no tráfego do nosso site e na geração de leads qualificados.”</p>
                    </blockquote>
                    <figcaption class="mt-6 flex items-center gap-x-4">
                    <div>
                        <div class="font-semibold">- Laura Costa</div>
                    </div>
                    </figcaption>
                </figure>

                {/* mais depoimentos */}
                </div>
            </div>
            <div class="space-y-8 xl:contents xl:space-y-0">
                <div class="space-y-8 xl:row-start-1">
                <figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
                    <blockquote class="text-gray-900">
                    <p>“A AzzaMarketing foi fundamental na construção da nossa marca. Seu trabalho criativo e abordagem inovadora nos ajudaram a nos destacar no mercado e conquistar a fidelidade dos clientes.”</p>
                    </blockquote>
                    <figcaption class="mt-6 flex items-center gap-x-4">
                    <div>
                        <div class="font-semibold">- Matheus Almeida</div>
                    </div>
                    </figcaption>
                </figure>

                {/* mais depoimentos */}
                </div>
                <div class="space-y-8 xl:row-span-2">
                <figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
                    <blockquote class="text-gray-900">
                    <p>“Gostaríamos de expressar nossa gratidão à equipe de marketing por sua dedicação e empenho. Seu suporte contínuo nos permitiu expandir nossos negócios e nos estabelecer como líderes no setor.”</p>
                    </blockquote>
                    <figcaption class="mt-6 flex items-center gap-x-4">
                    <div>
                        <div class="font-semibold">- Sofia Rodrigues</div>
                    </div>
                    </figcaption>
                </figure>

                <figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
                    <blockquote class="text-gray-900">
                    <p>“Recomendamos fortemente os serviços de marketing dessa empresa. Eles entenderam perfeitamente nossa visão e transformaram nossas ideias em campanhas eficientes, gerando um crescimento notável para nosso negócio.”</p>
                    </blockquote>
                    <figcaption class="mt-6 flex items-center gap-x-4">
                    <div>
                        <div class="font-semibold">- Guilherme Ferreira</div>
                    </div>
                    </figcaption>
                </figure>

                {/* mais depoimentos */}
                </div>
            </div>
            </div>
        </div>
        </div>

    )
}

export default Depoimentos