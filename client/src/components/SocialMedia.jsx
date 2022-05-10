import React from 'react';
import { BsTwitter, BsGithub } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsGithub />
    </div>
    <div>
      <FaLinkedin />
    </div>
    <div>
      <BsTwitter />
    </div>
  </div>
);

export default SocialMedia;