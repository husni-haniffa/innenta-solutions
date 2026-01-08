import { services } from '@/lib/constants/services'
import HowItWorks from '../how-it-works/HowItWorks'

const Services = () => {
  return (
    <div className='min-h-screen flex flex-col gap-9' id='services'>  
      <div className='flex justify-center items-center'>
        <header className='text-center border w-fit px-4 py-2 rounded-lg text-lg'>Services</header>
      </div> 
      <div className='flex flex-col gap-6'>
        <header className='text-center font-bold text-3xl md:text-4xl lg:text-5xl'>
          End-to-End Digital Services
        </header>
        <p className='text-center text-muted-foreground'>
          From UI/UX design to development and digital marketing, we handle it all.
        </p>
      </div>     
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
  {services.map((service) => (
    <div 
      key={service.id} 
      className='flex flex-col gap-6 px-4 py-4 rounded-xl border hover:border-blue-500'
    >
      <service.icon size={50} className='text-blue-500'/>
      <header className='text-2xl font-bold'>{service.title}</header>
      <div className='grid grid-cols-3 gap-2'>
        {service.items.map((item) => (
          <div key={item.id}>
            <p className='text-sm'>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>

<div className='py-24'>
    <HowItWorks/>
</div>
    </div>
  )
}

export default Services