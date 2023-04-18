import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Pagination = () => {

  const {page, pageHandler, totalPages} = useContext(AppContext);

  return (
    <div className='w-full flex justify-center items-center border-y-2'>
      <div className='flex flex-row justify-between items-center w-11/12 max-w-[600px] py-1 fixed bottom-0 bg-white'>
        <div className='flex gap-x-2'>
        {page > 1 &&
          <button onClick={() => pageHandler(page-1)}
          className='rounded-md border-2 px-3 py-1'>
            Previous
          </button>
          
        }
        {page < totalPages &&
          <button onClick={() => pageHandler(page+1)}
          className='rounded-md border-2 px-3 py-1'>
            Next
          </button>
        }
        </div>

      <p className='font-bold text-sm'>Page {page} of {totalPages}</p>
      </div>

    </div>
  )
}

export default Pagination