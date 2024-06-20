import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import css from './Navbar.module.css';

function Navbar() {
  const { i18n } = useTranslation();
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className={css.navLanguage}>
      <ul className={css.links}>
        <li><Link className={css.link} to="/">{i18n.t('home.title')}</Link></li>
        <li><Link className={css.link} to="/events">{i18n.t('events.title')}</Link></li>
        <li><Link className={css.link} to="/history">{i18n.t('history.title')}</Link></li>
      </ul>
        <div className={css.buttons}>
            <button onClick={() => changeLanguage('de')}>DE</button>
            <button onClick={() => changeLanguage('ua')}>UA</button>
            <button onClick={() => changeLanguage('en')}>EN</button>
        </div>
    </nav>
  );
}

export default Navbar;