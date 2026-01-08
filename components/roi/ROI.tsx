import { rois } from '@/lib/constants/rois'
import React from 'react'

const ROI = () => {
  return (
    <div className='flex flex-col gap-9'>
         <div className='flex justify-center items-center'>
            <header className='text-center border w-fit px-4 py-2 rounded-lg text-lg'>
              ROI
            </header>
        </div>
        <div className='flex flex-col gap-6'>
            <header className='text-center font-bold text-3xl md:text-4xl lg:text-5xl'>
              Success In Numbers
            </header>
            <p className='text-center'>
              The Best reutn in numbers
            </p>
        </div>
       <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
  {rois.map((roi) => (
    <div key={roi.id} className="flex flex-col justify-start border-b border-blue-500 rounded-lg px-6 py-8">
      <div className="flex items-center gap-4 mb-4">
        <div className="text-blue-500 shrink-0">
          <roi.icon size={48} strokeWidth={1.5} />
        </div>
        <h3 className="font-bold text-xl md:text-2xl">
          {roi.title}
        </h3>
      </div>
      <p className="text-muted-foreground text-sm md:text-base">
        {roi.description}
      </p>
    </div>
  ))}
</div>
    </div>
  )
}

export default ROI