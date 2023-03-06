import React from 'react'
import './footer.css'
import { BsInstagram, BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'> D N SINGH </a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href='https://www.linkedin.com/in/d-n-singh-49b85b1b2/'> <BsLinkedin /></a>
        <a href='https://github.com/DNSingh-15'><BsGithub /></a>
        <a href='https://instagram.com/__dnsingh_15__?igshid=ZDdkNTZiNTM='><BsInstagram /></a>
        <a href='https://twitter.com/DNSingh_15?t=xWdK5Bg918dBMaCp3UDeWQ&s=09'><BsTwitter /></a>
      </div>
      <div className="footer_copyright">
        <small>
          &copy; D N Singh Personal Website. All rights riversed.
        </small>
      </div>
    </footer>
  )
}

export default Footer;