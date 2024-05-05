import TextComponent from "@/components/TextComponent";
import Logo from '../public/images/logo1.webp'
import Button from "../components/Button"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { Saira } from "next/font/google";

const saira = Saira({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-saira'
})

const data = [
  {
    name: 'Cellbit',
    img: '/reviews/celllbit.webp',
    review: 'Ola eu sou o Cellbit criador de ordem paranormal'
  },
  {
    name: 'Hamster',
    img: '/reviews/hamster.webp',
    review: 'Nossa eu to muito triste papo reto'
  },
  {
    name: 'Lebron',
    img: '/reviews/lebron.webp',
    review: 'you are my sunshine, my only sunshine'
  },
  {
    name: 'Messi',
    img: '/reviews/messi.webp',
    review: 'cu de bebado n tem dono'
  },
]

const pinto = [
  {
    name: 'Cellbit',
    img: '/images/mulher.webp',
    review: 'Ola eu sou o Cellbit criador de ordem paranormal'
  },
  {
    name: 'Hamster',
    img: '/images/homem.webp',
    review: 'Nossa eu to muito triste papo reto'
  },
  {
    name: 'Lebron',
    img: '/images/homem2.webp',
    review: 'you are my sunshine, my only sunshine'
  }
]

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
  }
  return (
   <main className=" m-0 p-0 flex flex-col items-center justify-between text-amber-50 text-center text-3xl bg-fixed bg-cover bg-paralax">

          <div className=" bg-[rgba(0,0,0,0.5)] flex flex-col md:flex-row space-y-8 items-center justify-center m-auto h-screen py-5 px-5 rounded-2xl">

          <img className="object-cover md:h-2/5" src={Logo.src} alt="a" />
          <TextComponent text={[ "Nos próximos 30 dias você vai criar um segundo salário com " ,<span className="text-amber-300 animate-pulse uppercase"> Fundos Imobiliário</span>,"!"]}/>

        </div>
        <div className=" bg-[rgba(0,0,0,0.5)] flex w-full justify-center items-center">

        <div className="relative w-full md:max-w-[1200px]">
        <div className="absolute -z-10 w-full">
        </div>
       

        <div className="flex flex-col md:flex-row space-y- items-center justify-start m-auto h-full py-5 px-5  rounded-2xl  text-2xl">
          <TextComponent text={["Assista à aula de introdução",<span className="text-amber-300 animate-pulse"> GRATUITAMENTE </span>,"e você vai aprender 3 coisas:"]}/>
          <TextComponent text={["1 - Como começar do", <span className="text-amber-300 animate-pulse"> ABSOLUTO ZERO </span> ,"e em menos de 30 dias já estar ganhando dinheiro;"]}/>
          <TextComponent text={["2 - Qual melhor jeito de iniciar nesse mercado utilizando apenas o seu celular;"]}/>
          <TextComponent text={["3 - Como que mesmo saindo do zero você pode conquistar a liberdade financeira que você e sua família merecem."]}/>
        </div>

        <div className="flex flex-col space-y-8 items-center justify-start m-auto h-full py-5 px-5  rounded-2xl text-2xl">
          <video className="w-full md:w-1/2 lg:w-1/2" autoPlay loop muted>
            <source src='/video.mp4' />
          </video>
          <Button text="Eu quero criar um segundo salário"></Button>
        </div>

        <div className=" text-2xl">
        <TextComponent text={["Temos alunos que já ganham mais dinheiro com",<span className="text-amber-300 animate-pulse"> FUNDOS IMOBILIÁRIOS </span>,"do que com o salário do seu trabalho!"]}/>
        
        <div className="h-full bg-fixed bg-cover bg-paralaxwhite text-amber-950 text-2xl mt-16 py-16">
          <TextComponent text={["Essas mensagens que você está vendo são de alunos que, assim como você, começaram do absoluto zero, e graças ao Seu Segundo Salário Com Fundos Imobiliários, estão vendo seu segundo salário aumentar todos os meses!"]}/>
          <div className="mt-16 mb-16">
            <Slider {...settings}>

            {data.map((d)=> (
              <div className="bg-amber-50 h-[400px] max-w-[350px] text-amber-900 rounded-xl">              
                <div className="rounded-xl bg-amber-100 flex justify-center">
                  <img src={d.img} alt="a" className="h-44 w-44 rounded-full"/>
                </div>
                <div className="flex flex-col justify-center items-center gap-4 p-4">
                  <p className={`${saira.variable} font-sans pt-8 text-4xl`}>{d.name}</p>
                  <p className={`${saira.variable} font-sans p- text-lg`}>--"{d.review}"</p>
                </div>
              </div>
            ))}
            </Slider>

          </div>          

         </div>

         <div className="mt-16">
              <TextComponent text={["Você ", <span className="text-amber-300 animate-pulse"> TAMBÉM </span>, " pode criar uma nova fonte de renda! Abaixo você verá resultados de alunos que possuem características diferentes e profissões diferentes, mas que tem algo em comum:", <span className="text-amber-300 animate-pulse"> TODOS </span>, " criaram um segundo salário graças ao método", <span className="text-amber-300 animate-pulse"> SEU SEGUNDO SALÁRIO </span>]}/>

            </div>

         <div className="mt-16 mb-16">
            <Slider {...settings}>

            {data.map((d)=> (
              <div className="bg-amber-50 h-[400px] max-w-[350px] text-amber-900 rounded-xl">              
                <div className="rounded-xl bg-amber-100 flex justify-center">
                  <img src={d.img} alt="a" className="h-44 w-44 rounded-full"/>
                </div>
                <div className="flex flex-col justify-center items-center gap-4 p-4">
                  <p className={`${saira.variable} font-sans pt-8 text-4xl`}>{d.name}</p>
                  <p className={`${saira.variable} font-sans p- text-lg`}>--"{d.review}"</p>
                </div>
              </div>
            ))}
            </Slider>

          </div>
          
           <div className="flex items-center justify-center animate-bounce text-amber-300 mt-8">
            
           <svg className="fill-current" width="100" height="100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
               <g>
                   <path fill="none" d="M0 0h24v24H0z"/>
                   <path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"/>
                </g>
            </svg>
            
          </div>

          <div className="text-4xl my-10">
          <TextComponent text={["COMO CONSTRUIR SEU ", <span className="animate-pulse text-amber-300">SEGUNDO SALÁRIO</span>, " COM FUNDOS IMOBILIÁRIOS?"]}/>
            
            <div className="text-xl text-left">
            <TextComponent text={["Mesmo começando do ABSOLUTO ZERO, você não precisa de muita coisa. Para te falar a verdade, você precisa apenas:"]}/>
            <TextComponent text={["● De uma ",<span className="px-2 bg-amber-50 text-black rounded-lg">conta aberta</span>," na  ",<span className="px-2 bg-amber-50 text-black rounded-lg">corretora</span>,"  (que você aprenderá a abrir dentro do nosso treinamento);"]}/>

            <TextComponent text={["● De um ",<span className="px-2 bg-amber-50 text-black rounded-lg">celular</span>," com conexão a ",<span className="px-2 bg-amber-50 text-black rounded-lg">internet</span>," (qualquer celular basta);"]}/>

            <TextComponent text={["● De uma  ",<span className="px-2 bg-amber-50 text-black rounded-lg">boa metodologia</span>," para investir nos ",<span className="px-2 bg-amber-50 text-black rounded-lg">melhores</span>," fundos imobiliários (que é onde está o FOCO do nosso método)."]}/>
                        
            <div className="flex flex-col justify-center content-center">
             <img className="w-80 h-80 self-center" src="/images/joao.webp" alt="" />

            </div>

            </div>
          </div>

        </div>

        <div className="bg-paralaxwhite bg-fixed bg-cover text-amber-950">

          <div className="text-xl text-justify">
          
          <TextComponent text={["Se assim como eu, você quer ganhar mais ",<span className="text-amber-600 animate-pulse uppercase"> tempo com sua família </span>,", quer poder viajar sem depender do salário do seu trabalho, não quer mais aturar um ",<span className="text-amber-600 animate-pulse uppercase">chefe chato ou um trabalho</span>," que você não vê mais sentido mas não sabe como dar o próximo passo, não se preocupe:"]}/>
            
          </div>

          <div className="text-3xl">
            <TextComponent text={[<span>É COMPLETAMENTE POSSÍVEL TRANSFORMAR SUA VIDA COM FUNDOS IMOBILIÁRIOS!</span>]}/>

          </div>

          <div className="text-xl text-justify">
          <TextComponent text={["Isso pode parecer contraditório, afinal, fomos ensinados que o rico fica cada vez mais rico e o pobre fica cada vez mais pobre, mas acredite: é possível sim começar do zero e viver a vida dos seus sonhos."]}/>
          </div>

          <div className="text-3xl">
            <TextComponent text={[<span>COMO? SIMPLES: ENRIQUECENDO COMO OS RICOS ENRIQUECERAM, INVESTINDO!</span>]}/>
          </div>

          <div className="flex flex-col justify-center content-center">
             <img className="w-80 h-80 self-center" src="/images/ricardo.webp" alt="" />

            </div>

          <div className="text-xl text-justify">
          <TextComponent text={[<span className="">SIM!</span>," Os ricos enriquecem cada vez mais investindo, mas eles também começaram do zero. Entenda o porquê e como você pode enriquecer também: Existe um mito na sociedade de que a única forma de enriquecer é explorando os outros, enganando e roubando. Certamente você já ouviu algum comentário duvidoso sobre alguém que conseguiu comprar uma casa nova, um carro do ano ou até mesmo um celular de última geração. E claro que existem muitas pessoas más no mundo mas eu quero te mostrar um outro caminho, a alternativa que as pessoas mais ricas do mundo seguiram e seguem até hoje: investir no mercado imobiliário de alto padrão, através de fundos imobiliários!"]}/>
          </div>

        </div>

        <div className=" text-2xl">
          <TextComponent text={[<span>Veja o que as pessoas estão falando sobre o método seu segundo salário:</span>]}/>

        </div>

        <div className="mt-10">
        <div className="mt-16 mb-16">
            <Slider {...settings}>

            {pinto.map((p)=> (
              <div className="h-[400px] max-w-[350px] text-amber-900 rounded-xl">              
                <div className="rounded-xl bg-amber-100 flex justify-center">
                  <img src={p.img} alt="" />
                </div>
                <div className="flex flex-col justify-center items-center gap-4 p-4">
                 
                </div>
              </div>
            ))}
            </Slider>

          </div>
        </div>

        <div className=" flex flex-col bg-paralaxwhite bg-fixed bg-cover text-amber-950 rounded-lg w1">
          <TextComponent text={[<span>O QUE EXATAMENTE VOCÊ RECEBE AO GARANTIR SEU ACESSO AO SEU SEGUNDO SALÁRIO COM FUNDOS IMOBILIÁRIOS?</span>]}/> 

          <div className="text-center mx-4">

            <TextComponent text={[<span className="text-lg"> ▶ SEU PRIMEIRO INVESTIMENTO EM FUNDOS IMOBILIÁRIOS - </span>, <span className="text-amber-400 text-xl">VALE R$497,00</span>]}/>

            <TextComponent text={[<span className="text-lg"> ▶ OS MELHORES FUNDOS IMOBILIÁRIOS -  </span>, <span className="text-amber-400 text-xl">VALE R$797,00</span>]}/>

            <TextComponent text={[<span className="text-lg"> ▶ COMO NASCE UM FUNDO IMOBILIÁRIO - </span>, <span className="text-amber-400 text-xl">VALE R$197,00</span>]}/>

            <TextComponent text={[<span className="text-lg"> ▶ REGRAS DOS FUNDOS IMOBILIÁRIOS - </span>, <span className="text-amber-400 text-xl">VALE R$447,00</span>]}/>

            <TextComponent text={[<span className="text-lg"> ▶ ATALHO LUCRATIVO: EVITE OS 7 PRINCIPAIS ERROS QUE TODO MUNDO COMETE AO INICIAR NOS FUNDOS IMOBILIÁRIOS E GANHE DINHEIRO MAIS RÁPIDO - </span>, <span className="text-amber-400 text-xl">VALE R$1497,00</span>]}/>

          </div>

          <TextComponent text={[<span className="text-3xl text-red-500 line-through"> VALOR TOTAL: R$3435,00 </span>, <span className="text-green-500 text-xl"></span>]}/>
          
          <TextComponent text={[<span className="text-3xl">HOJE, SOMENTE AQUI NESSA PÁGINA, VOCÊ PODE TER ACESSO À TUDO ISSO POR UM PREÇO RIDÍCULO</span>]}/>
          
          <TextComponent text={[<span className="text-3xl text-emerald-600">12x de</span>,<span className="text-5xl text-emerald-600">  9,74</span>]}/>
          <TextComponent text={[<span className="text-3xl text-emerald-600">ou R$97,00 à vista</span>]}/>

            <div className="mx-2 md:mx-12">
              <Button text="QUERO MEU ACESSO AO SEU SEGUNDO SALÁRIO COM FUNDOS IMOBILIÁRIOS"/>

            </div>




        </div>

        <TextComponent text={[<span className="text-3xl text-amber-400">GARANTIA SEU SEGUNDO SALÁRIO COM FUNDOS IMOBILIÁRIOS!</span>]}/>

            <div className="text-xl textju">
              <TextComponent text={["Se no período de ",<span className="bg-white text-amber-950 px-2 rounded-lg ">30 dias</span>," após finalizar o curso seu segundo salário com fundos imobiliários, você não estiver de fato com um segundo salário na sua vida, basta enviar uma mensagem para o número ",<span className="bg-white text-amber-950 px-2 rounded-lg">(11)94827-2421</span>," solicitando reembolso, que seu investimento será ",<span className="bg-white text-amber-950 px-2 rounded-lg">100% reembolsado</span>," . Sem nenhum questionamento e nem perguntas. Essa é a nossa garantia, para mostrarmos que confiamos na nossa metodologia."]}/>

            </div>

        <TextComponent text={[<span className="text-3xl text-amber-400">OU VOCÊ CRIA UMA NOVA FONTE DE RENDA EM 30 DIAS, OU SEU DINHEIRO DE VOLTA!</span>]}/>

        <div className="bg-black rounded-xl text-left flex  flex-col justify-center items-center ">
          <img className="md:max-w-[600px]" src="/pivasf2.webp" alt="" />
          <div className="text-center">
            <TextComponent text={[<span className="text-3xl text-amber-400">QUEM SOU EU?</span>]}/>

            </div>
            <TextComponent text={[<span className="text-lg text-amber-50 text-left">Meu nome é Gabriel Pivantti mas todos me conhecem apenas por "Pivantti". Estou no mundo dos investimentos há 8 anos, e já são mais de R$2 milhões em investimentos. </span>]}/>
            <TextComponent text={[<span className="text-lg text-amber-50 text-left">Meus próprios resultados me deixam orgulhoso, mas o que eu mais gosto de “ostentar” são os resultados dos meus alunos que através do Seu Segundo Salário com Fundos Imobiliários, conseguiram parar de depender da CLT e finalmente viver com liberdade e conforto, com a renda passiva dos fundos imobiliários.</span>]}/>

            <div className="mt-4 mx-2 md:mx-12 flex justify-center">
          
            <Button text="QUERO FAZER PARTE DO MÉTODO SEU SEGUNDO SALÁRIO"/>
          </div>
          
          

        </div>

        <div className=" rounded-lg bg-paralaxwhite mt-4 text-2xl">
              <TextComponent text={[<span className="text-amber-950">"Esses são  mais alguns dos feedbacks que eu recebo diariamente:"</span>
]}/>

<div className="mt-8">
            <Slider {...settings}>

            {data.map((d)=> (
              <div className="bg-amber-50 h-[400px] max-w-[350px] text-amber-900 rounded-xl">              
                <div className="rounded-xl bg-amber-100 flex justify-center">
                  <img src={d.img} alt="a" className="h-44 w-44 rounded-full"/>
                </div>
                <div className="flex flex-col justify-center items-center gap-4 p-4">
                  <p className={`${saira.variable} font-sans pt-8 text-4xl`}>{d.name}</p>
                  <p className={`${saira.variable} font-sans p- text-lg`}>--"{d.review}"</p>
                </div>
              </div>
            ))}
            </Slider>

          </div>

            </div>

         
        

        <div className="text-amber-950 py-6 rounded-xl">

           <div className="text-amber-50"> 
            <TextComponent text={["PERGUNTAS FREQUENTES:"]}/>

            </div> 

          <div className="text-xl bg-amber-300 rounded-xl m-10">
            <TextComponent text={[<span className="uppercase"> ► O que é o Seu Segundo Salário Com Fundos Imobiliários? </span>]}/>

            <div className="text-amber-950">
            <TextComponent text={[<span> O método seu segundo salário é uma mentoria para quem quer criar uma nova fonte de renda através dos investimentos, investimentos no mercado imobiliários</span>]}/>

            </div>      

          
          </div>

          <div className="text-xl bg-amber-300 rounded-xl m-10">
            <TextComponent text={[<span className="uppercase"> ► Para quem é esse método? </span>]}/>

            <div className="text-amber-950">
            <TextComponent text={[<span> Pra quem está cansado de depender de uma única fonte de renda, e busca mais conforto e qualidade de vida. Você não precisa de nada de especial, precisa apenas ter força de vontade e seguir a nossa metodologia, que podemos garantir que você terá resultados! </span>]}/>

            </div>      

          
          </div>

          <div className="text-xl bg-amber-300 rounded-xl m-10">
            <TextComponent text={[<span className="uppercase"> ► Como funciona o suporte? </span>]}/>

            <div className="text-amber-950">
            <TextComponent text={[<span> suporte acontece via WHATSAPP, no número: (11)94827-2421</span>]}/>

            </div>      

          
          </div>

          <div className="text-xl bg-amber-300 rounded-xl m-10">
            <TextComponent text={[<span className="uppercase"> ► Como funciona a Garantia? </span>]}/>

            <div className="text-amber-950">
            <TextComponent text={[<span>  A garantia é simples: se ao assistir todas nossas aulas, você não ter criado uma nova fonte de renda em no máximo 30 dias, nós reembolsamos 100% de volta do seu investimento</span>]}/>

            </div>      

          
          </div>

          <div className="text-xl bg-amber-300 rounded-xl m-10">
            <TextComponent text={[<span className="uppercase"> ► Não tenho computador, consigo fazer tudo apenas pelo celular? </span>]}/>

            <div className="text-amber-950">
            <TextComponent text={[<span>  Sim, inclusive temos muitas aulas práticas dentro do curso, onde ensinamos filmando a própria tela do celular. Não é necessário computador e nem nootbook, o seu celular basta!</span>]}/>

            </div>      

          
          </div>

          <div className="mx-2 md:mx-12 animate-">
              <Button text="QUERO CRIAR UMA NOVA FONTE DE RENDA COM O MÉTODO SEU SEGUNDO SALÁRIO COM FUNDOS IMOBILIÁRIOS"/>

          </div>         
            
          
        </div>

        <div className="mt-16">
        <TextComponent text={[<span className="uppercase"> ► Está com dúvidas? </span>]}/>
        </div>
        <div className='relative'>
          <div className=""></div>
          <button className={`${saira.variable} my-8 relative font-sans py-2 px-8 bg-green-500 text-xl rounded-full lg:py-4 lg:px-10 `}>
          <div className=' flex flex-row items-center text-amber-50'>
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
          
            <div>
              <p className={`${saira.variable} font-sans pl-4 py-3`}>{"Clique aqui e fale com nosso time!"}</p>
            </div>
          </div>
    </button>
    </div>
        

      </div>
      

            
      </div>

   </main>
  );
}
