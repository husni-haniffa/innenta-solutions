import MarqueeRow from './MarqueeRow'
import { clients, clientWorks } from '@/lib/constants/clients'
import Image from 'next/image'

const Trust = () => {
  return (
    <div className='flex flex-col gap-9'>
        <div>
            <header className='font-semibold text-center text-lg'>Trusted by 50+ Clients Worldwide</header>
        </div>
        <div className="relative overflow-hidden">
  <div className="flex flex-col gap-9">
    <MarqueeRow 
      items={clients.map((client) => (
        <div className="flex gap-2 border px-4 py-2 rounded-lg" key={client.id}>
          <client.icon />
          <header>{client.name}</header>
        </div>
      ))}
      direction="left"
      speed={50}
    />

    <MarqueeRow 
      items={clientWorks.map((client) => (
        <Image 
          key={client.id}
          src={client.image}
          alt="Client Work Image"
          width={300}
          height={300}
          className="rounded-xl"
        />
      ))}
      direction="right"
      speed={50}
    />
  </div>

  {/* Left Fade */}
  <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent" />

  {/* Right Fade */}
  <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent" />
</div>

    </div>
  )
}

export default Trust