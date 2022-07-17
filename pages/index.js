import Head from 'next/head'
import {PostCard, Categories, PostWidget} from '../components'
import AboutUs from '../components/AboutUs';
import FeaturedPosts from '../components/FeaturedPosts';
import { getPosts } from '../services'



export default function Home({posts}){
  return (
    <>

      <Head>
        <title>DAILY BLOG</title>
        <link rel='icon' href='/favicon.ico'/>
      </Head>

      <div className='container mx-auto'> 
      <FeaturedPosts />
         {/* <div className='grid-cols-3 p-20 space-y-2 bg-yellow-200 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3'>
          <div className='w-full'>
            {posts.map((post, id)=> <FeaturedPosts  post={post} key={post.node.title+id}/> )}
          </div>
         </div> */}
      </div>
      
      <div className='container mx-auto px-5  mb-8 '>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 mt-10'>

          <div className='lg:col-span-8 col-span-1'>
            {posts.map((post, id)=> <PostCard key={post.title+id} post={post}/> )}
          </div>

          <div className='lg:col-span-4 col-span-1'>
              <div className='lg:sticky relative top-8'>
                
                <PostWidget className=''/>
                <Categories className=''/>
                <AboutUs className=''/>
                
              </div>
          </div>

        </div>
      </div>
    </>
  )
}

export async function getStaticProps(){
  const posts =(await getPosts()) || [];
  return {
    props:{ posts }
  }
}
