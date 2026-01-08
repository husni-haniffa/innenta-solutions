"use client"
import { contacts } from '@/lib/constants/contacts'
import { legal } from '@/lib/constants/legal'
import { resources } from '@/lib/constants/resources'
import { routes } from '@/lib/constants/routes'
import { socials } from '@/lib/constants/social'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


const Footer = () => {
  const router = useRouter()
  const handleNavigate = (
  id: string,
  router: ReturnType<typeof useRouter>
) => {
  // Always update the URL first
  if (window.location.pathname !== "/") {
    router.push(`/#${id}`)
  } else {
    // Update hash without triggering a page reload
    window.history.replaceState(null, '', `#${id}`)
    
    // Scroll to element
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
}

  return (
    <footer className='w-full border-t py-6'>
      
      <div className='container py-6'>
      
        <div className='flex flex-col gap-3 mb-6'>
          <header className='font-bold text-2xl'>
            Innenta Solutions
          </header>
          <p className='text-muted-foreground'>
           Design, development, and digital growth solutions — all in one place.
          </p>
        </div>


        <div className='flex flex-col md:flex-row justify-between gap-6'>

        <div className='flex flex-col gap-2'>
          {contacts.map((contact) => (
            <div key={contact.id} className='flex flex-col gap-1'>
              <header className='font-semibold'>{contact.label}</header>
              <Link href={contact.href} className='text-muted-foreground hover:text-white'>{contact.value}</Link>
            </div>
          ))}
        </div>



 <div className='flex flex-col gap-2'>
          <header className='font-semibold'>Company</header>
          <div className='flex flex-col gap-1'>
   {routes.map((route) => (
               <button key={route.id} className='text-left text-muted-foreground hover:text-white ' onClick={() => {
                if (route.type === "scroll") {
                  handleNavigate(route.id, router)
                } else {
                  router.push(route.id)
                }
              }}>{route.label}</button>
             ))}
          </div>
         
        </div>


 <div className='flex flex-col gap-2'>
          <header className='font-semibold'>Resources</header>
          <div className='flex flex-col gap-1'>
{resources.map((resource) => (
             
            <Link key={resource.id} href={resource.href} className='text-muted-foreground hover:text-white'>{resource.label}</Link>

          ))}
          </div>
          
        </div>

<div className='flex flex-col gap-2'>
          <header className='font-semibold'>Resources</header>
          <div className='flex flex-col gap-1'>
          {legal.map((terms) => (
             <div key={terms.id}>
                <Link  href={terms.href} className='text-muted-foreground hover:text-white'>{terms.label}</Link>
             </div>
          ))}
          </div>
          
        </div>


        </div>





        

       

       

         








      </div>



      <div className="w-full border-t">
  <div className="container py-6">
    <div className="flex flex-col-reverse gap-4 md:flex-row md:items-center md:justify-between">
      
      {/* Left text section */}
      <div className="text-muted-foreground flex flex-col gap-1 md:flex-row md:gap-2">
        <p>Made by Husni Haniffa</p>

        {/* Slash – only visible on md+ */}
        <span className="hidden md:inline">|</span>

        <p>Copyrights {new Date().getFullYear()}</p>
      </div>

      {/* Social icons */}
      <div className="flex gap-4 md:justify-end">
        {socials.map((media) => (
          <Link key={media.id} href={media.href}>
            <media.icon size={22} />
          </Link>
        ))}
      </div>

    </div>
  </div>
</div>



    </footer>
  )
}

export default Footer