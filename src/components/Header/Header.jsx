import React from 'react';
import { Link } from 'react-router-dom';
import css from './Header.module.css';
import hochweiselLogo from '../../assets/images/hochweisel.png';
import Navbar from '../Navbar/Navbar';
import { GrLocation } from "react-icons/gr";

const Header = () => {
    return (
        <header className={css.headerContainer}>
            <div className={css.header}>
                <div className={css.content}>
                    <div className={css.logoContainer}>
                        <Link to="/" className={css.logoLink}>
                            <div className={css.logoFlex}>
                                <img className={css.logo} src={hochweiselLogo} alt="Hoch-Weisel" />
                                <h1 className={css.link}>Hoch-Weisel</h1>
                            </div>
                        </Link>
                        <div className={css.iconLocation}>
                            <GrLocation />
                            <p className={css.tagline}>Hessen, Deutschland</p>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar />
        </header>
    );
};

export default Header;
