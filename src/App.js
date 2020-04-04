import React from "react";
import "./App.scss";
import ReactPageScroller from "react-page-scroller";
import MediaQuery from "react-responsive";

import DataEn from "./data/DataEn.json";
import DataDe from "./data/DataDe.json";
import DataPl from "./data/DataPl.json";
import projectsDataEn from "./data/projectsDataEn.json";
import projectsDataDe from "./data/projectsDataDe.json";
import projectsDataPl from "./data/projectsDataPl.json";

import Hero from "./partials/Hero";
import About from "./partials/About";
import PortfolioBox from "./partials/PortfolioBox";
import Technologies from "./partials/Technologies";
import Navigation from "./partials/Navigation";
import Languages from "./partials/Languages";
import Footer from "./partials/Footer";

// const projectsDataEn = JSON.parse(projectsDataEnglish).reverse();
// const projectsDataDe = JSON.parse(projectsDataGerman).reverse();
// const projectsDataPl = JSON.parse(projectsDataPolish).reverse();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      data: DataEn,
      projectsData: projectsDataEn,
    };
    this._pageScroller = null;
  }

  pageOnChange = (number) => {
    this.setState({ currentPage: number });
  };

  goToPage = (eventKey) => {
    this._pageScroller.goToPage(eventKey);
  };

  switchLanguageToEnglish = () => {
    this.setState({
      data: DataEn,
      projectsData: projectsDataEn,
    });
  };

  switchLanguageToGerman = () => {
    this.setState({
      data: DataDe,
      projectsData: projectsDataDe,
    });
  };

  switchLanguageToPolish = () => {
    this.setState({
      data: DataPl,
      projectsData: projectsDataPl,
    });
  };

  render() {
    return (
      <div className="wrapper">
        <MediaQuery minWidth={992}>
          <React.Fragment>
            <ReactPageScroller
              ref={(c) => (this._pageScroller = c)}
              pageOnChange={this.pageOnChange}
            >
              <Hero
                strings={this.state.data[0].subtitle}
                data={this.state.data[0]}
              />
              <About data={this.state.data[1]} />
              <PortfolioBox
                data={this.state.data[2]}
                projectsData={this.state.projectsData}
              />
              <Technologies data={this.state.data[3]} />
            </ReactPageScroller>
            <Navigation data={this.state.data[4]} goToPage={this.goToPage} />
            <Languages
              switchLanguageToGerman={this.switchLanguageToGerman}
              switchLanguageToEnglish={this.switchLanguageToEnglish}
              switchLanguageToPolish={this.switchLanguageToPolish}
            />
            <Footer data={this.state.data[5]} />
          </React.Fragment>
        </MediaQuery>
        <MediaQuery maxWidth={991}>
          <Navigation data={this.state.data[4]} />
          <Hero
            strings={this.state.data[0].subtitle}
            data={this.state.data[0]}
          />
          <About data={this.state.data[1]} />
          <PortfolioBox
            data={this.state.data[2]}
            projectsData={this.state.projectsData}
          />
          <Technologies data={this.state.data[3]} />
          <Languages
            switchLanguageToGerman={this.switchLanguageToGerman}
            switchLanguageToEnglish={this.switchLanguageToEnglish}
            switchLanguageToPolish={this.switchLanguageToPolish}
          />
          <Footer data={this.state.data[5]} />
        </MediaQuery>
      </div>
    );
  }
}

export default App;
