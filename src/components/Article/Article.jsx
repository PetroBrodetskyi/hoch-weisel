import React from 'react';
import { useTranslation } from 'react-i18next';
import css from './Article.module.css';

const Article = ({ articleData }) => {
  const { t } = useTranslation();

  if (!articleData) {
    return null;
  }

  const paragraphs = articleData.content.split('\n').map((paragraph, index) => (
    <p key={index}>{paragraph}</p>
  ));

  return (
    <div className={css.article}>
      <h2>{articleData.title}</h2>
      {paragraphs}
    </div>
  );
};

export default Article;
