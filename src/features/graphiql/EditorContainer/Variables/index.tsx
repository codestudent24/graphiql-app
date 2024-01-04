import { useEffect, useState, memo } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { linter } from '@codemirror/lint';
import { json, jsonParseLinter } from '@codemirror/lang-json';
import { checkVariables } from './model/isCorrectVariables';
import { setVariableValue } from '../../../../app/rootSlice';
import { useAppDispatch, useAppSelector } from '../../../../app/appHooks';
import { myTheme } from '../../../../shared/codemirrorTheme';
import ErrorList from '../../../ErrorList';

import styles from './UI/variables.module.scss';

const initialVars = `{
  "id": "1"
}`;

export default memo(function Variables() {
  const { variables } = useAppSelector((state) => state.root);

  const [varsInput, setVarsInput] = useState(initialVars);
  const [varsErrors, setVarsErrors] = useState<string[]>([]);

  const dispatch = useAppDispatch();

  const LinterExtension = linter(jsonParseLinter());

  const onChange = (val: string) => {
    setVarsInput(val);
  };

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

  return (
    <>
      <CodeMirror
        className={styles.editor}
        value={varsInput}
        onChange={onChange}
        theme={myTheme}
        extensions={[json(), LinterExtension]}
      />
      {varsErrors.length > 0 && <ErrorList errors={varsErrors} />}
    </>
  );
});
