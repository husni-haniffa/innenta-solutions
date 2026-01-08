"use client"
import { Button } from '../ui/moving-border'
import Trust from '../trust/Trust'
import Image from 'next/image'
import { services } from '@/lib/constants/services'
import { Label } from '../ui/label'

const Hero = () => {
  return (
    <div className='min-h-screen'>
        <div className='flex flex-col gap-3 items-center text-center py-16'>
            <header className='text-3xl md:text-4xl lg:text-5xl font-bold'>Build Smarter Digital Experiences</header>
            <p className='text-muted-foreground'>
                Design, development, and digital growth solutions — all in one place.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 py-6'>
                {services.map((service) => (
                    <div key={service.id} className='flex gap-2 justify-center items-center'>
                        <service.icon className='text-blue-600'/>
                        <Label className='text-lg'>{service.title}</Label>
                    </div>
                ))}
            </div>
            <div className='py-6'>
                <Button size={'xl'}>
                    <Image 
                        src={'/founder.jpeg'} 
                        alt='Innenta Solutions Logo' 
                        width={25} 
                        height={25}
                        className='rounded-full'/> 
                        Book a call with Mulhima
                </Button>
            </div>
        </div>
        <div>
            <Trust/>
        </div>
    </div>
  )
}

export default Hero