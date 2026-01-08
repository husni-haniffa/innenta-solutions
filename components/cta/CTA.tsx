import React from 'react'
import { Button } from '../ui/moving-border'
import Image from 'next/image'
const CTA = () => {
  return (
   <div className='flex flex-col justify-center items-center border border-gray-800 rounded-xl p-6 h-full bg-black/20 gap-4'>
  <header className='text-4xl md:text-5xl font-bold text-center'>
    Ready to get started?
  </header>
  <p className='text-base md:text-lg text-gray-400 text-center max-w-md'>
    Schedule a call to discuss how we can help transform your business
  </p>
  <Button size={'xl'} className='flex items-center gap-3 w-full max-w-xs'>
    <Image 
      src={'/founder.jpeg'} 
      alt='Mulhima - Founder' 
      width={32} 
      height={32}
      className='rounded-full'
    /> 
    Book a call with Mulhima
  </Button>
</div>
  )
}

export default CTA