'use client'
import React from 'react'
import Progressbar from "@/app/chip/progressBar/progressBar"
import SkillBox from "@/app/chip/skillBox/skillBox"
import HtmlIcon from '@mui/icons-material/Html';
import { Grid, Paper } from '@mui/material';
import ApiIcon from '@mui/icons-material/Api';

function SkillsSection() {
  return (
    <div className='mt-5 ml-5 mr-5'>
      <h2 className='text-3xl font-black font-monopolysive text-gray-300 mb-4'>My Skills</h2>
      <hr></hr>
      <h4 className='mb-4 font-monospace'>Here are my skills.</h4>
      <Paper elevation={5} style={{
        height: 'auto',
        paddingLeft: '12px',  // 'pl-3' corresponds to padding-left: 12px in Tailwind
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',  // 'align-center' aligns items to the center
        justifyContent: 'center',
        paddingTop:'10px'
      }}>
        <Grid container spacing={2}>
          {/* First Grid item */}
          <Grid item xs={12} md={6}>

            <Progressbar value={90} name={"React"} />
            <Progressbar value={80} logo={<HtmlIcon fontSize="large" />} name={"HTML"} />
            <Progressbar value={70} name={"Next JS"} />
            <Progressbar value={50} logo={<ApiIcon fontSize="medium" />} name={"Prisma"} />
          </Grid>

          {/* Second Grid item */}
          <Grid item xs={12} md={6} className="flex flex-wrap h-auto justify-around items-center">
            <SkillBox logo={<ApiIcon />} name={"Prisma"} />
            <SkillBox logo={<ApiIcon />} name={"Prisma"} />
            <SkillBox logo={<ApiIcon />} name={"Prisma"} />
            <SkillBox logo={<ApiIcon />} name={"Prisma"} />
          </Grid>
        </Grid>
      </Paper>

    </div>
  )
}

export default SkillsSection
