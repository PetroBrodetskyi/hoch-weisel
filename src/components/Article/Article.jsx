import React from 'react';
import { useTranslation } from 'react-i18next';

import css from './Article.module.css';

const Article = ({ articleKey }) => {
  const { t } = useTranslation();

  return (
    <article className={css.article}>
      <div className={css.container}>
        <h2>{t(`${articleKey}.title`)}</h2>
        <p>{t(`${articleKey}.content`)}</p>
      </div>
    </article>
  );
};

export default Article;
