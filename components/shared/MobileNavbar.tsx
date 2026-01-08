// MobileNavbar.tsx
import { handleBooking, routes } from '@/lib/constants/routes'
import { motion } from 'framer-motion'
import { Button } from '../ui/moving-border'
import { useRouter } from 'next/navigation'

interface MobileNavbarProps {
  handleNavigate: (id: string, router: ReturnType<typeof useRouter>) => void
  router: ReturnType<typeof useRouter>
  setOpen: (open: boolean) => void
}

const MobileNavbar = ({ handleNavigate, router, setOpen }: MobileNavbarProps) => {
  return (
    <motion.div 
      className='absolute top-full left-0 w-full bg-black border-x border-b rounded-b-2xl md:hidden'
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <nav className='container flex flex-col gap-2 py-6'>
        {routes.map((route) => (
          <button 
            key={route.id} 
            className='text-left hover:text-muted-foreground px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors'
            onClick={() => {
              if (route.type === "scroll") {
                handleNavigate(route.id, router)
              } else {
                router.push(route.id)
              }
              setOpen(false) // Close menu after clicking
            }}
          >
            {route.label}
          </button>
        ))}
        <div className='py-2 px-4'>
          <Button size={'default'} className='text-lg w-full' onClick={() => handleBooking()}>Book a call</Button>
        </div>
      </nav>
    </motion.div>
  )
}

export default MobileNavbar