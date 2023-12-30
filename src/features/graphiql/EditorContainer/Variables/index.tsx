import CodeMirror from '@uiw/react-codemirror';
import { linter } from '@codemirror/lint';
import { json, jsonParseLinter } from '@codemirror/lang-json';
import ErrorList from '../../../ErrorList';
import { myTheme } from '../../../../shared/codemirrorTheme';

type Props = {
  varsInput: string;
  setVarsInput: (value: string) => void;
  errors: string[];
};

export default function Variables({ varsInput, setVarsInput, errors }: Props) {
  const LinterExtension = linter(jsonParseLinter());

  const onChange = (val: string) => {
    setVarsInput(val);
  };

  return (
    <>
      <CodeMirror value={varsInput} onChange={onChange} theme={myTheme} extensions={[json(), LinterExtension]} />
      {errors.length > 0 && <ErrorList errors={errors} />}
    </>
  );
}
