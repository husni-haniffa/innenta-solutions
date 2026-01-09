import { Button } from '../ui/moving-border'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { handleBooking } from '@/lib/constants/routes'

const CTA = () => {
  return (
  <motion.div className='flex flex-col justify-center items-center border rounded-xl py-16 mb-16 bg-black/20 gap-6 scroll-mt-24' id='contactus'
    initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ amount: 0.1 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    <header className='text-3xl md:text-4xl lg:text-6xl font-bold text-center px-4'>
      Ready to get started?
    </header>
    <p className='text-sm md:text-base lg:text-xl text-muted-foreground text-center leading-relaxed px-6 max-w-2xl'>
      Schedule a call to discuss how we can help transform your business
    </p>
  <motion.div className='flex justify-center items-center mt-2'
    whileHover={{scale: 1.1}}
    whileTap={{scale: 0.9}}
  >
    <Button size={'default'} onClick={() => handleBooking()}>
      <Image 
        src={'/founder.jpeg'} 
        alt='Founder Image' 
        width={25} 
        height={25}
        className='rounded-full'/> 
        Book a call with Mulhima
    </Button>
  </motion.div>
  </motion.div>
  )
}

export default CTA