import React from "react";

const About = () => {
  return (
    <section className="component" id="about">
      <div className="container about">
        <h1>About me</h1>
        <div className="about__text-dashed">
          <p>Passionate, result-oriented, reliable, team player.</p>{" "}
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
};

export default About;
