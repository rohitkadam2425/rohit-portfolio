'use client';  // Make sure this is a client component

import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function WorkCard({ image, name, url }) {
  const ref = useRef(null);  // Ref for the component
  const [isVisible, setIsVisible] = useState(false);  // State to track visibility

  // Intersection Observer to track when the component is in the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,  // Trigger when 20% of the component is in view
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}  // Attach the ref to the div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : {}}  // Animate only when visible
      transition={{ duration: 0.5 }}
    >
      <Link href={url} target='_blank'>
        <div className='w-[420px] h-[350px] flex flex-col items-center justify-center ml-8 bg-gray-300 shadow-xl rounded-md mb-'>
          <div className='w-[100%] h-[80%] flex items-center justify-center flex-col'>
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
    </motion.div>
  );
}

export default WorkCard;
