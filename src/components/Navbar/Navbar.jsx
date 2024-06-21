import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import css from './Navbar.module.css';
import icons from '../../assets/icons.svg';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

    useEffect(() => {
        const handleLanguageChanged = (lng) => {
            setSelectedLanguage(lng);
        };

        i18n.on('languageChanged', handleLanguageChanged);

        return () => {
            i18n.off('languageChanged', handleLanguageChanged);
        };
    }, [i18n]);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const languages = [
        { code: 'de', label: 'DE', flag: 'flag-germany' },
        { code: 'ua', label: 'UA', flag: 'flag-ukraine' },
        { code: 'en', label: 'EN', flag: 'flag-kingdom' }
    ];

    return (
        <nav className={css.navLanguage}>
            <ul className={css.links}>
                <li><Link className={css.link} to="/">{t('home.title')}</Link></li>
                <li><Link className={css.link} to="/events">{t('events.title')}</Link></li>
                <li><Link className={css.link} to="/history">{t('history.title')}</Link></li>
            </ul>
            <div className={css.buttons}>
                {languages.map(({ code, label, flag }) => (
                    <div key={code} className={css.radioItem}>
                        <input
                            className={css.radio}
                            type="radio"
                            id={code}
                            name="language"
                            value={code}
                            checked={selectedLanguage === code}
                            onChange={() => changeLanguage(code)}
                        />
                        <label htmlFor={code} className={`${css.btn} ${selectedLanguage === code ? css.selected : ''}`}>
                            <svg className={css.icon}>
                                <use xlinkHref={`${icons}#${flag}`} />
                            </svg>
                            <p className={css.labelTitle}>{label}</p>
                        </label>
                    </div>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
