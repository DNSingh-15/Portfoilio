import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


// do not use the image in production
const data = [
  {
    id: 1,
    image: IMG1,
    title: "Matrimonial Website",
    github: "https://github.com/DNSingh-15/MWD",
    demo: "http://matrimonywebsitedesigners.com/"
  },
  {
    id: 2,
    image: IMG2,
    title: "Crypto currency dashboard and financial visualization",
    github: "https://github.com/DNSingh-15/Crypto-currency-dashboard",
    demo: "https://dnsingh-15.github.io/Crypto-currency-dashboard/"
  },
  {
    id: 3,
    image: IMG3,
    title: "banking-system",
    github: "https://github.com/DNSingh-15/banking-system",
    demo: "https://dnsingh-15.github.io/Crypto-currency-dashb2874"
  },
  {
    id: 4,
    image: IMG4,
    title: "Ecommerce Website Template",
    github: "https://github.com/DNSingh-15/Ecommerce-Website-template/tree/main",
    demo: "https://dnsingh-15.github.io/Crypto-currency-dashb2874"
  },
  {
    id: 5,
    image: IMG5,
    title: "Realtime Chat Application",
    github: "https://github.com/DNSingh-15/realtime-chat-application",
    demo: "https://chat-application123.netlify.app/"
  },
  {
    id: 6,
    image: IMG6,
    title: "React Weather App",
    github: "https://github.com/DNSingh-15/React-Weather-App",
    demo: "https://weather-application12.netlify.app"
  }
]


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Reacent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">

        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio_item">
                <div className="portfolio_item-image">
                  <img src={image} alt={title}></img>
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cfa">
                  <a href={github} className="btn">Github</a>
                  <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio;