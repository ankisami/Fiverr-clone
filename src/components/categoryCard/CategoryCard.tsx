import "./CategoryCard.scss";
//libs
import { Link } from "react-router-dom";
//models
import { Slider } from "~/models/slider.types";

type Props = {
  item: Slider;
};
function CategoryCard({ item }: Props) {
  return (
    <Link to="/gigs?cat=design">
      <div className="categoryCard">
        <img src={item.image} alt={item.title} />
        <span className="description">{item.description}</span>
        <span className="title">{item.title}</span>
      </div>
    </Link>
  );
}

export default CategoryCard;
