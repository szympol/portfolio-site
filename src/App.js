import React from 'react';
import './App.scss';
import ReactPageScroller from "react-page-scroller";
import MediaQuery from 'react-responsive';


import Hero from "./partials/Hero";
import About from "./partials/About";
import PortfolioBox from "./partials/PortfolioBox";
import Technologies from "./partials/Technologies";
import Navigation from "./partials/Navigation";
import Footer from "./partials/Footer";

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {currentPage: 1, componentsToRenderLength: 4};
      this._pageScroller = null;
  }

  pageOnChange = (number) => {
      this.setState({currentPage: number});
  };

  goToPage = (eventKey) => {
    console.log(eventKey);
    this._pageScroller.goToPage(eventKey);
};


  render() {

    return (
      <div className="wrapper">
        <MediaQuery minWidth={992}>
          <React.Fragment>
            <ReactPageScroller ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange}>
            <Hero/>
            <About/>
            <PortfolioBox/>
            <Technologies/>
            </ReactPageScroller>
            <Navigation goToPage={this.goToPage}/>
            <Footer/>
        </React.Fragment>
        </MediaQuery>
        <MediaQuery  maxWidth={991}>
          <Navigation/>
          <Hero/>
          <About/>
          <PortfolioBox/>
          <Technologies/>
          <Footer/>
        </MediaQuery>
      </div>
      );
  }
}


export default App;
