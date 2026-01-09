import { rois } from '@/lib/constants/rois'
import { motion } from 'framer-motion'


const ROI = () => {
  return (
    <div className='flex flex-col gap-9'>
        <motion.div className='flex flex-col gap-6 justify-center items-center'
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
         >
            <header className='text-center border w-fit px-4 py-2 rounded-lg md:text-lg'>
              ROI
            </header>
            <header className='text-center font-bold text-3xl md:text-4xl lg:text-6xl'>
              Success In Numbers
            </header>
            <p className='text-center text-muted-foreground text-sm md:text-base lg:text-xl'>
              The Best reutn in numbers
            </p>
        </motion.div>
  
       <motion.div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {rois.map((roi, index) => (
          <motion.div
            key={roi.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col justify-start border-b border-blue-500 rounded-lg px-6 py-8"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="text-blue-500 shrink-0">
                <roi.icon size={48} strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl md:text-2xl">
                {roi.title}
              </h3>
            </div>
            <p className="text-muted-foreground text-sm md:text-base">
              {roi.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

    </div>
  )
}

export default ROI