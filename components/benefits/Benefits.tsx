"use client"
import Image from 'next/image'
import { Button } from '../ui/moving-border'
import { benefits } from '@/lib/constants/benefits'
import ROI from '../roi/ROI'
import { motion } from 'framer-motion'
import { handleBooking } from '@/lib/constants/routes'

const Benefits = () => {
  return (
    <div className='min-h-screen py-16 scroll-mt-8 lg:scroll-mt-44' id='benefits'>
      <motion.div className='flex flex-col gap-6 justify-center items-center'  
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
          <header className='text-center border w-fit px-4 py-2 rounded-lg md:text-lg'>
            Benefits
          </header>
          <header className='text-center font-bold text-3xl md:text-4xl lg:text-6xl'>
          Membership Benefits
        </header>
        <p className='text-center text-muted-foreground text-sm md:text-base lg:text-xl'>
          Thoughtfully crafted perks that support long-term growth.
        </p>
      </motion.div>


      <motion.div className='grid grid-cols-1 md:grid-cols-3 gap-6 py-8'   
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.3 } }
        }}
      >
        {benefits.map((benefit) => (
          <motion.div key={benefit.id} 
            className="flex flex-col justify-start items-center border hover:border-blue-500 rounded-lg px-6 py-8"  
            variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
            }}
          >
            <div className="flex flex-col gap-4 items-center text-center mb-4">
              <div className="text-blue-500">
                <benefit.icon size={75} strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-lg md:text-xl lg:text-2xl">
                {benefit.title}
              </h3>
            </div>

            <p className="text-muted-foreground text-sm md:text-base lg:text-lg text-center">
              {benefit.description}
            </p>

          </motion.div>
        ))}
      </motion.div>

      <div className='py-8'>
        <ROI/>
      </div>

      <motion.div className='flex justify-center items-center py-8'
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9}}
      >
        <Button size={'lg'} onClick={() => handleBooking()}>
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