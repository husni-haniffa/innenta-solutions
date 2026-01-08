import { testomonials } from '@/lib/constants/testomonials'
import React from 'react'
import MarqueeRow from '../trust/MarqueeRow'
import Image from 'next/image'
const Testimonials = () => {
  return (
    <div className='flex flex-col gap-9'>
        <div className='flex justify-center items-center'>
          <header className='text-center border w-fit px-4 py-2 rounded-lg text-lg'>Testimpmials</header>
        </div>
         <div className='flex flex-col gap-6'>
            <header className='text-center font-bold text-3xl md:text-4xl lg:text-5xl'>
                wall of love
            </header>
            
        </div>
        <div>
            <MarqueeRow 
      items={testomonials.map((client) => (
        <div key={client.id} className='border px-4 py-4 rounded-xl'>
            <p className='text-muted-foreground'>"{client.review}"</p>
            
            <div className='flex gap-2 py-4'>
               <Image 
                                      src={'/avatar.jpeg'} 
                                      alt='Innenta Solutions Logo' 
                                      width={50} 
                                      height={50}
                                      className='rounded-full'/> 
              <div className='flex flex-col'>
              <header className=''>
              {client.name}
              </header>
              <p className='font-semibold'>{client.position} @{client.client}</p>
              </div>
              
            </div>
            
            
            
          </div>
      ))}
      direction="right"
      speed={50}
    />
        </div>
    </div>
  )
}

export default Testimonials