import React from 'react'
import { Button } from '../ui/moving-border'
import Image from 'next/image'
import { motion } from 'framer-motion'
const CTA = () => {
  return (
   <div className='flex flex-col justify-center items-center border border-gray-800 rounded-xl p-6 h-full bg-black/20 gap-4'>
  <header className='text-4xl md:text-5xl font-bold text-center'>
    Ready to get started?
  </header>
  <p className='text-base md:text-lg text-gray-400 text-center max-w-md'>
    Schedule a call to discuss how we can help transform your business
  </p>
  <motion.div className='flex justify-center items-center py-6'
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9}}
        >
            <Button size={'xl'}>
              <Image 
                src={'/founder.jpeg'} 
                alt='Founder Image' 
                width={25} 
                height={25}
                className='rounded-full'/> 
                Book a call with Mulhima
            </Button>
        </motion.div>
</div>
  )
}

export default CTA