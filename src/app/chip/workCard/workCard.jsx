'use client';  // Make sure this is a client component

import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState, useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'


function WorkCard({ image, name, url }) {
  useEffect(() => {
    Aos.init({});
    Aos.refresh();
  }, []);


  return (
    <Link href={url} target='_blank' data-aos="zoom-in">
      <div className='w-[100%] h-[300px] flex flex-col items-center justify-center mb-10  bg-gray-300 shadow-xl rounded-md mb-'>
        <div className='w-[100%] h-[80%] flex items-center justify-center flex-col' >
          <Image
            src={image}
            className='w-[90%] h-[80%] hover:w-full hover:scale-110 transition-all duration-300 cursor-pointer rounded-md'
            alt='Image'
          />
        </div>
        <p className="text-gray-800 text-xl font-medium sm:text-lg mt-1 font-monospace">
          {name}
        </p>
      </div>
    </Link>
  );
}

export default WorkCard;
