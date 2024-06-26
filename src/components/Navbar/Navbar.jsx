import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import css from './Navbar.module.css';
import icons from '../../assets/icons/icons.svg';

const Navbar = () => {
    const { i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

    const languages = [
        { code: 'de', label: 'DE', id: 'flag-germany' },
        { code: 'ua', label: 'UA', id: 'flag-ukraine' },
        { code: 'en', label: 'EN', id: 'flag-kingdom' }
    ];

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

    return (
        <nav className={css.navLanguage}>
            <div className={css.content}>
                <ul className={css.links}>
                    <li><NavLink className={css.link} to="/">{selectedLanguage === 'en' ? 'Home' : selectedLanguage === 'de' ? 'Zuhause' : 'Домашня'}</NavLink></li>
                    <li><NavLink className={css.link} to="/events">{selectedLanguage === 'en' ? 'Events' : selectedLanguage === 'de' ? 'Veranstaltungen' : 'Події'}</NavLink></li>
                    <li><NavLink className={css.link} to="/history">{selectedLanguage === 'en' ? 'History' : selectedLanguage === 'de' ? 'Geschichte' : 'Історія'}</NavLink></li>
                </ul>
            </div>
            <div className={css.buttons}>
                {languages.map(({ code, label, id }) => (
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
                                <use href={`${icons}#${id}`}></use>
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
