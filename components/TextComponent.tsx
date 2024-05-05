import React from 'react'
import { Saira } from "next/font/google";

const saira = Saira({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-saira'
})

type Props = {}

function TextComponent(props:any) {
  return (
    <div>
        <p className={`${saira.variable} font-sans px-4 py-3`}>{props.text}</p>
    </div>
  )
}

export default TextComponent