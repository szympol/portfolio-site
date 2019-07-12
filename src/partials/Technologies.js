import React from "react";
import html5 from '../images/html5.png';
import css3 from '../images/css3.png';
import rwd from '../images/rwd.png';
import js from '../images/js.png';
import bootstrap from '../images/bootstrap.png';
import sass from '../images/sass.png';
import rest from '../images/rest.png';
import react from '../images/react.png';
import vue from '../images/vueLogo.png';
import redux from '../images/redux.png';
import node from '../images/node.png';
import expressjs from '../images/expressjs.png';
import mongodb from '../images/mongodb.png';
import git from '../images/git.png';
import npm from '../images/npm.png';
import webpack from '../images/webpack.png';
import prestashop from '../images/prestashop.png';
import sap from '../images/sap.png';

const Technologies = (props) => {
    return (
        <section className="component" id="technology">
            
            <div className="container technology">
            <h2>{props.data.section}</h2>
                <div className="row technology--hideScrollbar">
                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-2 technology__icons"><img src={html5} alt="html5"></img></div>
                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-2 technology__icons"><img src={css3} alt="css3"></img></div>
                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-2 technology__icons"><img src={rwd} alt="rwd"></img></div>
                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-2 technology__icons"><img src={js} alt="js"></img></div>
                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-2 technology__icons"><img src={bootstrap} alt="bootstrap"></img></div>
                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-2 technology__icons"><img src={sass} alt="sass"></img></div>
                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-2 technology__icons"><img src={react} alt="react"></img></div>
                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-2 technology__icons"><img src={redux} alt="redux"></img></div>
                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-2 technology__icons"><img src={vue} alt="vue"></img></div>
                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-2 technology__icons"><img src={node} alt="node"></img></div>
                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-2 technology__icons"><img src={expressjs} alt="expressjs"></img></div>
                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-2 technology__icons"><img src={mongodb} alt="mongodb"></img></div>
                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-2 technology__icons"><img src={rest} alt="rest"></img></div>
                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-2 technology__icons"><img src={git} alt="git"></img></div>
                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-2 technology__icons"><img src={npm} alt="npm"></img></div>
                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-2 technology__icons"><img src={webpack} alt="webpack"></img></div>
                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-2 technology__icons"><img src={prestashop} alt="prestashop"></img></div>
                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-2 technology__icons"><img src={sap} alt="sap"></img></div>
                </div>
            </div>
        </section>
    )
}

export default Technologies;