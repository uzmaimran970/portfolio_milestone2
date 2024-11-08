"use client";
import React from 'react'

import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import girl from "../../../public/images/girl3.webp"

const Herosection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 sm:text-5xl text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              hello I&apos;m{' '}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                'Uzma',
                1000,
                'Web Developer',
                1000,
                'Digital Marketer',
                1000,
                'Student of Generative AI',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>


        <p className="text-[#ADB7BE] text-base sm:text-lg  mb-6 lg:text-xl">Hi! I am a Frontend Web Developer, exploring the dynamic world of Generative AI and Digital Marketing. My passion lies in building engaging, user-focused web experiences that leverage cutting-edge tech to bring ideas to life. From responsive interfaces to AI-driven solutions, I am dedicated to crafting impactful digital experiences that blend creativity and technology.

</p>
        <div>
            <button className='px-6 py-3 w:full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-700 to-pink-500 hover:bg-slate-200 text-white'>Hire Me</button>
            <button className='px-1 py-1 w:full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800  mt-3'>
            <a
  href="/images/c.v2.pdf" 
  download="My_CV.pdf" 
  className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 text-white"
>
  Download CV
</a>
</button>
        </div>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
            <div className='rounded-full bg-[#121212] w-[250px] h-[250px] relative lg:w-[400px] lg:h-[400px]'>
            <Image
            src={girl}
            alt='girlimg'
            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
            width={350}
            height={350}/>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Herosection;
