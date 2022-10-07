import React, { useEffect, useState } from "react";
import { sanity, urlFor } from "../../sanity";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.scss";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    const query = '*[_type == "testimonials"]';

    sanity.fetch(query).then((data) => {
      setData(data);
    });
  }, []);

  console.log(data);

  return (
    <div className="mask_effect" id="Testimonials">
      <div className="relative">
        <div className="heading">
          <h1 className="testimonial">
            My Testimonials <span className="style">.</span>
          </h1>
        </div>
        <div className="testimonial_main w100">
          <Slider {...settings}>
          {data &&
            data.map((item, index) => (
              <div key={index}>
                <div className="testimonial_box w100 flex justify_content_center">
                  <div className="testimonial_box_inner">
                    <img
                      src={urlFor(item.imageUrl)}
                      alt=""
                      style={{ width: "50px", height: "50px",borderRadius:"50%" }}
                    />
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="divider"/>
    </div>
  );
};

export default Testimonials;
