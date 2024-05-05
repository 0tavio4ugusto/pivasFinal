import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky p-5 top-0 flex items-start justify-center max-w-7xl mx-auto'>
        
        <motion.div 
        initial={{
            y: -500,
            scale:0.6,
            opacity:0            
        }}
        animate={{
            y: 1,
            scale: 1,
            opacity: 1
        }}
        transition={{
            duration:.8,
        }}>
      
            <div></div>
                <div>Logo da Coisa</div>
            <div></div>
        </motion.div>
       
    </header>
  )
}