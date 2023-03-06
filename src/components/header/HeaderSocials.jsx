import React from 'react'
import { BsLinkedin, BsGithub} from 'react-icons/bs'
import { TfiEmail} from 'react-icons/tfi'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href='www.linkedin.com' target="_blank"> <BsLinkedin/> </a>
            <a href='www.grithub.com' target="_blank"> <BsGithub/> </a>
            <a href='www.grithub.com' target="_blank"> <TfiEmail/> </a>
        </div>
    )
}

export default HeaderSocials