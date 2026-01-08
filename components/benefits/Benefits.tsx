"use client"
import Image from 'next/image'
import { Button } from '../ui/moving-border'
import { benefits } from '@/lib/constants/benefits'
import ROI from '../roi/ROI'
import { motion } from 'framer-motion'

const Benefits = () => {
  return (
    <div className='min-h-screen flex flex-col gap-9 py-28' id='benefits'>
        <div className='flex justify-center items-center'>
            <header className='text-center border w-fit px-4 py-2 rounded-lg text-lg'>
              Benefits
            </header>
        </div>
        <div className='flex flex-col gap-6'>
            <header className='text-center font-bold text-3xl md:text-4xl lg:text-5xl'>
              Membership Benefits
            </header>
            <p className='text-center'>
              Thoughtfully crafted perks that support long-term growth.
            </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
            {benefits.map((benefit) => (
              <div key={benefit.id} className="flex flex-col justify-start items-center border hover:border-blue-500 rounded-lg px-6 py-8">
                <div className="flex flex-col gap-4 items-center text-center mb-4">
                  <div className="text-blue-500">
                    <benefit.icon size={75} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-xl md:text-2xl">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm md:text-base text-center">
                  {benefit.description}
                </p>
              </div>
            ))}
        </div>
        <div className='py-24'>
          <ROI/>
        </div>
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

export default Benefits