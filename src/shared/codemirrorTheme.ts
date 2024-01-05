import { createTheme } from '@uiw/codemirror-themes';
import { tags as t } from '@lezer/highlight';

export const myTheme = createTheme({
  theme: 'light',
  settings: {
    background: '#1C1C1CDD',
    backgroundImage: '',
    foreground: '#3FA4FF',
    caret: '#FEC163',
    selection: '#88888844',
    selectionMatch: '#88888844',
    lineHighlight: '#ffffff1a',
    gutterBackground: '#1C1C1CDD',
    gutterForeground: '#FFFFFF88',
    gutterActiveForeground: '#1AC69C',
    gutterBorder: 'none',
  },
  styles: [
    { tag: t.comment, color: '#ffffff66' },
    { tag: t.bracket, color: '#FF32C6' },
  ],
});
