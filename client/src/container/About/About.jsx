import React, {useEffect, useState} from 'react'
import { motion } from 'framer-motion';

import './About.scss';

const abouts = [
  { title: 'Fullstack Development', description: 'Connecting the front and back end together to create well rounded apps.', imgUrl: ''},
  { title: 'Frontend Development', description: 'Creating user friendly UI/UX to ensure the user is engaged and satisfied.', imgUrl: ''},
  { title: 'Backend Development', description: 'Initializing logic-first servers and database structures.', imgUrl: ''},
]

const About = () => {
  return (
    <>
      <h2 className='head-text'>
        When we come together and
        <br />
        <span>Collaborate</span>
        <br />
        we create solutions for the
        <br/>
        <span>World</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About