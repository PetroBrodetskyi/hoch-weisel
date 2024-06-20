import css from './Header.module.css';
import hochweiselLogo from '../../assets/images/hochweisel.png';

const Header = () => {
    return (
        <header className={css.headerContainer}>
            <div className={css.header}>
                <img className={css.logo} src={hochweiselLogo} alt="Hoch-Weisel" />
                <h1>Hoch-Weisel</h1>
            </div>
        </header>
    );
};

export default Header;