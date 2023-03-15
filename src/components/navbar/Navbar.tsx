import { useEffect, useState } from "react";
import "./Navbar.scss";
//mocks
import { mockedUser } from "~/mocks/user.mocks";
//libs
import { Link, useLocation } from "react-router-dom";
import cn from "classnames";
//assets
import profile1 from "~/assets/images/profile1.jpeg";
import arrow from "~/assets/icons/arrow.svg";
//hooks
import useOutsideClicker from "~/hooks/useOutsideClicker";

const Navbar = () => {
  const [isActiveMainMenu, setsetIsActiveMainMenuMainMenu] = useState(false);
  const [isOpenProfileMenu, setisOpenProfileMenu] = useState(false);
  const [isActiveMainMenuSubMenu, setIsActiveMainMenuSubMenu] = useState(false);
  const currentUser = mockedUser;
  const { pathname } = useLocation();

  const displayNavbar = () => {
    window.scrollY > 0
      ? setsetIsActiveMainMenuMainMenu(true)
      : setsetIsActiveMainMenuMainMenu(false);
    window.scrollY > 200
      ? setIsActiveMainMenuSubMenu(true)
      : setIsActiveMainMenuSubMenu(false);
  };

  const outClickableRef = useOutsideClicker(() => setisOpenProfileMenu(false));

  useEffect(() => {
    window.addEventListener("scroll", displayNavbar);

    return () => {
      window.removeEventListener("scroll", displayNavbar);
    };
  }, []);

  return (
    <div
      className={
        isActiveMainMenu || pathname !== "/" ? "navbar active" : "navbar"
      }
    >
      <div className="container">
        <Link to="/" className="link">
          <div className="logo">
            <span className="text">fiverr</span>
            <span className="dot">.</span>
          </div>
        </Link>

        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div
              className="user"
              onClick={() => setisOpenProfileMenu((prev) => !prev)}
              ref={outClickableRef}
            >
              <img src={profile1} alt="profile" />
              <span>{currentUser?.username}</span>
              {isOpenProfileMenu && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link className="link" to="/my-gigs">
                        Gigs
                      </Link>
                      <Link className="link" to="/add">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" to="">
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* {(isActiveMainMenuSubMenu || pathname !== "/") && (
        <> */}
      <ul className={cn("menu", { ["active"]: isActiveMainMenuSubMenu })}>
        <li>
          <Link className="link" to="/">
            Graphics & Design
          </Link>
        </li>

        <li>
          <Link className="link " to="/">
            Video & Animation
          </Link>
        </li>

        <li>
          <Link className="link " to="/">
            Writing & Translation
          </Link>
        </li>
        <li>
          <Link className="link " to="/">
            AI Services
          </Link>
        </li>
        <li>
          <Link className="link " to="/">
            Digital Marketing
          </Link>
        </li>
        <li>
          <Link className="link " to="/">
            Music & Audio
          </Link>
        </li>
        <li>
          <Link className="link " to="/">
            Programming & Tech
          </Link>
        </li>
        <li>
          <Link className="link " to="/">
            Business
          </Link>
        </li>
        <li>
          <Link className="link " to="/">
            Lifestyle
          </Link>
        </li>
        <button>
          <img src={arrow} alt="" />
        </button>
      </ul>
      {/* </>
      )} */}
    </div>
  );
};

export default Navbar;
