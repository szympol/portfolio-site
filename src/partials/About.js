import React from "react";
import Zoom from 'react-reveal/Zoom';

const About = (props) => {
  return (
    <section className="component" id="about">
      <div className="container about">
        <h1>{props.data.section}</h1>
        <Zoom>
          <div className="about__text-dashed">
            <p>{props.data.p1}</p>{" "}
            <p>
            {props.data.p2}
            </p>{" "}
            <p>
            {props.data.p3}
            </p>{" "}
            <p>{props.data.p4}</p>
          </div>
        </Zoom>
      </div>
    </section>
  );
};

export default About;