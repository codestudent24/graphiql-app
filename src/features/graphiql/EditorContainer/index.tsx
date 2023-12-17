import { useState } from 'react';
import Editor from './Editor';
import styles from './editorContainer.module.scss';
import Toolbar from './Toolbar';
import Results from './Results';

export default function EditorContainer() {
  const [isEditable, setIsEditable] = useState(true);
  return (
    <div className={styles.editorContainer}>
      <Toolbar isEditable={isEditable} setIsEditable={setIsEditable} />
      {isEditable ? <Editor /> : <Results />}
    </div>
  );
}
