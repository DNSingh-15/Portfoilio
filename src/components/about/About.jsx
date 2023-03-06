import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'


const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About'></img>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>EXPERIENCE</h5>
              <small> 2 + Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>CLIENTS</h5>
              <small> 5 + World Wide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>PROJECTS</h5>
              <small> 45 + Completed</small>
            </article>
          </div>
          <p>I'm a logical and results-driven Full Stack Developer dedicated to building and optimizing user-focused web applications.  Experience in working with Package Management tools such as npm and yarn. Experienced in writing clear, well-documented and commented code for any type of application.</p>
          <a href="#contact" className='btn btn-primary'>Lets's Talk</a>
        </div>

      </div>
    </section>
  )
}

export default About