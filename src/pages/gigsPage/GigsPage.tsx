import { useRef, useState } from "react";
import "./GigsPage.scss";
//components
import GigCard from "../../components/gigCard/GigCard";
//hooks
import useOutsideClicker from "~/hooks/useOutsideClicker";
//assets
import arrowSvg from "~/assets/icons/arrow.svg";
import validSvg from "~/assets/icons/valid.svg";
//mocks
import { gigsMocked } from "~/mocks/data.mocks";
//libs
import cn from "classnames";

type SortBy = "recommended" | "bestSelling" | "newest";

function Gigs() {
  const [sort, setSort] = useState<SortBy>("recommended");
  const [isSortByMenu, setIsSortByMenu] = useState(false);
  const minRef = useRef<HTMLInputElement>(null);
  const maxRef = useRef<HTMLInputElement>(null);
  const sortByRef = useOutsideClicker(() => setIsSortByMenu(false));
  const sortCategeries = {
    recommended: "Recommended",
    bestSelling: "Best Selling",
    newest: "Newest Arrivals",
  };

  const reSort = (type: SortBy) => {
    setSort(type);
    setIsSortByMenu(false);
  };

  const apply = () => {
    console.log(minRef.current?.value);
    console.log(maxRef.current?.value);
  };

  console.log("isSortByMenu", isSortByMenu);
  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">
          Liverr {">"} Graphics & Design {">"}
        </span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with Liverr's AI artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input ref={minRef} type="number" placeholder="min" />
            <input ref={maxRef} type="number" placeholder="max" />
            <button onClick={apply}>Apply</button>
          </div>

          <div ref={sortByRef}>
            <div
              className="sortByMenu"
              onClick={() => setIsSortByMenu((prev) => !prev)}
            >
              <span className="sortBy">Sort by</span>
              <span className="sortType">{sortCategeries[sort]}</span>
              <img
                src={arrowSvg}
                alt="Sort by menu"
                className={cn({ ["isSortByMenu"]: isSortByMenu })}
              />
            </div>

            <div
              className={cn("sortByMenuOverlay", { ["open"]: isSortByMenu })}
            >
              <div className="menuOption" onClick={() => reSort("recommended")}>
                <img
                  src={validSvg}
                  className={cn({ ["visible"]: sort === "recommended" })}
                />
                <span>Recommended</span>
              </div>
              <div className="menuOption" onClick={() => reSort("bestSelling")}>
                <img
                  src={validSvg}
                  className={cn({ ["visible"]: sort === "bestSelling" })}
                />
                <span>Best Selling</span>
              </div>
              <div className="menuOption" onClick={() => reSort("newest")}>
                <img
                  src={validSvg}
                  className={cn({ ["visible"]: sort === "newest" })}
                />
                <span>Newest Arrivals</span>
              </div>
            </div>
          </div>
        </div>
        <div className="cards">
          {gigsMocked.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gigs;
