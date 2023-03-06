import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// Import Swiper React components and required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// do not use the image in production
const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti perferendis deserunt iure dignissimos ut aspernatur sint rem placeat a ex. Culpa sequi cum eveniet totam deserunt? Fugit veritatis fugiat quidem!",
  },
  {
    avatar: AVTR2,
    name: "Rohan",
    review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti perferendis deserunt iure dignissimos ut aspernatur sint rem placeat a ex. Culpa sequi cum eveniet totam deserunt? Fugit veritatis fugiat quidem!",
  },
  {
    avatar: AVTR3,
    name: "John",
    review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti perferendis deserunt iure dignissimos ut aspernatur sint rem placeat a ex. Culpa sequi cum eveniet totam deserunt? Fugit veritatis fugiat quidem!",
  },
  {
    avatar: AVTR4,
    name: "Tom Snow",
    review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti perferendis deserunt iure dignissimos ut aspernatur sint rem placeat a ex. Culpa sequi cum eveniet totam deserunt? Fugit veritatis fugiat quidem!",
  }
]


const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      <Swiper className="mySwiper container testimonials_container"
        // install swiper module
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{dynamicBullets: true}}>
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client_avatar">
                  <img src={avatar} alt=""/>
                </div>
                <h5>{name}</h5>
                <small className="client_review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>

    </section>
  )
}

export default Testimonials;