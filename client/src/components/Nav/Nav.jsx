import React from 'react'

import { images } from '../../constants/'
import './Nav.scss'

const Nav = () => {
  return (
    <nav>
      <div>
        <img src={images.logo} alt='logo' />
      </div>
    </nav>
  )
}

export default Nav