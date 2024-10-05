import { Grid } from '@mui/material'
import React from 'react'
import WorkCard from '@/app/chip/workCard/workCard'
import rake from '../../../../public/images/rake.png'
import preschool from '../../../../public/images/preschool.png'
import stoxbox from '../../../../public/images/stoxbox.png'

function  Work() {
  return (
  
    <div className='h-[auto] mt-5 ml-5 mr-5 mt-10'>
       <h2 className='text-3xl font-black font-monospace text-gray-300 mb-4'>Works</h2>
      <hr></hr>
      <h4 className='mb-4 font-monospace'>Projects I have Worked On</h4>
      <Grid container>
        <WorkCard image={rake} name={"Rake Casino"} url= {"https://rake.com/"}/>
        <WorkCard image={stoxbox} name={"Stox Box"}  url= {"https://stoxbox.in/trading-stoxbox"}/>
        <WorkCard image={preschool} name={"Wingham School"}  url= {"https://preschool-green.vercel.app/login"}/>
      </Grid> 
    </div>
  )
}

export default Work
