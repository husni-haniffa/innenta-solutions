import { handleBooking, routes } from '@/lib/constants/routes'
import { motion } from 'framer-motion'
import { Button } from '../ui/moving-border'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

interface MobileNavbarProps {
  handleNavigate: (id: string, router: ReturnType<typeof useRouter>) => void
  router: ReturnType<typeof useRouter>
  setOpen: (open: boolean) => void
}

const MobileNavbar = ({ handleNavigate, router, setOpen }: MobileNavbarProps) => {
  return (
    <motion.div 
      className='absolute top-full left-0 w-full bg-black border-b rounded-b-2xl lg:hidden'
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <nav className='container flex flex-col py-6 gap-3'>
        {routes.map((route) => (
          <button 
            key={route.id} 
            className='text-left text-sm md:text-base hover:text-muted-foreground'
            onClick={() => {
              if (route.type === "scroll") {
                handleNavigate(route.id, router)
              } else {
                router.push(route.id)
              }
              setOpen(false)
            }}
          >
            {route.label}
          </button>
        ))}
        <motion.div className='flex justify-center items-center py-6'
          whileTap={{scale: 0.9}}
        >
          <Button size={'default'} onClick={() => handleBooking()}>
              <Image 
                  src={'/founder.jpeg'} 
                  alt='Founder Image' 
                  width={25} 
                  height={25}
                  className='rounded-full'/> 
              Book a call with Mulhima
          </Button>
        </motion.div>
      </nav>
    </motion.div>
  )
}

export default MobileNavbar