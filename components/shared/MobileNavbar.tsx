import { routes } from '@/lib/constants/routes'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '../ui/moving-border'

const MobileNavbar = () => {
  return (
    <div className='absolute top-full left-0 w-full border-b bg-black md:hidden'>
        <nav className='container flex flex-col gap-2 py-6'>
               {routes.map((route) => (
               <button key={route.id} className='text-left hover:text-muted-foreground'>{route.label}</button>
             ))}
             <div className='py-2'>
                <Button size={'default'} className='text-lg'>Book a call</Button>
              </div>
        </nav>
    </div>
  )
}

export default MobileNavbar