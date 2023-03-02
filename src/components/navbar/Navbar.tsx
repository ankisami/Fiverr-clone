import { useEffect, useState } from "react";
import "./Navbar.scss";
import { mockedUser } from "~/mocks/user";
import { Link, useLocation } from "react-router-dom";
import profile1 from "~/assets/images/profile1.jpeg";
import "~/App.scss";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isOpenProfileMenu, setisOpenProfileMenu] = useState(false);
  const currentUser = mockedUser;
  const { pathname } = useLocation();

  const displayNavbar = () => {
    window.scrollY > 100 ? setIsActive(true) : setIsActive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", displayNavbar);

    return () => {
      window.removeEventListener("scroll", displayNavbar);
    };
  }, []);

  return (
    <div className={isActive || pathname !== "/" ? "navbar active" : "navbar"}>
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

      {(isActive || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="link " to="/">
              Video & Animation
            </Link>
            <Link className="link " to="/">
              Writing & Translation
            </Link>
            <Link className="link " to="/">
              AI Services
            </Link>
            <Link className="link " to="/">
              Digital Marketing
            </Link>
            <Link className="link " to="/">
              Music & Audio
            </Link>
            <Link className="link " to="/">
              Programming & Tech
            </Link>
            <Link className="link " to="/">
              Business
            </Link>
            <Link className="link " to="/">
              Lifestyle
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
