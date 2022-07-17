import React, { useEffect, useState } from 'react'
import  Link  from 'next/link'

import { getCategories } from '../services'
import {images} from '../assets'


const Navbar = () => {
  const [categories, setCategories] = useState([])
  useEffect(()=>{
    getCategories().then((category)=>setCategories(category))
  },[])
  
  return (
    <>
      
      <div className=' border-b mx-auto flex items-center justify-center mb-0 z-[100] w-full '>
        
       <div className='cursor-pointer mx-2'>
          <Link href='/'>
            <img src={images.logo1.src} alt='blog' className='w-auto'/>
          </Link>
        </div>

        
      </div>
      <div className='hidden md:flex justify-center'>
            {categories.map((category)=>(
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <span className='mt-2 align-middle mx-5 font-semibold cursor-pointer text-gray-600'>
                  {category.name}
                </span>
              </Link>
            ))}
        </div> 
      
    
    </>
  )
}

export default Navbar