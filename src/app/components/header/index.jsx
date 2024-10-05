'use client'
import React, { useEffect, useState } from 'react';
import { Button, Grid } from '@mui/material'; // Import the Grid component from MUI
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import Logo from  '../../../../public/images/RK_logo.jpg'
import Image from 'next/image';

function Header() {
    // const navItems = [
    //     { id: 1, name: "Home", link: '' },
    //     { id: 2, name: "About", link: '' },
    //     { id: 3, name: "Projects", link: '' }
    // ];
    const textArray = ['Developer', 'Problem Solver', 'Creative Thinker', 'Team Player'];
    const [currentIndex, setCurrentIndex] = useState(0);
  

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
          }, 2000);
        return () => clearInterval(interval)
    }, [])

    return (
        <div className=' bg-gradient-to-r from-green-200 to-blue-200 w-[100%]'>
            <div className='flex justify-between'>
                <section className='pt-6 pl-12'>
                    <Image className= 'h-10 w-20' src={Logo} alt='Logo'></Image>
                </section>
                {/* <section className='pt-6 pl-12 w-1/2 flex justify-evenly'>
                    {navItems.map((item) => (
                        <Button className='text-black font-semibold' key={item.id}>{item.name}</Button>
                    ))}
                    <Button className='text-black font-semibold'>Contact</Button>
                </section> */}
            </div>

            <Grid container spacing={5} style={{ padding: 16 }} className='mt-20'>
                <Grid item xs={12} sm={6} md={6} lg={6} className='h-80'>
                    <div className='mt-5'>
                        <h1 className='text-black text-4xl font-bold font-cursive'>Hello, I&apos;m Rohit <br/> Full Stack Developer</h1>
                        <h1 className='text-2xl font-semibold text-amber-300 font-cursive mt-4'>
                            {textArray[currentIndex]}
                        </h1>
                        <h5 className='text-xs mt-2'>Lorem ipsum dolor sit amet,</h5>
                    </div>
                    <div className="flex">
                        {/* <Button className="bg-black text-white hover:bg-gray-800 mt-5 mb-5 w-32">
                            Hire Me
                        </Button>  */}
                        <Button className="bg-black text-white hover:bg-gray-800 mt-5 mb-5 w-32">
                            Resume <ArrowCircleDownIcon  style={{marginLeft :'2px'}}/>
                        </Button>
                    </div>
                    <div className="flex gap-5">
                        <LinkedInIcon/>
                        <InstagramIcon/>
                        <GitHubIcon/>
                        <XIcon/>
                      
                    </div>


                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                        here my photo
                </Grid>
            </Grid>
        </div>
    );
}

export default Header;
