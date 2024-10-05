import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import XIcon from '@mui/icons-material/X';

function About() {
  return (
    <div className='m-[auto] w-[100%] bg-yellow-500 flex flex-col h-[200px] items-center justify-center text-4xl'>
        <h1 className='font-cursive'>Let's Talk</h1>
        <div className='flex w-[26%] justify-around mt-3'>
            <InstagramIcon className='hover:scale-110 cursor-pointer' fontSize='large'/>
            <WhatsAppIcon className='hover:scale-110 cursor-pointer'fontSize='large'/>
            <TelegramIcon className='hover:scale-110 cursor-pointer'fontSize='large'/>
            <XIcon className='hover:scale-110 cursor-pointer' fontSize='large'/>

        </div>
      
    </div>
  )
}

export default About
