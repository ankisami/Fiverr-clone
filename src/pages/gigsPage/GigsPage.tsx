import { useRef, useState } from "react";
import "./GigsPage.scss";
//components
import GigCard from "../../components/gigCard/GigCard";
//hooks
import useOutsideClicker from "~/hooks/useOutsideClicker";
//assets
import arrowSvg from "~/assets/icons/arrow.svg";
//mocks
import { gigsMocked } from "~/mocks/data.mocks";

function Gigs() {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef<HTMLInputElement>(null);
  const maxRef = useRef<HTMLInputElement>(null);
  const sortByRef = useOutsideClicker(() => setOpen(false));

  const reSort = (type: string) => {
    setSort(type);
    setOpen(false);
  };

  const apply = () => {
    console.log(minRef.current?.value);
    console.log(maxRef.current?.value);
  };

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
          <div className="right" ref={sortByRef} onClick={() => setOpen(!open)}>
            <span className="sortBy">Sort by</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img src={arrowSvg} alt="" />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
                <span onClick={() => reSort("sales")}>Popular</span>
              </div>
            )}
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
