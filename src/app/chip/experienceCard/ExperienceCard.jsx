import React from 'react'

function ExperienceCard({companyName , jobRole , time , description}) {
  return (
    <div className=" relative mt-5 mb-10">
       
    <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
      <h1 className="text-[1.4rem] font-semibold sm:text-xl">
        {jobRole}
      </h1>
      <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
       { companyName}
      </span>
      <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
       {time}
      </span>
      <p className=" text-[.9rem] text-justify break-words text-gray-500">
        {description}
      </p>
    </div>
  </div>
  )
}

export default ExperienceCard
