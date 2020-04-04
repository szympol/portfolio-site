import React from "react";
import Typed from "typed.js";

class Hero extends React.Component {
  componentDidMount() {
    const { strings } = this.props;
    const options = {
      strings: strings,
      typeSpeed: 50,
      backSpeed: 50,
      smartBackspace: true,
      loop: true,
    };
    this.typed = new Typed(this.el, options);
  }

  componentDidUpdate() {
    this.typed.destroy();
    const { strings } = this.props;
    const options = {
      strings: strings,
      typeSpeed: 50,
      backSpeed: 50,
      smartBackspace: true,
      loop: true,
    };
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    const { greetings, name } = this.props.data;
    return (
      <header className="hero" id="hero">
        <div className="container hero__text">
          <h3 className="hero__text__hi">{greetings}</h3>
          <h1 className="hero__text__name">{name}</h1>
          <div className="hero__text__info">
            <span
              style={{ whiteSpace: "pre" }}
              ref={(el) => {
                this.el = el;
              }}
            />
          </div>
        </div>
        <div className="hero__mouse">
          <span></span>
        </div>
      </header>
    );
  }
}

export default Hero;
