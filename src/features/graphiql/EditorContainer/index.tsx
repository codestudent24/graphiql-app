import { useState } from 'react';
import Editor from './Editor';
import Toolbar from './Toolbar';
import Results from './Results';
import Variables from './Variables';
import Headers from './Headers';

import styles from './editorContainer.module.scss';

interface EditorContainerProps {
  language: string;
}

export default function EditorContainer({ language }: EditorContainerProps) {
  const isEn = language === 'EN';

  const [isEditable, setIsEditable] = useState(true);
  const [isVarsEditMode, setIsVarsEditMode] = useState(true);

  return (
    <div className={styles.editorWrapper}>
      <div className={styles.editorContainer}>
        <Toolbar language={language} isEditable={isEditable} setIsEditable={setIsEditable} />
        {isEditable ? <Editor /> : <Results />}
      </div>
      <div className={styles.variablesContainer}>
        <div className={styles.btns}>
          <button className={styles.btn} onClick={() => setIsVarsEditMode(true)}>
            {isEn ? 'Variables' : 'Переменные'}
          </button>
          <button className={styles.btn} onClick={() => setIsVarsEditMode(false)}>
            {isEn ? 'Headers' : 'Заголовки'}
          </button>
        </div>
        {isVarsEditMode ? <Variables /> : <Headers />}
      </div>
    </div>
  );
}
