import React, { useRef, useState } from "react";
import "./Header.scss";

const Header = () => {
  const [open, setOpen] = useState(false);
  const scrollRef = useRef(null);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 90) {
      document.querySelector(".header_main")?.classList.add("active");
    } else {
      document.querySelector(".header_main")?.classList.remove("active");
    }
  });

  return (
    <div
      className="header_main w100 flex align_items_center space_beetween px_2"
      ref={scrollRef}
    >
      <div className="left_varse_header">
        <a href="#Hero">
          John D<span className="style">.</span>
        </a>
      </div>
      <div className="right_varse_header">
        <div className="navbar_box" onClick={() => setOpen(!open)}>
          <img
            src={
              open
                ? require("../../Assests/x.png")
                : require("../../Assests/hamburger.png")
            }
            alt=""
            style={{
              width: open ? "20px" : "25px",
              height: open ? "20px" : "25px",
              objectFit: "contain",
              zIndex: 11,
            }}
          />
        </div>
      </div>

      {open ? (
        <>
          <div className="menuItems">
            <div className="navbar">
              <ul className="navbar_ul flex column w100 align_items_center">
                <a href="#Home">
                  <li>Home</li>
                </a>
                <a href="#About">
                  <li>About</li>
                </a>
                <a href="#Skills">
                  <li>Skills</li>
                </a>
                <a href="#Portfolio">
                  <li>Portfolio</li>
                </a>
                <a href="#Testimonials">
                  <li>Testimonials</li>
                </a>
                <a href="#Contact">
                  <li>Contact</li>
                </a>
                <a href="#Hero" className="hire_link">
                  Hire Me
                </a>
              </ul>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Header;
