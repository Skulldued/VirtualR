import React from 'react'
import {resourcesLinks,platformLinks,communityLinks} from '../constants';
const Footer = () => {
  return (
  <footer className='mt-4 border-t-2 border-neutral-700 '>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                <div className='flex flex-col items-center justify-center'>
                  <h3 className='text-md font-semibold m-7'>Resources</h3>
                  <ul className='space-y-2'>
                    {resourcesLinks.map((link,index)=>(
                      <li className='' key={index}>
                     <a className='text-neutral-500 hover:text-white' href={link.href}>{link.text}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='flex flex-col items-center'>
                  <h3 className='text-md font-semibold m-7'>Platforms</h3>
                  <ul className='space-y-2'>
                    {platformLinks.map((link,index)=>(
                      <li className='' key={index}>
                     <a className='text-neutral-500 hover:text-white' href={link.href}>{link.text}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='flex flex-col items-center'>
                  <h3 className='text-md font-semibold m-7'>Community</h3>
                  <ul className='space-y-2'>
                    {communityLinks.map((link,index)=>(
                      <li className='' key={index}>
                     <a className='text-neutral-500 hover:text-white' href={link.href}>{link.text}</a>
                      </li>
                    ))}
                  </ul>
                </div>
               
      </div>
  </footer>
  )
}

export default Footer
