import React from 'react'
import ContactForm from './ContactForm'
import CTA from '../cta/CTA'
import {motion} from 'framer-motion'
const ContactUs = () => {
  return (
    <motion.div className='flex flex-col gap-9 max-w-7xl mx-auto px-4 py-12' id='contactus' initial={{ opacity: 0, y: -50 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ amount: 0.3 }}
transition={{ duration: 0.6, ease: "easeOut" }}>
        <div className='flex justify-center items-center'>
            <header className='text-center border  w-fit px-4 py-2 rounded-lg text-lg'>
              Contact Us
            </header>
        </div>
        
        <div className='flex flex-col gap-6'>
            <header className='text-center font-bold text-3xl md:text-4xl lg:text-5xl '>
              Let's Connect
            </header>
            <p className='text-center  text-lg max-w-2xl mx-auto'>
              Have a project in mind? Fill out the form or book a call directly with our founder.
            </p>
        </div>
        
        <div className='grid grid-cols-1 lg:grid-cols-2 items-stretch gap-6'>
            <div className='w-full'>
                <ContactForm/>
            </div>
            
            <div className='w-full flex items-center justify-center lg:sticky lg:top-8'>
                <CTA/>
            </div>
        </div>
    </motion.div>
  )
}

export default ContactUs