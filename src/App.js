import React from 'react';
import './App.scss';
import ReactPageScroller from "react-page-scroller";
import MediaQuery from 'react-responsive';

import projectsDataEn from './data/projectsDataEn.json';
/* import data2 from './data/data2.json'; */

import Hero from "./partials/Hero";
import About from "./partials/About";
import PortfolioBox from "./partials/PortfolioBox";
import Technologies from "./partials/Technologies";
import Navigation from "./partials/Navigation";
import Footer from "./partials/Footer";

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        currentPage: 1,
        componentsToRenderLength: 4,
        projectsData: projectsDataEn
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

/*   dataToggleTest = () => {
    console.log('test1');
    this.setState({projectsData: data2});
  }

  dataToggleTest2 = () => {
    console.log('test2');
    this.setState({projectsData: projectsDataEn});
  } */

  render() {

    return (
      <div className="wrapper">
{/*         <div onClick={this.dataToggleTest}>TEST</div>
            <div onClick={this.dataToggleTest2}>Get back</div> */}
        <MediaQuery minWidth={992}>
          <React.Fragment>
            <ReactPageScroller ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange}>
            <Hero strings={[
              'Junior Front-End Developer',
              'Junior React&#39;s propagator',
              'Junior developer with passion'
            ]}/>
            <About/>
            <PortfolioBox projectsData={this.state.projectsData}/>
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
          <PortfolioBox projectsData={this.state.projectsData}/>
          <Technologies/>
          <Footer/>
        </MediaQuery>
      </div>
      );
  }
}


export default App;
