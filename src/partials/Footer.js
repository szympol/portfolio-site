import React from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import ReactTooltip from "react-tooltip";

class Footer extends React.Component {
  constructor() {
    super();

    this.state = {
      isModalOpen: false,
    };
  }

  toggleModal = () => this.setState({ isModalOpen: !this.state.isModalOpen });

  rotateTooltip = (e) => {
    let at = document.querySelector(".tooltip");
    at.classList.add("rotateTooltip");
  };

  rotateTooltipGit = (e) => {
    let git = document.querySelector("#gitTooltip");
    git.classList.add("rotateTooltip");
  };

  rotateTooltipLinkedin = (e) => {
    let linkedin = document.querySelector("#linkedinTooltip");
    linkedin.classList.add("rotateTooltip");
  };

  rotateTooltipResume = (e) => {
    let resume = document.querySelector("#resumeTooltip");
    resume.classList.add("rotateTooltip");
  };

  render() {
    const { section, cvLanguage, cvLink } = this.props.data;
    const { isModalOpen } = this.state;
    return (
      <footer>
        <div className="footer__contactMe" onClick={this.toggleModal}>
          {section}
        </div>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={this.toggleModal}
          className="footer__modal"
          overlayClassName="footer__modal--overlay"
          contentLabel="Footer Modal"
        >
          <div className="footer__modal__info">
            <div className="footer__modal__info--email">
              <a
                href="mailto:szympol@hotmail.com?Subject=Hello"
                data-tip
                data-for="emailTooltip"
              >
                <FontAwesomeIcon icon={faAt} />
              </a>
              <ReactTooltip
                className="tooltip"
                id="emailTooltip"
                effect="solid"
                afterShow={this.rotateTooltip}
                place="top"
              >
                <span>szympol@hotmail.com</span>
              </ReactTooltip>
              <div className="footer__modal__close" onClick={this.toggleModal}>
                <FontAwesomeIcon icon={faTimes} />
              </div>
            </div>
            <div className="footer__modal__info--github">
              <a
                href="https://github.com/szympol"
                target="_blanket"
                data-tip
                data-for="gitTooltip"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <ReactTooltip
                id="gitTooltip"
                effect="solid"
                afterShow={this.rotateTooltipGit}
                place="top"
              >
                <span>github.com/szympol</span>
              </ReactTooltip>
            </div>
            <div className="footer__modal__info--linkedin">
              <a
                href="https://www.linkedin.com/in/szympol"
                target="_blanket"
                data-tip
                data-for="linkedinTooltip"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <ReactTooltip
                id="linkedinTooltip"
                className="rotateTooltip--linkedin"
                effect="solid"
                afterShow={this.rotateTooltipLinkedin}
                place="top"
              >
                <span>linkedin.com/in/szympol</span>
              </ReactTooltip>
            </div>
            <div className="footer__modal__info--resume">
              <a
                href={cvLink}
                target="_blanket"
                data-tip
                data-for="resumeTooltip"
              >
                <FontAwesomeIcon icon={faFile} />
              </a>
              <ReactTooltip
                id="resumeTooltip"
                className="rotateTooltip--cv"
                effect="solid"
                afterShow={this.rotateTooltipResume}
                place="top"
              >
                <span className="footer__modal__info--resume--language">
                  {cvLanguage}
                </span>
              </ReactTooltip>
            </div>
          </div>
        </Modal>
      </footer>
    );
  }
}

export default Footer;
