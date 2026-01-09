import { whyChooseUs } from '@/lib/constants/why-choose-us'
import { Check } from 'lucide-react'
import { motion } from 'framer-motion'
import FAQ from '../faq/FAQ'


const WhyChooseUs = () => {
  return (

    <div className='min-h-screen flex flex-col gap-9'>
       <motion.div className='flex flex-col gap-6 justify-center items-center' 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}>
            <header className='text-center border w-fit px-4 py-2 rounded-lg md:text-lg'>
              Compare
            </header>
             <header className='text-center font-bold text-3xl md:text-4xl lg:text-6xl'>
              Why Choose Us
            </header>
            <p className='text-center text-muted-foreground text-sm md:text-base lg:text-xl'>
              Thoughtfully crafted perks that support long-term growth.
            </p>
        </motion.div>
   
      <motion.div className='grid grid-cols-1 md:grid-cols-3 gap-6'  
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}>
            {whyChooseUs.map((column) => (
              <div key={column.id}
                className={`rounded-2xl border p-6 ${
                  column.highlight ? "border-blue-500 bg-linear-to-br from-blue-600/20 to-black" : "border-border"
                }`}>
                  <h3 className="mb-4 text-lg md:text-xl lg:text-2xl font-semibold">{column.title}</h3>
                  <div className="space-y-3">
                    {column.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <item.icon
                          className={`h-5 w-5 ${
                            item.icon === Check ? "text-blue-500" : "text-muted-foreground"
                          }`}
                        />
                        <span className='text-sm md:text-base lg:text-lg'>{item.text}</span>
                      </div>
                    ))}
                  </div>
              </div>
            ))}
      </motion.div>

      <div className='py-8'>
          <FAQ/>
      </div>

    </div>
    
  )
}

export default WhyChooseUs