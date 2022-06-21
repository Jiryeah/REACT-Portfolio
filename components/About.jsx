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
          <p className='py-2 text-gray-600'>
            The <span className='text-black'>thrill</span> of problem solving
          </p>
          <p className='py-2 text-gray-600'>
            I received a certificate in Full Stack Web Development from the University of Texas at
            San Antonio. I have been able to make interactive websites that function on all devices
            and platforms through utilizing the MERN stack. However, I have since learned that
            back-end logic, seems to be my strong suit; therefore, I learned Java and began to use
            Spring Boot to further develop my "tool box". The same curiosity that drew me into this
            field, has humbled me by it's never ending evolution in knowledge and growth. I intend
            to solidify my back-end foundational skills by learning: AWS, Docker, and TypeScript.
            One must never abstain from learning, because our time is finite while knowledge is
            infinite.
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
