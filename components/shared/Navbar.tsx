"use client"
import { handleBooking, routes } from '@/lib/constants/routes'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from '../ui/moving-border'
import { Menu, X } from 'lucide-react'
import MobileNavbar from './MobileNavbar'
import { useRouter } from 'next/navigation'
import {AnimatePresence, motion } from 'framer-motion'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  
  const handleClick = () => {
    setOpen(!open)
  }
  
  const handleNavigate = ( id: string, router: ReturnType<typeof useRouter> ) => {

    if (window.location.pathname !== "/") {
        router.push(`/#${id}`)
    } 
    else {
        window.history.replaceState(null, '', `#${id}`)
        const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  
  return (
    <nav className='sticky top-0 left-0 z-50 w-full lg:py-6 bg-black lg:bg-transparent'>
      <div className='lg:container'>
        <div className='lg:border lg:rounded-2xl bg-black px-4 py-4 flex justify-between items-center'>
          <div className='flex gap-2 cursor-pointer' 
            onClick={() => router.push('/')}>
            <Image 
              src={'/innenta-solutions-logo.png'} 
              alt='Innenta Solutions Logo' 
              width={25} height={25}/>
            <header className='text-lg md:text-2xl font-bold'>
              Innenta Solutions
            </header>
          </div>
          <div className='hidden lg:flex gap-6'>
            {routes.map((route) => (
              <button 
                key={route.id} 
                className='hover:bg-gray-600 px-4 py-2 rounded-lg cursor-pointer text-lg' 
                onClick={() => {
                  if (route.type === "scroll") {
                    handleNavigate(route.id, router)
                  } else {
                    router.push(route.id)
                  }
                }}
              >
                {route.label}
              </button>
            ))}
          </div>
          <div className='hidden lg:flex'>
            <Button 
              size={'default'} 
              className='text-lg' 
              onClick={() => handleBooking()}>
                Book a call
              </Button>
          </div>
          <div className='flex lg:hidden'>
            <Button onClick={handleClick} size={'icon'}>
              <motion.div
                key={open ? 'close' : 'menu'}
                animate={{ rotate: open ? 90 : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className='flex items-center justify-center'
              >
                {open ? <X /> : <Menu />}
              </motion.div>
            </Button>
          </div>  
        </div>
      </div>
      <AnimatePresence>
        {open && <MobileNavbar handleNavigate={handleNavigate} router={router} setOpen={setOpen} />}
      </AnimatePresence>
    </nav>

  )
}

export default Navbar