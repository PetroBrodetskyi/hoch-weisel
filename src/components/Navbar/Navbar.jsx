import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const { i18n } = useTranslation();
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav>
      <ul>
        <li><Link to="/">{i18n.t('home.title')}</Link></li>
        <li><Link to="/events">{i18n.t('events.title')}</Link></li>
        <li><Link to="/history">{i18n.t('history.title')}</Link></li>
      </ul>
        <div>
            <button onClick={() => changeLanguage('de')}>DE</button>
            <button onClick={() => changeLanguage('ua')}>UA</button>
            <button onClick={() => changeLanguage('en')}>EN</button>
        </div>
    </nav>
  );
}

export default Navbar;