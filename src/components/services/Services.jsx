import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>SERVICES</h2>
      <div className="container services_container">


        {/* Frontend */}
        <article className='service'>
          <div className="service_head">
            <h3>Frontend Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list_icon" />
              <p>Designed layouts on the frontend and developed web applications.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Worked with team developing applications and services using Agile development methods.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Experienced with JavaScript, HTML, CSS, jQuery, Bootstrap, React, next & vue.js</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Planed website development, converting mockups into usable web</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Good understanding of layout aesthetics.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Familiarity with browser testing and debugging.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Ability to perform well in a fast-paced environment.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Good understanding of code optimization.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Excellent analytical and multitasking skills.</p>
            </li>
          </ul>
        </article>


        {/* Node.js development */}
        <article className='service'>
          <div className="service_head">
            <h3>Backnd Development - Node.js</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list_icon" />
              <p>Implemented backend and server integration with node.js & mongodb.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Worked with team developing applications and services using Agile development methods.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Experienced with Node.js, Mongodb, firebase.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Worked on deployment.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Contributed to team and organizational improvements in process and infrastructure.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Built back-end services for payment processing administration and management.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Multi-tasked acrossed multiple functions and role to generate project result and meet deadlines and organizational expectations.</p>
            </li>
          </ul>
        </article>

        {/* Full Stack development */}
        <article className='service'>
          <div className="service_head">
            <h3>Full Stack Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list_icon" />
              <p>Designed and developed frontend & backend web applications.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Worked with developing applications and services using Agile development methods.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Experienced with React, next, vue.js, nuxt.js, Bootstrap, Node.js, and Mongo.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Built customer-facing UI and back-end services for payment processing administration.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Created RESTful services with Node.js.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Architect scalable web architectures.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Ability to translate Wireframes and PSD Designs into functional web apps.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Worked in a cross-functional team to deliver a complete user experience.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Create Unit and Integration tests to ensure the quality of code.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Ability to wear many hats and learn new technologies quickly.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services