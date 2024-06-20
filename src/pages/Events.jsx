import { useTranslation } from 'react-i18next';

function Events() {
  const { t } = useTranslation();
  return (
    <div>
      <h2>{t('events.title')}</h2>
      <p>{t('events.description')}</p>
    </div>
  );
}

export default Events;