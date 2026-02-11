import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import HeadLine from './HeadLine'
const LeftContent = () => {
  return (
    <div className='w-1/3 p-2 h-[88%] rounded-2xl flex flex-col justify-between ' >
      <HeadLine />
      <div className=' text-9xl' >
       <ArrowUpRight size={64} />
      </div>
    </div>
  )
}

export default LeftContent
