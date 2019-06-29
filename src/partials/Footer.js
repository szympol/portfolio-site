import React from "react";
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


class Footer extends React.Component {
    constructor() {
        super();

        this.state = {
          modalIsOpen: false
        };
      }

      openModal = () => {
        this.setState({modalIsOpen: true});
      }


      closeModal = () => {
        this.setState({modalIsOpen: false});
      }

      render() {
        return (
          <footer>
            <button onClick={this.openModal}>Open Modal</button>
            <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              className="footer__modal"
              overlayClassName="footer__modal--overlay"
              contentLabel="Footer Modal"
            >
              <div className="footer__modal__info">
                <div className="footer__modal__info--email">
                    <p><FontAwesomeIcon icon={faAt} /></p>
                    <div className="footer__modal__close" onClick={this.closeModal}><FontAwesomeIcon icon={faTimes} /></div>
                </div>
                <div className="footer__modal__info--github">
                    <p><FontAwesomeIcon icon={faGithub} /></p>
                </div>
                <div className="footer__modal__info--linkedin">
                   <p><FontAwesomeIcon icon={faLinkedin} /></p>
                </div>
                <div className="footer__modal__info--phone">
                    <p><FontAwesomeIcon icon={faMobileAlt} /></p>
                </div>
              </div>
              
            </Modal>
          </footer>
        );
      }
}


export default Footer;