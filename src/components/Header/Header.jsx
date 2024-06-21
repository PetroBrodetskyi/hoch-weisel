import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import css from './Header.module.css';
import hochweiselLogo from '../../assets/images/hochweisel.png';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <header className={css.headerContainer}>
            <div className={css.header}>
                <div>
                    <Link to="/" className={css.logoContainer}>
                        <img className={css.logo} src={hochweiselLogo} alt="Hoch-Weisel" />
                        <h1 className={css.link}>Hoch-Weisel</h1>
                    </Link>
                </div>
            </div>
            <Navbar />
        </header>
    );
};

export default Header;
