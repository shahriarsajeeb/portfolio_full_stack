import React, { useState,useEffect } from "react";
import { urlFor,sanity } from "../../sanity";
import "./Portfolio.scss";

const Portfolio = () => {    
    const [data,setData] = useState([]);

    useEffect(() => {
       const query = '*[_type == "portfolios"]';

       sanity.fetch(query).then((data) => {
        setData(data)
       })
    }, []);
    
  return (
    <div className="mask_effect">
      <div className="container relative">
        <div className="heading">
          <h1>
            My Portfolio <span className="style">.</span>
          </h1>
        </div>
        <div className="portfolio_content w100 flex flex_wrap align_items_center">
          {data &&
            data.map((i) => (
              <PortfolioSingleItem item={i} key={i.id} />
            ))}
        </div>
      </div>
      <div className="divider"/>
    </div>
  );
};

const PortfolioSingleItem = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="col_3 portfolio">
      <img
        src={urlFor(item.imageUrl)}
        alt="item"
        className="portfolioImage"
        onClick={() => setOpen(true)}
      />
      {open ? (
        <>
          <PortfolioDetails item={item} setOpen={() => setOpen(!open)} />
        </>
      ) : null}
    </div>
  );
};

const PortfolioDetails = ({ item, setOpen }) => {

  return (
    <div className="postDetailsBox">
      <div className="postDetailsMain">
        <div className="details__image">
          <img src={urlFor(item.imageUrl)} alt="image" className="details__image" />
        </div>
        <div className="details__content">
        <h1 className="details__name">{item.title}</h1>
        <p style={{ fontWeight: "600", paddingBottom: "10px" }}>
            Description: <p style={{ fontSize: "16px",color:"#555",padding:"10px 0px",lineHeight:"24px" }}>{item.description}</p>
          </p>
          <span style={{
              display:"block",
              fontWeight:"600",
              color:"#333"
          }}>
              Project Live Link:
          </span>
          <a href={item.liveurl} className="details__link">
            Click here
          </a>
        </div>
        <svg
        aria-label="Close"
        class="_8-yf5Cross pointer"
        color="rgba(27, 185, 68, 0.8588235294)"
        fill="rgba(27, 185, 68, 0.8588235294)"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
        onClick={setOpen}
      >
        <polyline
          fill="none"
          points="20.643 3.357 12 12 3.353 20.647"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
        ></polyline>
        <line
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
          x1="20.649"
          x2="3.354"
          y1="20.649"
          y2="3.354"
        ></line>
      </svg>{" "}
      </div>
    </div>
  );
};

export default Portfolio;
