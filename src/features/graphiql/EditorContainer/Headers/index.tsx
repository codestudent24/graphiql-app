import CodeMirror from '@uiw/react-codemirror';
import { linter } from '@codemirror/lint';
import { json, jsonParseLinter } from '@codemirror/lang-json';
import { myTheme } from '../../../../shared/codemirrorTheme';
import ErrorList from '../../../ErrorList';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/appHooks';
import { setHeaders } from '../../../../app/rootSlice';

import styles from './UI/headers.module.scss';

const initialHeaders = `{
  "Content-Text": "TEST"
}`;

export default function Headers() {
  const { headers } = useAppSelector((state) => state.root);

  const [headersInput, setHeadersInput] = useState(headers ? headers : initialHeaders);
  const [headersErrors, setHeadersErrors] = useState<string[]>([]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (headersInput.length) {
      try {
        JSON.parse(headersInput);
        setHeadersErrors([]);
        dispatch(setHeaders(headersInput));
      } catch (error) {
        setHeadersErrors(['Not valid JSON']);
      }
    } else {
      setHeadersErrors([]);
    }
  }, [dispatch, setHeadersErrors, headersInput]);
  const LinterExtension = linter(jsonParseLinter());

  return (
    <div className={styles.wrapper}>
      <CodeMirror
        className={styles.editor}
        value={headersInput}
        onChange={setHeadersInput}
        theme={myTheme}
        extensions={[json(), LinterExtension]}
      />
      {headersErrors.length > 0 && <ErrorList errors={headersErrors} />}
    </div>
  );
}
