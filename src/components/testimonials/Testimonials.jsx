import React, { useRef, useState } from "react";
import "./testimonials.css";
import { BiTime } from "react-icons/bi";
import { AiOutlineTeam } from "react-icons/ai";
// import { BsCalendar4Week } from "react-icons/bs";
import { BiDirections } from "react-icons/bi";
import { FaCreativeCommonsRemix } from "react-icons/fa";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { RiOrganizationChart } from "react-icons/ri";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Other Skills I Have</h5>
      <h2>Soft Skills</h2>

      <Swiper
        className="container testimonials__container"
        loop={true}
        // install Swiper modules
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <RiLightbulbFlashLine />
          </div>
          <h2>Problem Solving</h2>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <AiOutlineTeam />
          </div>
          <h2>Teamwork</h2>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <BiTime />
          </div>
          <h2>Time Management</h2>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <BiDirections color="white" />
          </div>
          <h2>Decision Making</h2>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <RiOrganizationChart />
          </div>
          <h2>Organizing</h2>
        </SwiperSlide>

        {/* <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <BsCalendar4Week />
          </div>
          <h2>Planning</h2>
        </SwiperSlide> */}

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <FaCreativeCommonsRemix />
          </div>
          <h2>Creativity</h2>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
