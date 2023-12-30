import { useCallback } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { useAppDispatch, useAppSelector } from '../../../../app/appHooks';
import { setRequestData } from '../../../../app/rootSlice';
import ErrorList from '../../../ErrorList';
import { myTheme } from '../../../../shared/codemirrorTheme';

/* To check variables
query ($name: String | Number, $id: Number, $isBoolean: Boolean) {
  characters {
    results {
      name
    }
  }
}
*/

type Props = {
  errors: string[];
};

export default function Editor({ errors }: Props) {
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
