import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';


class Languages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }

    showLanguages = () => {
        const languages = document.querySelector('.languages');
        languages.classList.toggle('active');
    }

    render() {
      return (
        <div className="languages">
            <div className="languages__flag trigger" onClick={this.showLanguages}>
                <FontAwesomeIcon className="fa" icon={faAt} />
            </div>
            <div className="languages__flags">
                <div className="languages__rotater">
                    <div className="languages__flag languages__flag--show">
                        <FontAwesomeIcon className="fa" icon={faGithub} />
                    </div>
                </div>
                <div className="languages__rotater">
                    <div className="languages__flag languages__flag--show">
                        <FontAwesomeIcon className="fa" icon={faMobileAlt} />
                    </div>
                </div>
                <div className="languages__rotater">
                    <div className="languages__flag languages__flag--show">
                        <FontAwesomeIcon className="fa" icon={faLinkedin} />
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }

  export default Languages;