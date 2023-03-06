import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

import ME from '../../assets/me.png'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>D N SINGH</h1>
        <h5 className="text-light">A Full Stack Developer with a solid background in JavaScript technology stacks such as ReactJS, Vue.js and Node.js</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me"></img>
        </div>
        <a href='#contact' className='scroll-down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header