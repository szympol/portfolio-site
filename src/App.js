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

  goToPage = (eventKey) => {
    console.log(eventKey);
    this._pageScroller.goToPage(eventKey);
};


/* getPagesNumbers = () => {

  const pageNumbers = [];

  for (let i = 1; i <= 5; i++) {
      pageNumbers.push(
        <div key={i} eventKey={i - 1} onSelect={this.goToPage} className="nav__link"  onClick={this.toggleNav}>{i}</div>
      )
  }

  return [...pageNumbers];
}; */

  render() {


    return (
      <div className="wrapper">
        <React.Fragment>
          <ReactPageScroller ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange}>
            <Hero/>
            <About/>
            <PortfolioBox/>
            <Technologies/>
          </ReactPageScroller>
          <Navigation goToPage={this.goToPage}/>
          </React.Fragment>
      </div>
      );
  }
}


export default App;
