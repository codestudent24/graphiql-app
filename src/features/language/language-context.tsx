import { createContext } from 'react';

type LanguageContextType = {
  language: string;
  changeLanguage: (newLanguage: string) => void;
};

const defaultValue = {
  language: 'EN',
  changeLanguage: () => {},
};

export const LanguageContext = createContext<LanguageContextType>(defaultValue);
