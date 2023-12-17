import { useCallback } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { useAppDispatch, useAppSelector } from '../../../../app/appHooks';
import { setRequestData } from '../../../../app/rootSlice';

export default function Editor() {
  const { requestData } = useAppSelector((state) => state.root);
  const dispatch = useAppDispatch();

  const onChange = useCallback(
    (val: string) => {
      dispatch(setRequestData(val));
    },
    [dispatch],
  );

  return <CodeMirror value={requestData} onChange={onChange} />;
}
