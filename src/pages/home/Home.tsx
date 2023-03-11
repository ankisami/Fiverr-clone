import "./Home.scss";

//components
import { Featured, TrustedBy } from "~/components";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
    </div>
  );
};

export default Home;
