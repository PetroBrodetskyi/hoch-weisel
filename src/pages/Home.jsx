import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();
  return (
    <div>
      <h2>{t('home.title')}</h2>
      <p>{t('home.description')}</p>
    </div>
  );
}

export default Home;