import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import aboutImg from '../public/assets/about-me2.png';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-blue-500'>About</p>
          <h2 className='py-4'>Who I am</h2>
          <p className='py-2 text-gray-600 italic text-lg'>
            The <span className='text-black'>thrill</span> of problem solving
          </p>
          <p className='py-2 text-gray-600'>
          Hey there! <span className='font-bold text-black italic'>The truth is, I'm obsessed with solving problems that benefit others. So, although I'm grateful that you're about to read my mini-bibliography below, I just like to solve problems that help people first and foremost. </span>
          <span className='font-bold text-red uppercase text-xl'> AS OF NOW, THIS PORTFOLIO SITE IS UNDER CONSTRUCTION. It is getting rebuilt with SvelteKit & TypeScript.</span>
          </p>
          <h3>MERN Stack Foundation: </h3>
          <p className='py-2 text-gray-600'>
          I’ve crafted interactive websites that seamlessly function across all devices and platforms using the MERN (MongoDB, Express.js, React, Node.js) stack.
          Front-end development was my starting point, but I soon realized that my true passion lies in the intricate world of back-end logic.
          </p>
          <h3>SharePoint Backends: </h3>
          <p className='py-2 text-gray-600'>
          Professionally, I’ve had the privilege of designing backends that are structured within SharePoint. Collaborating with teams, I’ve built efficient workflows and integrated custom solutions.
          SharePoint’s complexity has challenged me, but it’s also been immensely rewarding.
          </p>
          <h3>TypeScript Enthusiast: </h3>
          <p className='py-2 text-gray-600'>
          TypeScript has become my trusted companion. Its static typing and enhanced tooling have elevated my development process
          when utilizing it within React to ensure fluid production level application.
          </p>
          <h3>Current Endeavors: </h3>
          <p className='py-2 text-gray-600'>
          My learning journey continues! I’m currently diving into C# and exploring the vast .NET Framework.
          AWS and Docker are next on my list—I’m eager to master cloud services and containerization.
          </p>
          <h3> A Never-Ending Quest: </h3>
          <p className='py-2 text-gray-600'>
          I firmly believe that learning is a lifelong pursuit. Our time may be finite, but knowledge is infinite. So, I remain curious, humble, and committed to evolving alongside the ever-changing tech landscape.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects
            </p>
          </Link>
        </div>
        <div
          className='
        w-full
        h-auto
        m-auto
        shadow-xl
        shadow-gray-400
        rounded-xl
        flex
        items-center
        justify-center
        p-4
        hover:scale-105
        ease-in
        duration-300
        '
        >
          <Image className='rounded-xl' src={aboutImg} alt='/' width='500' height='620' />
        </div>
      </div>
    </div>
  );
};

export default About;
