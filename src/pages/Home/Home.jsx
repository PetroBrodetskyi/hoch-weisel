import React from 'react';
import { useTranslation } from 'react-i18next';
import Article from '../../components/Article/Article';
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel';
import css from './Home.module.css';
import data from '../../data/base.json';

const Home = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const homeData = data.home[lang];

  if (!homeData) {
    return <p>{t('common.dataError')}</p>;
  }

  return (
    <div className={css.homeFlex}>
      
      <div className={css.home}>
        <div className={css.container}>
          <p>{homeData.description}</p>
          {homeData.article1 && <Article articleData={homeData.article1} />}
        </div>
        <div className={css.photo}>
          {homeData.article1 && (
            <img src={homeData.article1.image} alt={homeData.article1.title} className={css.image} />
          )}
        </div>
      </div>
      <div className={css.home}>
        <div className={css.photo}>
          {homeData.article2 && (
            <img src={homeData.article2.image} alt={homeData.article2.title} className={css.view} />
          )}
        </div>
        <div className={css.container}>
          {homeData.article2 && <Article articleData={homeData.article2} />}
        </div>
      </div>
      <div className={css.home}>
        <div className={css.container}>
          {homeData.article3 && <Article articleData={homeData.article3} />}
        </div>
        <div className={css.photo}>
          {homeData.article2 && (
            <img src={homeData.article3.image} alt={homeData.article3.title} className={css.view} />
          )}
        </div>
      </div>
      <HomeCarousel />
    </div>
  );
};

export default Home;
