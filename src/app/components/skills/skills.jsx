'use client'
import React from 'react'
import styles from './skills.module.css'
import Progressbar from "@/app/chip/progressBar/progressBar"
import SkillBox from "@/app/chip/skillBox/skillBox"
import HtmlIcon from '@mui/icons-material/Html';
import { Grid, Paper } from '@mui/material';
import ApiIcon from '@mui/icons-material/Api';
import Zoom from "react-reveal/Zoom";

function SkillsSection() {
  return (
    <Zoom>
    <div className='mt-5 ml-5 mr-5'>
      <h2 className='text-3xl font-black font-monospace text-gray-300 mb-4'>My Skills</h2>
      <hr></hr>
      <h4 className='mb-4 font-monospace'>Here are my skills.</h4>
      <Paper elevation={5} className='w-full h-full pt-5 p-5 flex justify-around'>
        <Grid container spacing={2}>
          {/* First Grid item */}
          <Grid item xs={12} md={6} className="h-auto pl-3 flex flex-col align-center justify-center">
            
            <Progressbar value={90} name={"React"} />
            <Progressbar value={80} logo={<HtmlIcon fontSize="large" />} name={"HTML"} />
            <Progressbar value={70} name={"Next JS"} />
            <Progressbar value={50} logo={<ApiIcon fontSize="medium" />} name={"Prisma"} />
          </Grid>

          {/* Second Grid item */}
          <Grid item xs={12} md={6} className="flex flex-wrap h-auto justify-around">
            <SkillBox logo={<ApiIcon />} name={"Prisma"} />
            <SkillBox logo={<ApiIcon />} name={"Prisma"} />
            <SkillBox logo={<ApiIcon />} name={"Prisma"} />
            <SkillBox logo={<ApiIcon />} name={"Prisma"} />
          </Grid>
        </Grid>
      </Paper>

    </div>
     </Zoom>
  )
}

export default SkillsSection
