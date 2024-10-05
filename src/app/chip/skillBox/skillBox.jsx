'use client'
import React from 'react'

function SkillBox( {logo,name}) {   

  return (
    <div className='h-[150px] bg-stone-900 flex flex-col justify-center items-center text-white mr-10 mb-3 mt-3 w-[35%]'>
        {logo} 
        {name}
    </div>
  )
}

export default SkillBox
