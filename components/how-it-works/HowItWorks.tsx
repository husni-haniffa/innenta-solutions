import { howItWorks } from '@/lib/constants/how-it-works'
import { Button } from '../ui/moving-border'
import Image from 'next/image'

const HowItWorks = () => {
  return (
    <div className='flex flex-col gap-9' id='howitworks'>
        <div className='flex justify-center items-center'>
          <header className='text-center border w-fit px-4 py-2 rounded-lg text-lg'>How it works</header>
        </div>
        <div className='flex flex-col gap-6'>
            <header className='text-center font-bold text-3xl md:text-4xl lg:text-5xl'>
                Simple Process. Powerful Results.
            </header>
            <p className='text-center text-muted-foreground'>
                We follow clear steps to deliver high-quality outcomes without complexity.
            </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
            {howItWorks.map((work) => (
              <div key={work.id} className="flex flex-col justify-start items-center border rounded-lg px-6 py-8">
                <div className="flex flex-col gap-4 items-center text-center mb-4">
                  <div className="text-blue-500">
                    <work.icon size={75} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-xl md:text-2xl">
                    {work.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm md:text-base text-center">
                  {work.description}
                </p>
              </div>
            ))}
        </div>
        <div className='flex justify-center items-center py-6'>
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
  )
}

export default HowItWorks