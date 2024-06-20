import { useTranslation } from 'react-i18next';

function Events() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('events.title')}</h1>
      <p>{t('events.description')}</p>
    </div>
  );
}

export default Events;