import Image from 'next/image';
import React from 'react';
import ProjectItem from '../components/ProjectItem';

import techBlogImg from '../public/assets/projects/techblog-screenshot.png';

const blog = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10' />
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={techBlogImg} alt='/' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Tech News Blog</h2>
          <h3>Spring Framework & ThymeLeaf</h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This Blog was built using Spring Boot, Spring Web, Spring JPA, MySQL, and ThymeLeaf.
            Users can create an account, or login, to be taken to their home page. Users can make a
            post(s) and add a URL that contains any information pertaining to their post(s).
            Different users can comment on each others posts and upvote posts that they have an
            interest with. Once logged out, the dashboard will show prior posts and activity.
            However, you must be logged in to interact with other users.
          </p>
          <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          <button className='px-8 py-2 mt-4'>Source Code</button>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p>Technologies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default blog;
