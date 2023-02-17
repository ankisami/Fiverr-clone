import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { userMocked } from "~/mocks/user";
import { Link } from "react-router-dom";
import profile1 from "~/assets/images/profile1.jpeg";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isOpenProfileMenu, setisOpenProfileMenu] = useState(false);
  const currentUser = userMocked;

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
    <div className={isActive ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <span className="text">fiverr</span>
          <span className="dot">.</span>
        </div>

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
                      <span>Gigs</span>
                      <span>Add New Gig</span>
                    </>
                  )}
                  <span>Orders</span>
                  <span>Messages</span>
                  <span>Logout</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {isActive && (
        <>
          <hr />
          <div className="menu">
            <span>test</span>
            <span>test2</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
