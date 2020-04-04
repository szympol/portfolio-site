import React from "react";
import uk from "../images/united-kingdom.png";
import germany from "../images/germany.png";
import poland from "../images/poland.png";

class Languages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLanguage: uk,
    };
  }

  showLanguages = () => {
    const languages = document.querySelector(".languages");
    languages.classList.toggle("active");
  };
  updateCurrentLanguageFlag = (e) => {
    const clickedLanguage = e.target.getAttribute("src");
    const clickedLanguageAlt = e.target.getAttribute("alt");
    this.setState({ currentLanguage: clickedLanguage });
    this.showLanguages();

    if (this.state.currentLanguage === clickedLanguage) return;
    if (clickedLanguageAlt === "germany") this.props.switchLanguageToGerman();
    if (clickedLanguageAlt === "uk") this.props.switchLanguageToEnglish();
    if (clickedLanguageAlt === "poland") this.props.switchLanguageToPolish();
  };

  render() {
    return (
      <div className="languages">
        <div className="languages__flag trigger" onClick={this.showLanguages}>
          <img
            src={this.state.currentLanguage}
            alt="uk"
            className="languages__flag__icon"
          />
        </div>
        <div className="languages__flags">
          <div className="languages__rotater">
            <div
              className="languages__flag languages__flag--show"
              onClick={(e) => this.updateCurrentLanguageFlag(e)}
            >
              <img src={uk} alt="uk" className="languages__flag__icon" />
            </div>
          </div>
          <div className="languages__rotater">
            <div
              className="languages__flag languages__flag--show"
              onClick={(e) => this.updateCurrentLanguageFlag(e)}
            >
              <img
                src={germany}
                alt="germany"
                className="languages__flag__icon"
              />
            </div>
          </div>
          <div className="languages__rotater">
            <div
              className="languages__flag languages__flag--show"
              onClick={(e) => this.updateCurrentLanguageFlag(e)}
            >
              <img
                src={poland}
                alt="poland"
                className="languages__flag__icon"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Languages;
