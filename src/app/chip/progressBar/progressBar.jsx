'use client'
import React from 'react'
import styled from "styled-components";


function Progressbar({value,  logo, name,duration =3 }) {
  return (
    <div className='pl-10'>
        <div className='flex mb-2'>
            <p>
            {logo} {"     "}   {name}
            </p>

        </div>
          <div className="h-[8px] w-[90%] relative rounded-3xl bg-gray-300 mb-8">
              <Progress
                  className="w-[0%] h-[8px] absolute rounded-3xl bg-yellow-500"
                  style={{
                      width: `${value}%`,
                      animation: `progress-animation ${duration}s linear`,
                  }}
              ></Progress>
          </div>
      
    </div>
  )
}

export default Progressbar

const Progress = styled.div`
  @keyframes progress-animation {
    from {
      width: 0%;
    }
    to {
      width: ${(props) => props.width};
    }
  }`
;
