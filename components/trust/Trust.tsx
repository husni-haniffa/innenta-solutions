import MarqueeRow from './MarqueeRow'
import { clients } from '@/lib/constants/clients'

const Trust = () => {
  return (
    <div className='flex flex-col gap-9'>
        <div>
            <header className='font-semibold text-center text-lg'>Trusted by 50+ Clients Worldwide</header>
        </div>
        <div className="flex flex-col gap-9">
          <MarqueeRow 
            items={clients.map((client) => (
              <div className='flex gap-2 border px-4 py-2 rounded-lg' key={client.id}>
                <client.icon/>
                <header>{client.name}</header>
              </div>
            ))}
            direction="left"
            speed={50}
          />
        </div>
    </div>
  )
}

export default Trust