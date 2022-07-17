import React from 'react'
import moment from 'moment'
import Link from 'next/link';

const PostCard = ({post}) => {
  
  const truncateString =(str, num)=>{
    if(str?.length > num){
        return str.slice(0, num) + '...'
    }else{
      return str
    }
}
  return (
    <div className='bg-white shadow-lg rounded-lg p-0 border pb-4 mb-8'>

        <h1 className='transition duration-700 text-center mb-5 cursor-pointer hover:text-blue-600 text-3xl font-semibold pt-3'>
          <Link href={`/post/${post.node.slug}`}>
            {post.node.title}
          </Link>
        </h1>

        <div className='bloc lg:flex text-center items-center justify-center mb-8 w-full'>
          <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
            <img height='20px' width='20px' alt={post.node.author.name} src={post.node.author.photo.url} className='align-middle rounded-full' />
            <p className='inline align-middle text-gray-700 ml-1 text-sm'>{post.node.author.name}<span className='ml-1'>- {moment(post.node.createdAt).format('MMM DD, YYYY')}</span></p>
          </div>
        </div>

        <div className='relative overflow-hidden pb-80'>
          <img src={post.node.featuredImage.url} alt={post.node.title} className='object-center absolute h-80 w-full object-cover shadow-lg ' />
        </div>

        <p className='pt-8 text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8'>{truncateString(post.node.excerpt, 150)}</p>
        
        <div className='text-center'>
          <Link href={`/post/${post.node.slug}`}>
            <span className='transition duration-500 transform hover:translate-y-1 inline-block bg-blue-600 text-lg font-medium rounded-full text-white px-3 cursor-pointer py-2'>
              Continue Reading
            </span>
          </Link>
        </div>
        
    </div>
  )
}

export default PostCard