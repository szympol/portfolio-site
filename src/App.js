import React from 'react';
import './App.scss';
import ReactPageScroller from "react-page-scroller";
import MediaQuery from 'react-responsive';

import data from './data/data.json';

import Hero from "./partials/Hero";
import About from "./partials/About";
import PortfolioBox from "./partials/PortfolioBox";
import PortfolioCards from "./partials/PortfolioCards";
import Technologies from "./partials/Technologies";
import Navigation from "./partials/Navigation";
import Footer from "./partials/Footer";

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        currentPage: 1,
        componentsToRenderLength: 4,
        data: data
      };
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
            <Hero strings={[
              'Junior Front-End Developer',
              'Junior React&#39;s propagator',
              'Junior developer with passion'
            ]}/>
            <About/>
              <PortfolioBox>
            {this.state.data.map(data => (
            <PortfolioCards
            key={data.id}
            id={data.id}
            img={data.img}
            alt={data.alt}
            title={data.title}
            desc={data.desc}
            button={data.button}
            />
            ))}
            </PortfolioBox>
            <Technologies/>
            </ReactPageScroller>
            <Navigation goToPage={this.goToPage}/>
            <Footer/>
        </React.Fragment>
        </MediaQuery>
        <MediaQuery  maxWidth={991}>
          <Navigation/>
          <Hero strings={[
    	'Junior Front-End Developer',
      'Junior React&#39;s propagator',
      'Junior developer with passion'
    ]}/>
          <About/>
          <PortfolioBox>
            {this.state.data.map(data => (
                  <PortfolioCards 
                  key={data.id}
                  id={data.id}
                  img={data.img}
                  alt={data.alt}
                  title={data.title}
                  desc={data.desc}
                  button={data.button}
                  />
                ))}
            </PortfolioBox>
          <Technologies/>
          <Footer/>
        </MediaQuery>
      </div>
      );
  }
}


export default App;
