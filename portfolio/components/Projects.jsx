import React from 'react';
import techBlogImg from '../public/assets/projects/techblog-screenshot.png';
import FimiQA from '../public/assets/projects/FimiQA-screenshot.png';
import ECommerce from '../public/assets/projects/Ecommerce-screenshot.png';
import GoogleAPI from '../public/assets/projects/BookAPI-screenshot.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-blue-500'>Projects</p>
        <h2 className='py-4'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Tech Blog'
            backgroundImg={techBlogImg}
            projectUrl='/blog'
            techUsed='Spring Framework & ThymeLeaf'
          />
          <ProjectItem
            title='QA Assurance App'
            backgroundImg={FimiQA}
            projectUrl='/assurance'
            techUsed='JavaScript MVC, MySQL DB, Sequelize, Express.js, Handlebars.js'
          />
          <ProjectItem
            title='Google Books Search Engine'
            backgroundImg={GoogleAPI}
            projectUrl='/book'
            techUsed='MERN'
          />
          <ProjectItem
            title='E-commerce Shop'
            backgroundImg={ECommerce}
            projectUrl='/shop'
            techUsed='MERN'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
