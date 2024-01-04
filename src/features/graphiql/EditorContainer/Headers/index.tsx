import CodeMirror from '@uiw/react-codemirror';
import { linter } from '@codemirror/lint';
import { json, jsonParseLinter } from '@codemirror/lang-json';
import { myTheme } from '../../../../shared/codemirrorTheme';
import ErrorList from '../../../ErrorList';

type Props = {
  headersInput: string;
  setHeadersInput: (value: string) => void;
  errors: string[];
};

export default function Headers({ headersInput, setHeadersInput, errors }: Props) {
  const LinterExtension = linter(jsonParseLinter());

  return (
    <>
      <CodeMirror
        value={headersInput}
        onChange={setHeadersInput}
        theme={myTheme}
        extensions={[json(), LinterExtension]}
      />
      {errors.length > 0 && <ErrorList errors={errors} />}
    </>
  );
}
