import React from "react";
import Typed from 'typed.js';



class Hero extends React.Component {
    componentDidMount() {
        // If you want to pass more options as props, simply add
      // your desired props to this destructuring assignment.
      const { strings } = this.props;
      // You can pass other options here, such as typing speed, back speed, etc.
      const options = {
          strings: strings,
        typeSpeed: 50,
        backSpeed: 50,
        smartBackspace: true,
        loop: true
      };
      // this.el refers to the <span> in the render() method
      this.typed = new Typed(this.el, options);
    }
  
    componentWillUnmount() {
        // Make sure to destroy Typed instance on unmounting
      // to prevent memory leaks
      this.typed.destroy();
    }
  
    render() {
      return (
            <header className="hero" id="hero">
                <div className="container hero__text">
                    <h3 className="hero__text__hi">Hi! I am</h3>
                    <h1 className="hero__text__name">Szymon Polanowski</h1>
                    <div className="hero__text__info">
                     <span style={{whiteSpace: 'pre'}} ref={(el) => { this.el = el; }}/>
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
