import React from "react";
import PropTypes from 'prop-types';

// Translation Higher Order Component
import {
    setTranslations,
    setDefaultLanguage,
    setLanguageCookie,
    setLanguage,
    translate,
  } from 'react-switch-lang';
  import en from '../data/en.json';
  import pl from '../data/pl.json';

  // Do this two lines only when setting up the application
setTranslations({ en, pl });
setDefaultLanguage('pl');

// If you want to remember selected language
setLanguageCookie();


class Language extends React.Component  {
    handleSetLanguage = (key) => () => {
        setLanguage(key);
      };

   render() {
    const { t } = this.props;

    return (
        <div>
        <div className="component fifth-component" id="language">

            <span>Language</span>

            <div className="language">
        <p>
            {t('home.title')}
        </p>
        <p>
            {t('home.title', null, 'en')} {/* it does not respond to change on click event */}
        </p>
        <p>
            {t('hello', { name: 'World' })}
        </p>
        <p>
            {t('fallback')}
        </p>
        <button type="button" onClick={this.handleSetLanguage('pl')}>
          PL
        </button>
        <button type="button" onClick={this.handleSetLanguage('en')}>
          EN
        </button>
        </div>

        </div>



        </div>
    )
   }

}

Language.propTypes = {
    t: PropTypes.func.isRequired,
  };

export default translate(Language);









