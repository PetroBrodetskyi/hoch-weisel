import React from 'react';
import { useTranslation } from 'react-i18next';
import Article from '../../components/Article/Article';
import hochweiselLogo from '../../assets/images/hochweisel.png';
import css from '../Home/Home.module.css';

const Home = ({articleKey}) => {
  const { t } = useTranslation();

  return (
    <div className={css.home}>
      <div className={css.container}>
        <p>{t('home.description')}</p>
        <Article articleKey="home.article1" />
      </div>
      <img src={hochweiselLogo} alt={t(`${articleKey}.title`)} className={css.image} />
    </div>
  );
};

export default Home;
