import { faqs } from '@/lib/constants/faqs'
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Testimonials from '../testimonials/Testimonials '
const FAQ = () => {
  return (
    <div className='flex flex-col gap-9'>
<div className='flex justify-center items-center'>
            <header className='text-center border w-fit px-4 py-2 rounded-lg text-lg'>
              FAQs
            </header>
        </div>
        <div className='flex flex-col gap-6'>
            <header className='text-center font-bold text-3xl md:text-4xl lg:text-5xl'>
              Frequently Asked Questions
            </header>
            <p className='text-center'>
              Thoughtfully crafted perks that support long-term growth.
            </p>
        </div>
        <div className='py-16'>

{faqs.map((faq) => (
            <Accordion key={faq.id}type="single" collapsible> 
  <AccordionItem value="item-1">
    <AccordionTrigger className='md:text-xl'>{faq.question}</AccordionTrigger>
    <AccordionContent className='md:text-lg text-muted-foreground'>
      {faq.answer}
    </AccordionContent>
  </AccordionItem>
</Accordion>
        ))}
        </div>
        <div className='py-8'>
          <Testimonials/>
        </div>
        
    </div>
  )
}

export default FAQ