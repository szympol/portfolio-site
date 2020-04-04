import React from "react";
import { Zoom } from "react-awesome-reveal";

const About = (props) => {
  const { section, p1, p2, p3, p4 } = props.data;
  return (
    <section className="component" id="about">
      <div className="container about">
        <h1>{section}</h1>
        <Zoom>
          <div className="about__text-dashed">
            <p>{p1}</p> <p>{p2}</p> <p>{p3}</p> <p>{p4}</p>
          </div>
        </Zoom>
      </div>
    </section>
  );
};

export default About;
