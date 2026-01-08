import { routes } from '@/lib/constants/routes'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '../ui/moving-border'

const MobileNavbar = () => {
  return (
    
<motion.div className='absolute top-full left-0 w-full border-b bg-black md:hidden'  initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}>
        <nav className='container flex flex-col gap-2 py-6'>
               {routes.map((route) => (
               <button key={route.id} className='text-left hover:text-muted-foreground'>{route.label}</button>
             ))}
             <div className='py-2'>
                <Button size={'default'} className='text-lg'>Book a call</Button>
              </div>
        </nav>
    </motion.div>
   
    
  )
}

export default MobileNavbar