"use client"
import { Button } from '../ui/moving-border'
import Trust from '../trust/Trust'
import Image from 'next/image'
import { services } from '@/lib/constants/services'
import { Label } from '../ui/label'
import { motion } from 'framer-motion'
import { handleBooking } from '@/lib/constants/routes'
const Hero = () => {
  return (
    <div className='min-h-screen'>
        <motion.div className='flex flex-col gap-3 items-center text-center py-16'
        initial={{ opacity: 0, y: -50 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ amount: 0.1 }}
transition={{ duration: 0.7, ease: "easeOut" }}>
            <header className='text-3xl md:text-4xl lg:text-5xl font-bold'>Build Smarter Digital Experiences</header>
            <p className='text-muted-foreground'>
                Design, development, and digital growth solutions — all in one place.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 py-6'>
                {services.map((service) => (
                    <div key={service.id} className='flex gap-2 justify-center items-center'>
                        <service.icon className='text-blue-600'/>
                        <Label className='text-lg'>{service.title}</Label>
                    </div>
                ))}
            </div>
        
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ amount: 0.2 }}
transition={{ duration: 0.6, ease: "easeOut" }}>
                <motion.div className='flex justify-center items-center py-6'
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9}}
        >
            <Button size={'xl'} onClick={() => handleBooking()}>
              <Image 
                src={'/founder.jpeg'} 
                alt='Founder Image' 
                width={25} 
                height={25}
                className='rounded-full'/> 
                Book a call with Mulhima
            </Button>
        </motion.div>
            <Trust/>
        </motion.div>
    </div>
  )
}

export default Hero