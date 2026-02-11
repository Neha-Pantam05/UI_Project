import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {

  return (
    <div className='flex items-center gap-3 h-[90vh] px-6 pt-2' >
      <LeftContent/>
      <RightContent users={props.users} />
    </div>
  )
}

export default Page1Content