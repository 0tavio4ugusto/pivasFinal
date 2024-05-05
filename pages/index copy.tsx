import Head from "next/head";
import Image from "next/image";
import background from "./bg.jpeg"
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import TextComponent from "@/components/TextComponent";

export default function Home() {
  return (
    <div className="text-amber-50 h-screen snap-y snap-mandatory overflow-scroll z-0 myFont.variable">
      <div>
        <div className="absolute -z-10 w-full">
          <Image src={background} alt="bg-image" className="w-full" width={1000} height={1000}/>

        </div>        
        
          {/* Texto motivacional sec 1 */}
          <div className={` font-sans h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden`}>
                  <div className="text-2xl">
                    <div className="m-10 bg-red-300 p-20">logo do bgl</div>
                    <TextComponent text={[ "Qualquer pessoa pode começar uma nova fonte de renda com" ,<span className="text-amber-300 animate-pulse"> FUNDOS IMOBILIÁRIOS</span>,"!"]}/>
                  </div>
          </div>      
        {/* Texto de intruções */}
        {/* video  sec2 */}
        <section className="content-evenly h-screen flex flex-col justify-center text-justify md:flex-row md:items-center">
          <div className="bg-red-300 p-20 m-10 h-96 w-2/5">video do bgl</div>
          <div className="flex-col md:max-w-80">
            <TextComponent text={[<span className="text-lg"> 1 - Como começar do ABSOLUTO ZERO e em menos de 30 dias já tar ganhando dinheiro;</span>]}/>
            <TextComponent text={[<span className="text-lg"> 2 - Qual melhor jeito de iniciar nesse mercado utilizando APENAS SEU CELULAR;</span>]}/>
            <TextComponent text={[<span className="text-lg"> 3 - Como que mesmo saindo do ZERO você pode conquistar a LIBERDADE FINANCEIRA que você e sua família merecem.</span>]}/>


          </div>

        </section>

        {/* botão para compra */}
        {/* mais um texto*/}
        {/* depoimentos */}
        {/* Mais um texto */}
        {/* mais depoimentos */}
        {/* Mais um botão de compra */}

      </div>      
    </div>
  );
}
