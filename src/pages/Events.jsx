import { useTranslation } from 'react-i18next';

function Events() {
  const { t } = useTranslation();
  return (
    <div>
      <p>{t('events.description')}</p>
    </div>
  );
}

export default Events;