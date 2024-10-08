'use client'
import React, { useEffect } from 'react'
import ExperienceCard from '@/app/chip/experienceCard/ExperienceCard'
import Aos from 'aos'
import 'aos/dist/aos.css'


function Experience() {

    useEffect(() => {
        Aos.init({}); 
        Aos.refresh();
    }, []);

    return (
        <div id="resume" className=" container m-auto pl-3  mt-16">
            {/* heading */}
            <div data-aos="fade-up" className="relative mb-5">
                <h3 className=" text-3xl font-black text-gray-400 sm:text-xl font-monopolysive mb-4">
                    Experience
                </h3>
                <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
            </div>
            <div data-aos="fade-up" className="left flex-1 w-[100%]">
                <p className=" text-gray-700 font-medium w-[100%]">
                    My experiences and qualifications.
                </p>
            </div>
            {/* card*/}
            <div className="card-wrapper w-[96%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
                <div className="left flex-1 flex fle flex-col items-center justify-center">
                   
                    <fieldset
                        data-aos="zoom-in"
                        className=" w-[100%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
                    >
                        <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
                            Experience
                        </legend>

                        <ExperienceCard companyName={" SecureMetasys Pvt Ltd."} jobRole={"Software Developer Engineer"} time={"May 2024 - Present"} description={"Designed and implemented web applications using React for the front end and Node.js for the back end, collaborating with cross-functional teams to deliver high-quality, scalable solutions while ensuring robust testing and performance optimization."} />

                        <ExperienceCard companyName={"ITC Infotech"} jobRole={"React Front End Developer"} time={"Nov 2023 - April 2024"} description={"Developed responsive web applications using HTML, CSS, and React, collaborating with cross-functional teams to enhance user experience and ensure high-quality deliverables through testing and performance optimization."} />

                    </fieldset>
                    <fieldset
                        data-aos="zoom-in"
                        className=" w-[100%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
                    >
                        <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
                            Education
                        </legend>

                        <ExperienceCard companyName={""} jobRole={"Computer Science Engineer"} time={"JSPM College of Engineering Pune"} description={"CGPA - 8.4"} />
                    </fieldset>
                </div>

            </div>
        </div>
    )
}

export default Experience
