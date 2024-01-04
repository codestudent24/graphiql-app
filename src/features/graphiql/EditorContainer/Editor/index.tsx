import { useCallback, useEffect, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { useAppDispatch, useAppSelector } from '../../../../app/appHooks';
import { setRequestData, setVariables } from '../../../../app/rootSlice';
import { makeVariables } from './model/handleVariables';
import { myTheme } from '../../../../shared/codemirrorTheme';
import ErrorList from '../../../ErrorList';

export default function Editor() {
  const [errors, setErrors] = useState<string[]>([]);
  const { requestData } = useAppSelector((state) => state.root);
  const dispatch = useAppDispatch();

  const onChange = useCallback(
    (val: string) => {
      dispatch(setRequestData(val));
    },
    [dispatch],
  );

  useEffect(() => {
    const { errors, variablesSet } = makeVariables(requestData);
    setErrors(errors);
    if (errors.length === 0) dispatch(setVariables(variablesSet));
  }, [requestData, setErrors, dispatch]);

  return (
    <>
      <CodeMirror
        value={requestData}
        onChange={onChange}
        theme={myTheme}
        extensions={[javascript({ typescript: true })]}
      />
      <ErrorList errors={errors} />
    </>
  );
}
