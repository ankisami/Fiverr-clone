import { useEffect, useState } from "react";
import "./Slider.scss";
//libs
import { Slider as Carousel } from "infinite-react-carousel";

type Props = {
  children: React.ReactNode;
  slidesToShow?: number;
  arrowsScroll?: number;
} & React.ComponentPropsWithRef<typeof Carousel>;
const Slider = ({ children, slidesToShow = 5, ...props }: Props) => {
  const handleNumberOfSlides = () => {
    if (window.innerWidth > 1300) {
      return slidesToShow;
    } else if (window.innerWidth > 1030) {
      return slidesToShow - 1 > 0 ? slidesToShow - 1 : 1;
    } else if (window.innerWidth > 760) {
      return slidesToShow - 2 > 0 ? slidesToShow - 2 : 1;
    } else if (window.innerWidth > 490) {
      return slidesToShow - 3 > 0 ? slidesToShow - 3 : 1;
    } else {
      return slidesToShow - 4 > 0 ? slidesToShow - 4 : 1;
    }
  };

  const [slideNumber, setSlideNumber] = useState(handleNumberOfSlides);

  useEffect(() => {
    window.addEventListener("resize", () =>
      setSlideNumber(handleNumberOfSlides)
    );

    return () => {
      window.removeEventListener("resize", () =>
        setSlideNumber(handleNumberOfSlides)
      );
    };
  }, []);

  return (
    <div className="slider">
      <div className="container">
        <Carousel
          slidesToShow={slideNumber}
          arrowsScroll={slideNumber}
          pauseOnHover
          autoplay
          autoplaySpeed={2000}
          duration={5000}
          {...props}
        >
          {children}
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
