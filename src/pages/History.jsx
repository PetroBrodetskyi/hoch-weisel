import { useTranslation } from 'react-i18next';

function History() {
  const { t } = useTranslation();
  return (
    <div>
      <h2>{t('history.title')}</h2>
      <p>{t('history.description')}</p>
    </div>
  );
}

export default History;