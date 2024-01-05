import { ReactNode, useState } from 'react';
import { LanguageContext } from './language-context';

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState('EN');

  const changeLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  return <LanguageContext.Provider value={{ language, changeLanguage }}>{children}</LanguageContext.Provider>;
}
