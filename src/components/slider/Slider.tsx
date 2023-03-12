import { useEffect, useState } from "react";
import "./Slider.scss";
//libs
import { Slider as Carousel } from "infinite-react-carousel";

type Props = {
  children: React.ReactNode;
  slidesToShow?: number;
  arrowsScroll?: number;
} & React.ComponentPropsWithRef<typeof Carousel>;
const Slider = ({
  children,
  slidesToShow = 5,
  arrowsScroll = 5,
  ...props
}: Props) => {
  const handleNumberOfSlides = () => {
    if (window.innerWidth > 1300) {
      return 5;
    } else if (window.innerWidth > 1030) {
      return 4;
    } else if (window.innerWidth > 760) {
      return 3;
    } else if (window.innerWidth > 490) {
      return 2;
    } else {
      return 1;
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
