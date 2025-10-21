import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="lg:pt-30 md:pt-0 pb-3 border-t border-black flex justify-between items-center flex-wrap gap-5">
        <div className='text-white flex gap-2' >
            <p>Terms & COnditions</p>
            <p>|</p>
            <p>Privacy Policy </p>
        </div>
        <div className='flex gap-3' >
            <div className='w-12 h-12 rounded-full flex justify-center items-center bg-black border border-black gap-4'>
                  <a href="https://www.linkedin.com/in/vineet-agarwal-540abc/"  target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" >
                          <FaLinkedin/>
                        </a>
                        <a href="https://github.com/vineetagarwal54"  target="_blank" rel="noopener noreferrer" aria-label="GitHub" >
                          <FaGithub/>
                        </a>
                        <a href="https://www.instagram.com/vineetagarwal540/"  target="_blank" rel="noopener noreferrer" aria-label="Instagram" >
                          <FaInstagram/>
                        </a>
            </div>
        </div>
      
      </div>
  )
}

export default Footer