import React from 'react';
import { useTranslation } from 'react-i18next';
import hochweiselLogo from '../../assets/images/hochweisel.png';
import css from './Article.module.css';

const Article = ({ articleKey }) => {
  const { t } = useTranslation();

  return (
    <article className={css.article}>
      <div>
      <h2>{t(`${articleKey}.title`)}</h2>
        <p>{t(`${articleKey}.content`)}</p>
      </div>
      <img src={hochweiselLogo} alt={t(`${articleKey}.title`)} className={css.image} />
    </article>
  );
};

export default Article;
