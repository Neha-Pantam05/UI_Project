import React from 'react'
import RightCard from './RightCard.jsx'

const RightContent = (props) => {
  
  return (
    <div id='right'
    className='h-full w-2/3 overflow-x-auto flex-nowrap px-4 pt-5 pb-10 gap-3 flex'>
      {
        props.users.map(function(elem,idx){
          return <RightCard key={idx} color={elem.color} id={idx+1} img={elem.img} tag={elem.tag}/>
        })
      }
    </div>
  )
}

export default RightContent
