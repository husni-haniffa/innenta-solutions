import { faqs } from '@/lib/constants/faqs'
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
        <div className='flex flex-col gap-6 justify-center items-center'>
            <header className='text-center border w-fit px-4 py-2 rounded-lg md:text-lg'>
              FAQs
            </header>
             <header className='text-center font-bold text-3xl md:text-4xl lg:text-6x'>
              Frequently Asked Questions
            </header>
            <p className='text-center text-sm md:text-base lg:text-xl'>
              Thoughtfully crafted perks that support long-term growth.
            </p>
        </div>
      
        <div className=''>
          {faqs.map((faq) => (
                      <Accordion key={faq.id}type="single" collapsible> 
            <AccordionItem value="item-1">
              <AccordionTrigger className='text-sm md:text-base lg:text-xl'>{faq.question}</AccordionTrigger>
              <AccordionContent className='text-sm md:text-base lg:text-xl text-muted-foreground'>
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