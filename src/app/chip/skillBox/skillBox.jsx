'use client'
import React from 'react'

function SkillBox( {logo,name}) {   

  return (
    <div className='h-[150px] bg-stone-900 flex flex-col justify-center items-center text-white mb-5 w-[35%]'>
        {logo} 
        {name}
    </div>
  )
}

export default SkillBox
