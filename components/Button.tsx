import React from 'react'
import { Saira } from "next/font/google";

const saira = Saira({
    subsets: ['latin'],
    weight: ['500'],
    variable: '--font-saira'
  })

type Props = {}

const Button = (props: any) => {
  return (
    <div className='relative'>
        <div className=""></div>
    <button className={`${saira.variable} animate-bounce my-8 relative font-sans py-2 px-8 bg-amber-400 text-xl rounded-xl lg:py-4 lg:px-10 `}>
        
        <div className='text-amber-950 uppercase'>
            {props.text}
          
            
        </div>
    </button>
    </div>
  )
}

export default Button