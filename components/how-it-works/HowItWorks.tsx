import { howItWorks } from '@/lib/constants/how-it-works'
import { Button } from '../ui/moving-border'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { handleBooking } from '@/lib/constants/routes'

const HowItWorks = () => {
  return (
    <div className='flex flex-col gap-9 scroll-mt-24 lg:scroll-mt-32' id='howitworks'>

        <motion.div className='flex flex-col gap-6 justify-center items-center'
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <header className='text-center border w-fit px-4 py-2 rounded-lg md:text-lg'>
            How it works
          </header>
          <header className='text-center font-bold text-3xl md:text-4xl lg:text-6xl'>
            Simple Process. Powerful Results.
          </header>
          <p className='text-center text-muted-foreground text-sm md:text-base lg:text-xl'>
            We follow clear steps to deliver high-quality outcomes without complexity.
          </p>
        </motion.div>
      
        <motion.div className='grid grid-cols-1 md:grid-cols-3 gap-6'   initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {howItWorks.map((work) => (
            <div key={work.id} className="flex flex-col justify-start items-center border rounded-lg px-6 py-8">
              <div className="flex flex-col gap-4 items-center text-center mb-4">
                <div className="text-blue-500">
                  <work.icon size={75} strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-lg md:text-2xl">
                  {work.title}
                </h3>
              </div>
              <p className="text-muted-foreground text-sm md:text-base text-center">
                {work.description}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div className='flex justify-center items-center py-6'
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

export default HowItWorks