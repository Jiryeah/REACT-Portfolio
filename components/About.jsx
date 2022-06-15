import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-blue-500'>About</p>
          <h2 className='py-4'>Who I am</h2>
          <p className='py-2 text-gray-600'>
            // The <span className='text-black'>thrill</span> of problem solving
          </p>
          <p className='py-2 text-gray-600'>
            Many in my generation, if they remember, can admit to manipulating their first bit of
            HTML on old myspace profiles. I was the kid in the neighborhood who loved to do that for
            myself, and others. I didn't quite understand what I was doing, but it was far from
            programming. With a nack for problem solving, and a passion for technology, it wasn't
            long before I decided to pursue development in it's entirety. I have since given up
            myspace HTML edits for databases in SQL and API's in Spring Boot. I can now do more with
            a website appearance through React, than I could have ever imagined. The same curiosity
            that drew me into this field, has humbled me by it's never ending evolution in knowledge
            and growth. I love programming because I can solve problems that can benefit many.
          </p>
          <br />
          <p className='py-2 text-gray-600'>
            I have been able to make interactive websites that function on all devices and platform
            by way of the MERN stack. However, I have since learned that back-end logic, seems to be
            my strong suit; so, I learned Java and started to use the Spring Framework. Databases
            and API's just make sense to my brain in the same way advanced CSS concepts make sense
            to the awesome Front-end developers out there. I intend to solidify my back-end
            foundational skills by learning: AWS, Docker, and also TypeScript.
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
          <Image
            className='rounded-xl'
            src='/../public/assets/about-me2.png'
            alt='/'
            width='500'
            height='620'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
