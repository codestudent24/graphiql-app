import { useCallback, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { fetcher } from './model/fetcher';
import { useAppSelector } from '../../../../app/appHooks';

const initialInput = `{
  characters {
    results {
      name
    }
  }
}`;

export default function Editor() {
  const [codeValue, setCodeValue] = useState(initialInput);
  const { url } = useAppSelector((state) => state.root);

  const onChange = useCallback((val: string) => {
    setCodeValue(val);
  }, []);

  return (
    <>
      <button
        onClick={() => {
          fetcher(codeValue, url);
        }}
      >
        Send
      </button>
      <CodeMirror value={codeValue} onChange={onChange} />
    </>
  );
}
