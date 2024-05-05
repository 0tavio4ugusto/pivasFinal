import React, { Component } from 'react'
import { Saira } from "next/font/google";

const saira = Saira({
    subsets: ['latin'],
    weight: ['500'],
    variable: '--font-saira'
  })

 
const data = [
    {
      name: 'Cellbit',
      img: '/reviews/celllbit.png',
      review: 'Ola eu sou o Cellbit criador de ordem paranormal',
      revieww: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sed nemo reiciendis? In assumenda, accusantium alias dolorum sequi facilis, maiores error, fugiat iste odit omnis? Beatae est ducimus ullam optio!',
      data: '01/03/1990',
      rating:'⭐⭐⭐⭐',
    },
    {
      name: 'Hamster',
      img: '/reviews/hamster.png',
      review: 'Nossa eu to muito triste papo reto',
      revieww: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sed nemo reiciendis? In assumenda, accusantium alias dolorum sequi facilis, maiores error, fugiat iste odit omnis? Beatae est ducimus ullam optio!',
      data: '01/03/1990',
      rating:'⭐⭐⭐⭐⭐',
      

    },
    {
      name: 'Lebron',
      img: '/reviews/lebron.jpg',
      review: 'you are my sunshine, my only sunshine',
      revieww: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sed nemo reiciendis? In assumenda, accusantium alias dolorum sequi facilis, maiores error, fugiat iste odit omnis? Beatae est ducimus ullam optio!',
      data: '01/03/1990',
      rating:'⭐⭐⭐⭐',

    },
    {
      name: 'Messi',
      img: '/reviews/messi.jpg',
      review: 'cu de bebado n tem dono',
      revieww: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sed nemo reiciendis? In assumenda, accusantium alias dolorum sequi facilis, maiores error, fugiat iste odit omnis? Beatae est ducimus ullam optio!',
      data: '01/03/1990',
      rating:'⭐⭐⭐⭐⭐',

    },
  ]


export default class Review extends Component {
  render() {
    return (
      <div>
            {data.map((d)=> (
              <div className='tudo flex flex-col text-left mx-10'>
              <div className='partedecima flex flex-row'>
                  <div className='foto'></div>
                     <img src={d.img} alt="a" className="h-12 w-12 rounded-full"/>

                  <div className='coisas pl-5'>
                    <div className='nome '>
                        <p className={`${saira.variable} font-sans text-xl uppercase`}>{d.name}</p>
                    </div>
                    <div className='data'>
                        <p className={`${saira.variable} font-sans  text-base`}>{d.data}</p>

                    </div>

                  </div>
              </div>
              <div className='estrelas text-base mt-4'>
               <p className='text-base'>{d.rating}</p>
              </div>
              <div className='review'>
                  <p className={`${saira.variable} font-sans p- text-lg`}>--"{d.revieww}"</p>
          
              </div>

              <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-400' />
          
          </div>
            ))}

      </div>
    )
  }
}


