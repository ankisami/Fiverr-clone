import React from "react";
import "./HomePage.scss";
//components
import { Featured, ProjectCard, TrustedBy } from "~/components";
import CategoryCard from "~/components/categoryCard/CategoryCard";
//mocks
import { categoriesMocked, projectsMocked } from "~/mocks/data.mocks";
import { featuresMock, featuresMock2 } from "~/mocks/features.mocks";
//assets
import checkSvg from "~/assets/icons/check.svg";
//libs
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);

const HomePage = () => {
  const swiperProps = {
    spaceBetween: 25,
    loop: true,
    // centeredSlides: true,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    breakpoints: {
      275: {
        slidesPerView: 1,
      },
      525: {
        slidesPerView: 2,
      },
      800: {
        slidesPerView: 3,
      },
      1075: {
        slidesPerView: 4,
      },
    },
  };

  return (
    <div className="home">
      <Featured />
      <TrustedBy />

      <Swiper {...swiperProps} className="sliderContainer">
        {categoriesMocked.map((category) => (
          <SwiperSlide key={category.id} className="slider">
            <CategoryCard item={category} />
          </SwiperSlide>
        ))}
      </Swiper>

      <section className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            {featuresMock.map(({ title, description }) => (
              <React.Fragment key={title}>
                <div className="title">
                  <img src={checkSvg} alt="" />
                  {title}
                </div>
                <p>{description}</p>
              </React.Fragment>
            ))}
          </div>

          <div className="item">
            <video
              poster="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_2.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png"
              src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7"
              controls
            ></video>
          </div>
        </div>
      </section>

      <section className="features dark">
        <div className="container">
          <div className="item">
            <h1>Fiverr business</h1>
            <h1>A business solution designed for teams</h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            {featuresMock2.map((descrip) => (
              <div className="title" key={descrip}>
                <img src={checkSvg} alt="" />
                {descrip}
              </div>
            ))}
            <button>Explore Fiverr Business</button>
          </div>

          <div className="item">
            <img
              className="featureImage"
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
          </div>
        </div>
      </section>

      <Swiper {...swiperProps}>
        {projectsMocked.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomePage;
