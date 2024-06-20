import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import icons from '../../assets/icons/icons.svg';
import css from './Navbar.module.css';

function Navbar() {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  useEffect(() => {
    i18n.on('languageChanged', (lng) => {
      setSelectedLanguage(lng);
    });
  }, [i18n]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className={css.navLanguage}>
      <ul className={css.links}>
        <li><Link className={css.link} to="/">{t('home.title')}</Link></li>
        <li><Link className={css.link} to="/events">{t('events.title')}</Link></li>
        <li><Link className={css.link} to="/history">{t('history.title')}</Link></li>
      </ul>
      <div className={css.buttons}>
        <button
          className={`${css.btn} ${selectedLanguage === 'de' ? css.selected : ''}`}
          onClick={() => changeLanguage('de')}
        >
          <svg className={css.icon}>
            <use href={`${icons}#flag-germany`} />
          </svg>
          DE
        </button>
        <button
          className={`${css.btn} ${selectedLanguage === 'ua' ? css.selected : ''}`}
          onClick={() => changeLanguage('ua')}
        >
          <svg className={css.icon}>
            <use href={`${icons}#flag-ukraine`} />
          </svg>
          UA
        </button>
        <button
          className={`${css.btn} ${selectedLanguage === 'en' ? css.selected : ''}`}
          onClick={() => changeLanguage('en')}
        >
          <svg className={css.icon}>
            <use href={`${icons}#flag-kingdom`} />
          </svg>
          EN
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
