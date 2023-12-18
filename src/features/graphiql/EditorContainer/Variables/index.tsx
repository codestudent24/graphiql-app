import { useCallback, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { linter } from '@codemirror/lint';
import { json, jsonParseLinter } from '@codemirror/lang-json';
import { useAppDispatch } from '../../../../app/appHooks';
import { setVariables } from '../../../../app/rootSlice';

export default function Variables() {
  const [code, setCode] = useState('');
  const [hasError, setHasError] = useState(false);
  const dispatch = useAppDispatch();

  const LinterExtension = linter(jsonParseLinter());

  const onChange = useCallback(
    (val: string) => {
      setCode(val);
      try {
        const parsed = JSON.parse(val);
        if (typeof parsed === 'object') dispatch(setVariables(parsed));
        setHasError(false);
        console.log(parsed);
      } catch {
        setHasError(true);
      }
    },
    [dispatch],
  );
  return (
    <>
      <CodeMirror value={code} onChange={onChange} extensions={[json(), LinterExtension]} />
      {hasError && <h5>not valid JSON</h5>}
    </>
  );
}
