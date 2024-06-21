import React from 'react';
import { useTranslation } from 'react-i18next';
import css from './Article.module.css';

const Article = ({ articleKey }) => {
  const { t } = useTranslation();
  const content = t(`${articleKey}.content`).split('\n\n').map((paragraph, index) => (
    <p key={index}>{paragraph}</p>
  ));

  return (
    <article className={css.article}>
      <div className={css.container}>
        <h2>{t(`${articleKey}.title`)}</h2>
        {content}
      </div>
    </article>
  );
};

export default Article;
