import { useApp } from '../context/AppContext';

export const useTranslation = () => {
  const { language, setLanguage, t } = useApp();
  return { language, setLanguage, t };
};
