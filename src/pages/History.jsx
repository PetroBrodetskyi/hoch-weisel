import { useTranslation } from 'react-i18next';

function History() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('history.title')}</h1>
      <p>{t('history.description')}</p>
    </div>
  );
}

export default History;