import { services } from '@/lib/constants/services'
import HowItWorks from '../how-it-works/HowItWorks'
import { motion } from 'framer-motion'

const Services = () => {
  const middleIndex = Math.floor(services.length / 2)

  return (
    <div className='min-h-screen flex flex-col gap-9 scroll-mt-24' id='services'>
    
      <motion.div className='flex flex-col gap-6 justify-center items-center'
       initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <header className='text-center border w-fit px-4 py-2 rounded-lg md:text-lg'>Services</header>
        <header className='text-center font-bold text-3xl md:text-4xl lg:text-6xl'>
          End-to-End Digital Services
        </header>
        <p className='text-center text-muted-foreground text-sm md:text-base lg:text-xl'>
          From UI/UX design to development and digital marketing, we handle it all.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 }
          }
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            custom={index}
            variants={{
              hidden: (i) => {
                if (i === middleIndex) return { opacity: 0, scale: 0.8 } // middle card
                if (i < middleIndex) return { opacity: 0, x: -50 }       // left side
                return { opacity: 0, x: 50 }                               // right side
              },
              visible: (i) => {
                if (i === middleIndex)
                  return { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
                return { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }
            }}
            className='flex flex-col gap-6 px-4 py-4 rounded-xl border hover:border-blue-500'
          >
            <service.icon size={50} className='text-blue-500' />
            <header className='text-2xl font-bold'>{service.title}</header>
            <div className='grid grid-cols-3 gap-2'>
              {service.items.map((item) => (
                <div key={item.id} className='border rounded flex justify-center items-center py-2'>
                  <p className='text-sm text-muted-foreground'>{item.title}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className='py-24'>
        <HowItWorks />
      </div>
    </div>
  )
}

export default Services
