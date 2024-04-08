import React from 'react'
import { testimonials } from '../constants'

const Testimonial = () => {
  return (
   <div className='my-20 tracking-wide'>
    <h2 className='sm:text-2xl md:text-3xl lg:text-5xl text-center my-10 lg:my-20'>What people are Saying</h2>
    <div className='flex flex-wrap justify-center'>
          {testimonials.map((testimonial,index)=>(
              <div key={index} className='w-full sm:w-1/2 lg:w-1/3 py-2 px-1'>
                <div className='bg-neutral hover:bg-transparent rounded-corner-md p-6 text-md border border-neutral-800 font-thin h-[290px]'>
            <p>{testimonial.text}</p>
           <div className='main flex items-center mt-8'>
              <div className="left">
              <img src={testimonial.image} className='rounded-full w-[50px] my-4 mx-2 border-neutral-300' alt="" />
              </div>
              <div className="right">
                <div className="name mt-2 mb-3">
                  <p className='px-2'>{testimonial.user}</p>
                  <span className='px-2 text-sm font-normal italic text-neutral-600'>{testimonial.company}</span>
                </div>
              </div>
           </div>
                </div>
              </div>
          ))}
    </div>
   </div>
  )
}

export default Testimonial
