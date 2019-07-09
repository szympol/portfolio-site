import React from "react";
import Zoom from 'react-reveal/Zoom';

const About = () => {
  return (
    <section className="component" id="about">
      <div className="container about">
        <h1>About me</h1>
        <Zoom><div className="about__text-dashed">
        <p>Passionate, result-oriented, reliable, team player. A big fan of React.</p>{" "}
        <p>
        The moment I wrote my first lines of code, I knew that I found
        myself. What I love about web development is that it helped me in
        rediscovering and reinvigorating my creativity. The combination of
        design and logic is what I was looking for.
        </p>{" "}
        <p>
        I develop my skills both through self-study and under the
        supervision of experienced developers. I have managed to slice a few
        layouts from PSD files, participate in a group project (Jira), code
        many small and more advanced applications covering a great number of
        different technologies.
        </p>{" "}
        <p>I am constantly pining for this addictive sense of euphoria after
        discovering a solution to the challenge.</p>
        </div></Zoom>
      </div>
    </section>
  );
};

export default About;


/* import Typed from 'typed.js';


class About extends React.Component {
  componentDidMount() {
    const { strings } = this.props;
    const options = {
        strings: strings,
      typeSpeed: 100,
      backSpeed: 50,
      loop: true
    };
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <section className="component" id="about">
        <div className="container about">
          <h1>About me</h1>
          <div className="about__text-dashed">
          <span style={{whiteSpace: 'pre'}} ref={(el) => { this.el = el; }}/>
            <p>
              The moment I wrote my first lines of code, I knew that I found
              myself. What I love about web development is that it helped me in
              rediscovering and reinvigorating my creativity. The combination of
              design and logic is what I was looking for.
            </p>{" "}
            <p>
              I develop my skills both through self-study and under the
              supervision of experienced developers. I have managed to slice a few
              layouts from PSD files, participate in a group project (Jira), code
              many small and more advanced applications covering a great number of
              different technologies.
            </p>{" "}
            <p>I am constantly pining for this addictive sense of euphoria after
            discovering a solution to the challenge.</p>
          </div>
        </div>
      </section>
    );
  }
}
 */
