import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className="mask_effect" id="About">
      <div className="container relative">
        <div className="heading">
          <h1>
            About Me <span className="style">.</span>
          </h1>
        </div>
        <div className="about_main w100 flex align_items_center flex_wrap">
          <div className="col_2">
            <h2>
              I am a <span className="style" style={{display:"inline-block"}}>web Application</span>
            </h2>
            <h2>
              And <span className="style" style={{display:"inline-block"}}> Mobile App Developer</span>
            </h2>
            <h2>Who cares about the code</h2>
            <h2>and the people.</h2>
            <span style={{
            paddingTop:"25px"
          }}>Web Developemt</span>
            <span>Apps Dvelopment</span>
            <span>Software Development</span>
            <span>Full stack developement</span>
            <div className="btn cv">
                <a href="#">
                Download CV
                </a>
            </div>
          </div>
          <div className="col_2 end flex">
            <img src={require("../../Assests/me.jpeg")} alt="" style={{
                width:"80%",
                borderRadius:"10px"
            }} />
          </div>
        </div>
      </div>
      <div className="divider"/>
    </div>
  );
};

export default About;
