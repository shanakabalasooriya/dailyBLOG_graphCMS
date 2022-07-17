import React from 'react'
import {TiSocialTwitter, TiSocialFacebookCircular, TiSocialLinkedin} from 'react-icons/ti'
import{FaGooglePlusG} from 'react-icons/fa'

const AboutUs = () => {
  return (
    <div className=' bg-white shadow-lg rounded-lg p-8 mb-8 items-center justify-center'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        About Us
      </h3>
      <p className='mx-1 text-center'>Every business has a story to tell. Even if you&apos;re running a start-up you might not have a long history of changes and growth (yet) but its a nice touch to talk about how you got to where you are on the About page..</p>
      
      <div className='flex mt-5 text-gray-600 border-spacing-3 items-center justify-between gap-2 '>
          <TiSocialTwitter className='' size={50}/> 
          <TiSocialFacebookCircular size={50}/> 
          <FaGooglePlusG size={50}/>
          <TiSocialLinkedin size={50}/>
      </div> 
      <div className='text-gray-800'>
        <h4 className='flex font-semibold  pt-3'>@ 2022 | All Rights Reserved</h4>
      </div>
      
    </div>
  )
}

export default AboutUs
