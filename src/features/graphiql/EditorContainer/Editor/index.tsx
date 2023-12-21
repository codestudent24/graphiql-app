import { useCallback } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { useAppDispatch, useAppSelector } from '../../../../app/appHooks';
import { setRequestData, setVariables } from '../../../../app/rootSlice';
import { makeVariablesSet } from './model/replaceVariables';

/* To check variables
query ($name: String | Number, $id: Number, $isBoolean: Boolean) {
  characters {
    results {
      name
    }
  }
}
*/
export default function Editor() {
  const { requestData } = useAppSelector((state) => state.root);
  const dispatch = useAppDispatch();

  const onChange = useCallback(
    (val: string) => {
      dispatch(setRequestData(val));
    },
    [dispatch],
  );

  return (
    <>
      <CodeMirror value={requestData} onChange={onChange} />
      <br />
      <button
        onClick={() => {
          // console.log(replaceVariables(requestData, variables as VariablesType));
          const varSet = makeVariablesSet(requestData);
          dispatch(setVariables(varSet));
        }}
      >
        check variables
      </button>
    </>
  );
}
