import { useState } from 'react';
import Editor from './Editor';
import Toolbar from './Toolbar';
import Results from './Results';
import Variables from './Variables';

import { useAppDispatch, useAppSelector } from '../../../app/appHooks';
import { makeVariables } from './Editor/model/handleVariables';
import { setHeaders, setVariableValue, setVariables } from '../../../app/rootSlice';
import { checkVariables } from './Variables/model/isCorrectVariables';

import styles from './editorContainer.module.scss';
import Headers from './Headers';

const initialHeaders = `{
  "Content-Text": "TEST"
}`;

export default function EditorContainer() {
  const [isEditable, setIsEditable] = useState(true);
     
  const [headersInput, setHeadersInput] = useState(initialHeaders);
  const [headersErrors, setHeadersErrors] = useState<string[]>([]);

  useEffect(() => {
    if (headersInput.length) {
      try {
        JSON.parse(headersInput);
        setHeadersErrors([]);
      } catch (error) {
        setHeadersErrors(['Not valid JSON']);
      }
    } else {
      setHeadersErrors([]);
    }
  }, [setHeadersErrors, headersInput]);

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
      <div className={styles.variablesContainer}>
        <h2 className={styles.header}>Headers</h2>
        <Headers headersInput={headersInput} setHeadersInput={setHeadersInput} errors={headersErrors} />
      </div>
    </>
  );
}
