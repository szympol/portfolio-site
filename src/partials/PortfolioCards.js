import React from "react";

const PortfolioCards = props => (
      <div className="portfolio__card" id={props.id}>
        <img src={props.img} alt={props.alt} />
        <div className="portfolio__text">
          <h5>{props.title}</h5>
          <p>{props.desc}</p>
        </div>
      </div>
);

export default PortfolioCards;
