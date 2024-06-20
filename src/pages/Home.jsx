import React from 'react';
import { useTranslation } from 'react-i18next';
import Article from '../components/Article/Article';
import css from '../pages/Home';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className={css.home}>
      <p>{t('home.description')}</p>
      <Article articleKey="home.article1" />
    </div>
  );
};

export default Home;
