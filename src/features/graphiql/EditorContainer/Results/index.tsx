import CodeMirror, { EditorState, EditorView } from '@uiw/react-codemirror';
import { linter } from '@codemirror/lint';
import { json, jsonParseLinter } from '@codemirror/lang-json';
import { useAppSelector } from '../../../../app/appHooks';

const LinterExtension = linter(jsonParseLinter());

export default function Results() {
  const { responseData } = useAppSelector((state) => state.root);
  return (
    <CodeMirror
      value={responseData}
      extensions={[EditorView.editable.of(false), EditorState.readOnly.of(true), json(), LinterExtension]}
    />
  );
}
