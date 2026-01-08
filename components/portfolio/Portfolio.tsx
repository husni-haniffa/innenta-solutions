"use client"
import { portfolio } from '@/lib/constants/portfolio'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'
import { Badge } from '../ui/badge'
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <div className='min-h-screen container'>
      <div className='flex justify-center items-center'>
            <header className='text-center border w-fit px-4 py-2 rounded-lg text-lg'>
              Portfoilo
            </header>
        </div>
        <div className='flex flex-col gap-6'>
            <header className='text-center font-bold text-3xl md:text-4xl lg:text-5xl'>
              Projects that we have done
            </header>
            <p className='text-center'>
              Thoughtfully crafted perks that support long-term growth.
            </p>
        </div>

         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 py-16'>
                    {portfolio.map((project) => (
                        <div key={project.id} className='border rounded-lg overflow-hidden flex flex-col'
                           
                        >
                            <div className='relative w-full aspect-video'>
                                <Image 
                                    src={project.image} 
                                    fill
                                    className='object-cover'
                                    alt='project'
                                />
                            </div>
                            <Card className='border-0 flex-1' >
                                <CardHeader>
                                    <CardTitle>{project.client}</CardTitle>
                                    <CardDescription>{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent className='flex flex-wrap gap-2'>
                                    {project.servicesDelivered.map((service, index) => (
                                        <Badge key={index} 
                                            className='bg-green-600 text-white font-bold'>
                                                {service}
                                        </Badge>
                                    ))}
                                </CardContent>
                            </Card>
                        </div>
                        ))
                    }
                </div>
    </div>
  )
}

export default Portfolio