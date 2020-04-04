import React from "react";
import "./App.scss";
import ReactPageScroller from "react-page-scroller";
import MediaQuery from "react-responsive";

import DataEn from "./data/DataEn.json";
import DataDe from "./data/DataDe.json";
import DataPl from "./data/DataPl.json";
import projectsDataEnglish from "./data/projectsDataEn.json";
import projectsDataGerman from "./data/projectsDataDe.json";
import projectsDataPolish from "./data/projectsDataPl.json";

import Hero from "./partials/Hero";
import About from "./partials/About";
import PortfolioBox from "./partials/PortfolioBox";
import Technologies from "./partials/Technologies";
import Navigation from "./partials/Navigation";
import Languages from "./partials/Languages";
import Footer from "./partials/Footer";

const projectsDataEn = projectsDataEnglish.reverse();
const projectsDataDe = projectsDataGerman.reverse();
const projectsDataPl = projectsDataPolish.reverse();

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

  switchLanguage = (language) => {
    const data =
      language === "english"
        ? DataEn
        : language === "german"
        ? DataDe
        : language === "polish"
        ? DataPl
        : null;
    const projectsData =
      language === "english"
        ? projectsDataEn
        : language === "german"
        ? projectsDataDe
        : language === "polish"
        ? projectsDataPl
        : null;

    this.setState({
      data: data,
      projectsData: projectsData,
    });
  };

  render() {
    const [
      hero,
      about,
      portfolioBox,
      technologies,
      navigation,
      footer,
    ] = this.state.data;
    return (
      <div className="wrapper">
        <MediaQuery minWidth={992}>
          <React.Fragment>
            <ReactPageScroller
              forwardRef={(c) => (this._pageScroller = c)}
              pageOnChange={this.pageOnChange}
            >
              <Hero strings={hero.subtitle} data={hero} />
              <About data={about} />
              <PortfolioBox
                data={portfolioBox}
                projectsData={this.state.projectsData}
              />
              <Technologies data={technologies} />
            </ReactPageScroller>
            <Navigation data={navigation} goToPage={this.goToPage} />
            <Languages
              switchLanguageToGerman={this.switchLanguage}
              switchLanguageToEnglish={this.switchLanguage}
              switchLanguageToPolish={this.switchLanguage}
            />
            <Footer data={footer} />
          </React.Fragment>
        </MediaQuery>
        <MediaQuery maxWidth={991}>
          <Navigation data={navigation} />
          <Hero strings={hero.subtitle} data={hero} />
          <About data={about} />
          <PortfolioBox
            data={portfolioBox}
            projectsData={this.state.projectsData}
          />
          <Technologies data={technologies} />
          <Languages
            switchLanguageToGerman={this.switchLanguage}
            switchLanguageToEnglish={this.switchLanguage}
            switchLanguageToPolish={this.switchLanguage}
          />
          <Footer data={footer} />
        </MediaQuery>
      </div>
    );
  }
}

export default App;
