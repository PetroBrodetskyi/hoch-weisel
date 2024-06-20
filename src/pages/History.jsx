import { useTranslation } from 'react-i18next';

function History() {
  const { t } = useTranslation();
  return (
    <div>
      <p>{t('history.description')}</p>
    </div>
  );
}

export default History;