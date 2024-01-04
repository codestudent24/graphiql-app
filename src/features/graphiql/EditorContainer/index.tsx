import { useEffect, useState } from 'react';
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

const initialVars = `{
  "id": "1"
}`;

const initialHeaders = `{
  "Content-Text": "TEST"
}`;

export default function EditorContainer() {
  const [isEditable, setIsEditable] = useState(true);

  const [requestErrors, setRequestErrors] = useState<string[]>([]);

  const [varsInput, setVarsInput] = useState(initialVars);
  const [varsErrors, setVarsErrors] = useState<string[]>([]);

  const [headersInput, setHeadersInput] = useState(initialHeaders);
  const [headersErrors, setHeadersErrors] = useState<string[]>([]);

  const { requestData, variables } = useAppSelector((state) => state.root);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const { errors, variablesSet } = makeVariables(requestData);
    setRequestErrors(errors);
    if (errors.length === 0) {
      dispatch(setVariables(variablesSet));
      dispatch(setHeaders(headersInput));
    }
  }, [requestData, headersInput, setRequestErrors, dispatch]);

  useEffect(() => {
    if (varsInput.length) {
      try {
        const parsed = JSON.parse(varsInput);
        if (typeof parsed === 'object') {
          const { errors, variablesSet } = checkVariables(parsed, variables);
          setVarsErrors(errors);
          if (errors.length === 0) {
            for (let i = 0; i < variablesSet.length; i += 1) {
              dispatch(setVariableValue({ index: i, value: variablesSet[i].value }));
            }
          }
        }
      } catch {
        setVarsErrors(['Not valid JSON']);
      }
    } else {
      setVarsErrors([]);
    }
  }, [dispatch, setVarsErrors, varsInput, variables]);

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
        {isEditable ? <Editor errors={requestErrors} /> : <Results />}
      </div>
      <div className={styles.variablesContainer}>
        <h2 className={styles.header}>Variables</h2>
        <Variables varsInput={varsInput} setVarsInput={setVarsInput} errors={varsErrors} />
      </div>
      <div className={styles.variablesContainer}>
        <h2 className={styles.header}>Headers</h2>
        <Headers headersInput={headersInput} setHeadersInput={setHeadersInput} errors={headersErrors} />
      </div>
    </>
  );
}
