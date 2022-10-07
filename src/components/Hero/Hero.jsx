import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="mask_effect" id="Home">
      <div className="hero_main w100 flex align_items_center relative px_2 flex_wrap">

        <div className="left_varse_hero col_2">
          <div className="hero_content px_2">
            <h1>
              Hi! I am <span className="style">John Doe</span>
              <h1>A Full Stack Web developer.</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
                nesciunt accusantium veritatis voluptate, dolor sint aliquid in
                consectetur voluptatum perspiciatis quis enim, et minima
                ducimus, sit perferendis soluta quas ipsam!
              </p>
              <a href="#">
               <button className="btn hire_hero">
               Hire me
               </button>
              </a>
            </h1>
          </div>
        </div>

        <div className="right_varse_Hero flex align_items_center justify_content_center col_2">
           <div className="hero_image flex justify_content_center">
              <div className="intro_image flx justify_content_center">
                <img src={require("../../Assests/banner.png")} alt="" style={{
                    width:"80%",
                    objectFit:"contain"
                }} 
                className="Hero_image"
                />
              </div>
           </div>
        </div>
        <div className="blur_effect_hero"/>
        <div className="round_effect white"/>
        <div className="round_effect green"/>
        <div className="round_effect crimson"/>
        <div className="star_effect">
            <img src={require("../../Assests/star.png")} alt="" className="star" />
        </div>
        <div className="glass_effect">
            <img src={require("../../Assests/glasses.png")} alt="" className="moddies" />
        </div>
        <div className="skills_box_hero">
           <img src={require("../../Assests/thumbup.png")} alt="" style={{
            width:"40px",
            height:"40px",
            objectFit:"contain",
            margin:"0px 5px"
           }} />
           <span className="skills_hero_text">
            Ui/Ux Designer
           </span>
        </div>
      </div>
      <div className="divider"/>
    </div>
  );
};

export default Hero;
