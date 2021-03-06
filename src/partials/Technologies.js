import React from "react";
import js from "../images/js.png";
import vue from "../images/vueLogo.png";
import react from "../images/react.png";
import css3 from "../images/css3.png";
import html5 from "../images/html5.png";
import rwd from "../images/rwd.png";
import sass from "../images/sass.png";
import cssinjs from "../images/css-in-js.png";
import materialui from "../images/materialUI.png";
import bootstrap from "../images/bootstrap.png";
import gatsby from "../images/gatsby.png";
import gridsome from "../images/gridsome.png";
import rest from "../images/rest.png";
import graphql from "../images/graphql.png";
import node from "../images/node.png";
import expressjs from "../images/expressjs.png";
import git from "../images/git.png";
import npm from "../images/npm.png";

const Technologies = (props) => {
  return (
    <section className="component" id="technology">
      <div className="container technology">
        <h2>{props.data.section}</h2>
        <div className="row technology--hideScrollbar">
          <div className="col-xs-6 col-sm-6 col-md-4 col-lg-2 technology__icons">
            <img src={js} alt="js"></img>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-4 col-lg-2 technology__icons">
            <img src={vue} alt="vue"></img>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-4 col-lg-2 technology__icons">
            <img src={react} alt="react"></img>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-4 col-lg-2 technology__icons">
            <img src={css3} alt="css3"></img>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-4 col-lg-2 technology__icons">
            <img src={html5} alt="html5"></img>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-4 col-lg-2 technology__icons">
            <img src={rwd} alt="rwd"></img>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-4 col-lg-2 technology__icons">
            <img src={sass} alt="sass"></img>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-4 col-lg-2 technology__icons">
            <img src={cssinjs} alt="css-in-js"></img>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-4 col-lg-2 technology__icons">
            <img src={materialui} alt="material-ui"></img>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-4 col-lg-2 technology__icons">
            <img src={bootstrap} alt="bootstrap"></img>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-4 col-lg-2 technology__icons">
            <img src={gatsby} alt="gatsby"></img>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-4 col-lg-2 technology__icons">
            <img src={gridsome} alt="gridsome"></img>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-4 col-lg-2 technology__icons">
            <img src={rest} alt="rest"></img>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-4 col-lg-2 technology__icons">
            <img src={graphql} alt="graphQL"></img>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-4 col-lg-2 technology__icons">
            <img src={node} alt="node"></img>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-4 col-lg-2 technology__icons">
            <img src={expressjs} alt="expressjs"></img>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-4 col-lg-2 technology__icons">
            <img src={git} alt="git"></img>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-4 col-lg-2 technology__icons">
            <img src={npm} alt="npm"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
