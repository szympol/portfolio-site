import React from "react";
import ukFlag from "../images/united-kingdom.png";
import germanyFlag from "../images/germany.png";
import polandFlag from "../images/poland.png";

class Languages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLanguage: ukFlag,
      showFlags: false,
    };
  }

  showLanguages = () => this.setState({ showFlags: !this.state.showFlags });

  updateCurrentLanguageFlag = (e) => {
    const {
      switchLanguageToGerman,
      switchLanguageToEnglish,
      switchLanguageToPolish,
    } = this.props;

    const german = "german";
    const english = "english";
    const polish = "polish";
    const clickedLanguage = e.target.getAttribute("src");
    const clickedLanguageAlt = e.target.getAttribute("alt");
    this.setState({ currentLanguage: clickedLanguage });

    this.showLanguages();

    if (this.state.currentLanguage === clickedLanguage) return;
    if (clickedLanguageAlt === german) switchLanguageToGerman(german);
    if (clickedLanguageAlt === english) switchLanguageToEnglish(english);
    if (clickedLanguageAlt === polish) switchLanguageToPolish(polish);
  };

  render() {
    const { currentLanguage, showFlags } = this.state;
    return (
      <div className={`languages ${showFlags ? "active" : ""}`}>
        <div className="languages__flag trigger" onClick={this.showLanguages}>
          <img
            src={currentLanguage}
            alt="english"
            className="languages__flag__icon"
          />
        </div>
        <div className="languages__flags">
          <div className="languages__rotater">
            <div
              className="languages__flag languages__flag--show"
              onClick={(e) => this.updateCurrentLanguageFlag(e)}
            >
              <img
                src={ukFlag}
                alt="english"
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
                src={germanyFlag}
                alt="german"
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
                src={polandFlag}
                alt="polish"
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
