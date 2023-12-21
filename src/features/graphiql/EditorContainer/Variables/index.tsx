import { useCallback, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { linter } from '@codemirror/lint';
import { json, jsonParseLinter } from '@codemirror/lang-json';
import { useCheckVariablesHook } from './model/isCorrectVariables';
import ErrorList from '../../../ErrorList';

const initialCode = `{
  "id": "1"
}`;

export default function Variables() {
  const [code, setCode] = useState(initialCode);
  const [errors, setErrors] = useState<string[]>([]);
  const handleVariables = useCheckVariablesHook();

  const LinterExtension = linter(jsonParseLinter());

  const onChange = useCallback(
    (val: string) => {
      setCode(val);
      try {
        const parsed = JSON.parse(val);
        if (typeof parsed === 'object') {
          const errors = handleVariables(parsed);
          setErrors(errors);
        }
      } catch {
        setErrors(['Not valid JSON']);
      }
    },
    [handleVariables],
  );
  return (
    <>
      <CodeMirror value={code} onChange={onChange} extensions={[json(), LinterExtension]} />
      {errors.length > 0 && <ErrorList errors={errors} />}
    </>
  );
}
