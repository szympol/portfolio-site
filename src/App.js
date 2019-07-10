import React from 'react';
import './App.scss';
import ReactPageScroller from "react-page-scroller";
import MediaQuery from 'react-responsive';

import projectsDataEn from './data/projectsDataEn.json';
import projectsDataDe from './data/projectsDataDe.json';
import projectsDataPl from './data/projectsDataPl.json';

import Hero from "./partials/Hero";
import About from "./partials/About";
import PortfolioBox from "./partials/PortfolioBox";
import Technologies from "./partials/Technologies";
import Navigation from "./partials/Navigation";
import Languages from "./partials/Languages";
import Footer from "./partials/Footer";

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        currentPage: 1,
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

  switchLanguageToEnglish = () => {
    console.log('switchLanguageToEnglish');
    this.setState({projectsData: projectsDataEn});
  }

  switchLanguageToGerman = () => {
    console.log('switchLanguageToGerman');
    this.setState({projectsData: projectsDataDe});
  }

  switchLanguageToPolish = () => {
    console.log('switchLanguageToPolish');
    this.setState({projectsData: projectsDataPl});
  }

  render() {

    return (
      <div className="wrapper">
{/*       <div onClick={this.switchLanguageToGerman}>German</div>
            <div onClick={this.switchLanguageToEnglish}>English</div>  */}
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
            <Languages switchLanguageToGerman={this.switchLanguageToGerman} switchLanguageToEnglish={this.switchLanguageToEnglish} switchLanguageToPolish={this.switchLanguageToPolish}/>
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
          <Languages switchLanguageToGerman={this.switchLanguageToGerman} switchLanguageToEnglish={this.switchLanguageToEnglish} switchLanguageToPolish={this.switchLanguageToPolish}/>
          <Footer/>
        </MediaQuery>
      </div>
      );
  }
}


export default App;
