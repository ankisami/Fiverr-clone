import React from "react";
import "./Home.scss";
//components
import { Featured, Slider, TrustedBy } from "~/components";
import CategoryCard from "~/components/categoryCard/CategoryCard";
//mocks
import { sliderMock } from "~/mocks/slider.mocks";
import { featuresMock } from "~/mocks/features.mocks";
//assets
import video from "~/assets/video/video.mp4";
import checkSvg from "~/assets/icons/check.svg";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slider>
        {sliderMock.map((item) => (
          <CategoryCard key={item.id} item={item} />
        ))}
      </Slider>
      <div className="features">
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
      </div>
    </div>
  );
};

export default Home;
