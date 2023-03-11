import { useRef } from "react";
import "./Featured.scss";
//assets
import myPicturePng from "~/assets/images/my-picture.png";
import zachPng from "~/assets/images/zach.png";
import searchSvg from "~/assets/icons/search.svg";

const Featured = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <i>freelance</i> services for your business
          </h1>
          <div
            className="search"
            onClick={() => searchInputRef.current?.focus()}
          >
            <div className="searchInput">
              <img src={searchSvg} alt="" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder='Try "building mobile app"'
              />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>Wordpress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
          <img src={zachPng} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
