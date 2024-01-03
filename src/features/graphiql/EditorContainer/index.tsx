import { useState } from 'react';
import Editor from './Editor';
import Toolbar from './Toolbar';
import Results from './Results';
import Variables from './Variables';
import styles from './editorContainer.module.scss';

export default function EditorContainer() {
  const [isEditable, setIsEditable] = useState(true);

  return (
    <>
      <div className={styles.editorContainer}>
        <Toolbar isEditable={isEditable} setIsEditable={setIsEditable} />
        {isEditable ? <Editor /> : <Results />}
      </div>
      <div className={styles.variablesContainer}>
        <h2 className={styles.header}>Variables</h2>
        <Variables />
      </div>
    </>
  );
}
