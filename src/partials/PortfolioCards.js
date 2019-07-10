import React from "react";

const PortfolioCards = props => (
  <div className="portfolio__card" id={props.id}>
    <div className="portfolio__wrapper">
      <img className="portfolio__image" src={props.img} alt={props.alt} />
      <div className="portfolio__links">
        <a className="portfolio__github" href={props.github ? props.github : null} style={{display: props.github ? 'inline' : 'none' }} alt={props.alt} target="_blanket">GitHub</a>
        <a className="portfolio__demo" href={props.demo ? props.demo : null} style={{display: props.demo ? 'inline' : 'none' }} alt={props.demo} target="_blanket">demo</a>
      </div>
    </div>
    <div className="portfolio__text">
      <h4>{props.title}</h4>
      <p>{props.desc}</p>
    </div>
  </div>
);

export default PortfolioCards;
