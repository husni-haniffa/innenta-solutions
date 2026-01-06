import { services } from '@/lib/constants/services'

const Services = () => {
  return (
    <div className='min-h-screen flex flex-col gap-9'>  
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
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {services.map((service, index) => (
          <div key={index} className='border rounded-lg px-4 py-3 text-center'>
            {service}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services