import { whyChooseUs } from '@/lib/constants/why-choose-us'
import { Check } from 'lucide-react'
import { motion } from 'framer-motion'


const WhyChooseUs = () => {
  return (

    <div className='min-h-screen'>
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
        <motion.div className='grid grid-cols-1 md:grid-cols-3 gap-3'  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ amount: 0.3 }}
  transition={{ duration: 0.5, ease: "easeOut" }}>
      {whyChooseUs.map((column) => (
  <div
    key={column.id}
    className={`rounded-2xl border p-6 ${
      column.highlight ? "border-blue-500 bg-linear-to-br from-blue-600/20 to-black" : "border-border"
    }`}
  >
    <h3 className="mb-4 text-xl font-semibold">{column.title}</h3>

    <div className="space-y-3">
      {column.items.map((item, i) => (
        <div key={i} className="flex items-center gap-3">
          <item.icon
            className={`h-5 w-5 ${
              item.icon === Check ? "text-blue-500" : "text-muted-foreground"
            }`}
          />
          <span>{item.text}</span>
        </div>
      ))}
    </div>
  </div>
))}

    </motion.div>
    </div>
    
  )
}

export default WhyChooseUs