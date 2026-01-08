
"use client"
import { routes } from '@/lib/constants/routes'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
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

  

 const handleNavigate = (
    id: string,
    router: ReturnType<typeof useRouter>
) => {
    if (window.location.pathname !== "/") {
        router.push(`/#${id}`)
        return
    }

    const element = document.getElementById(id)
    if (element) {
        element.scrollIntoView({ behavior: "smooth" })
    }
}

  
  return (
    <div className='sticky top-0 z-50 w-full'>
      <nav className='container flex justify-between items-center py-4 border rounded-2xl bg-black'>
        <div className='flex gap-2 cursor-pointer' onClick={() => router.push('/')}>
          <Image src={'/innenta-solutions-logo.png'} alt='Innenta Solutions Logo' width={25} height={25}/>
          <header className='text-xl font-bold md:text-2xl'>Innenta Solutions</header>
        </div>
        <div className='hidden md:flex gap-6'>
          {routes.map((route) => (
              <button key={route.id} className='hover:bg-gray-600 px-4 py-2 rounded-lg cursor-pointer' onClick={() => {
      if (route.type === "scroll") {
        handleNavigate(route.id, router)
      } else {
        router.push(route.id)
      }
    }}
  >{route.label}</button>
            ))}
        </div>
        <div className='hidden md:flex'>
          <Button size={'default'} className='text-lg'>Book a call</Button>
        </div>
        <div className='flex md:hidden'>
            <Button onClick={handleClick} size={'icon'}>
                  <motion.div
            key={open ? 'close' : 'menu'}
            animate={{ rotate: open ? 90 : 0 }} // rotate 90deg when open
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='flex items-center justify-center'
          >
            {open ? <X /> : <Menu />}
          </motion.div></Button>
        </div>
      </nav>
      <AnimatePresence>
  {open && <MobileNavbar />}
</AnimatePresence>
    </div>
  )
}

export default Navbar