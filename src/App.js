import React from 'react';
import './App.scss';
import ReactPageScroller from "react-page-scroller";

import Hero from "./partials/Hero";
import About from "./partials/About";
import PortfolioBox from "./partials/PortfolioBox";
import Technologies from "./partials/Technologies";
import Navigation from "./partials/Navigation";

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {currentPage: 1};
      this._pageScroller = null;
  }

  pageOnChange = (number) => {
      this.setState({currentPage: number});
  };



  render() {
    return (
      <div className="wrapper">
          <ReactPageScroller ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange}>
            <Hero/>
            <About/>
            <PortfolioBox/>
            <Technologies/>
          </ReactPageScroller>
          <Navigation toggleNav={this.toggleNav}></Navigation>

      </div>
      );
  }
}


export default App;
