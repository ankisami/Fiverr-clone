import "./Home.scss";
//components
import { Featured, Slider, TrustedBy } from "~/components";
import CategoryCard from "~/components/categoryCard/CategoryCard";
//mocks
import { sliderMock } from "~/mocks/slider.mocks";

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
    </div>
  );
};

export default Home;
