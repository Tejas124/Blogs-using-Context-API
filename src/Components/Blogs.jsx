import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import Spinner from './Spinner.js'

const Blogs = () => {
  //consume
  const {posts, loading} = useContext(AppContext)

  return (
    <div className='w-11/12 max-w-[600px] mt-[70px] mb-[70px] '>
        {
          loading ? 

          (<Spinner/>) :

          (
              posts.length === 0 ?
              (<div>
                  <p>No posts Found</p>
                </div>  
              ):
              (
                posts.map( (post) =>(
                  <div key={post.id}
                  className='mb-5'>
                      <p  className='font-bold py-2'>{post.title}</p>
                      <p className='text-xs'>By <span className='italic'>{post.author}</span> on <span className='font-bold'>{post.category}</span></p>
                      <p className='text-xs'>Posted on <span>{post.date}</span></p>
                      <p className='mt-4 text-justify mb-2'>{post.content}</p>

                      <div>
                        {post.tags?.map( (tag, index) => {
                          return <span key={index} 
                          className='text-xs text-blue-700 font-semibold px-1 underline cursor-pointer'>{`#${tag}`}</span>
                        })}
                      </div>
                  </div>
                ) ) 
              )
          )
        }


    </div>
  )
}

export default Blogs