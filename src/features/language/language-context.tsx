import { ReactNode, createContext, useState } from 'react';

type LanguageContextType = {
  language: string;
  changeLanguage: (newLanguage: string) => void;
};

interface LanguageProviderProps {
  children: ReactNode;
}

const defaultValue = {
  language: 'EN',
  changeLanguage: () => {},
};

export const LanguageContext = createContext<LanguageContextType>(defaultValue);

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState('EN');

  const changeLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  return <LanguageContext.Provider value={{ language, changeLanguage }}>{children}</LanguageContext.Provider>;
}
