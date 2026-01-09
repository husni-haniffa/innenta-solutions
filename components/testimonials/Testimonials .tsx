import { testimonials } from '@/lib/constants/testimonials'
import MarqueeRow from '../trust/MarqueeRow'
import Image from 'next/image'

const Testimonials = () => {
  return (
    <div className='flex flex-col gap-9'>
        <div className='flex flex-col gap-6 justify-center items-center'>
          <header className='text-center border w-fit px-4 py-2 rounded-lg md:text-lg'>Testimonials</header>
           <header className='text-center font-bold text-3xl md:text-4xl lg:text-5xl'>
                Wall of love
            </header>
        </div>  
        <div>
          <MarqueeRow
            items={testimonials.map((testimonial) => (
              <div key={testimonial.id} className='border px-4 py-6 rounded-xl'>
                <p className='text-muted-foreground'>"{testimonial.review}"</p>      
                <div className='flex gap-2 py-4'>
                  <Image 
                      src={'/avatar.jpeg'} 
                      alt='Innenta Solutions Logo' 
                      width={50} 
                      height={50}
                      className='rounded-full'/> 
                  <div className='flex flex-col'>
                    <header className='text-sm md:text-base'>
                      {testimonial.name}
                    </header>
                    <p className='font-semibold text-sm md:text-base'>{testimonial.position} @{testimonial.client}</p>
                  </div>
                </div>
          </div>
            ))}
            direction="right"
            speed={50}
          />
        </div>
    </div>
  )
}

export default Testimonials