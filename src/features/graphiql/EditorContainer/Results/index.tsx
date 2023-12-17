import CodeMirror, { EditorState, EditorView } from '@uiw/react-codemirror';
import { useAppSelector } from '../../../../app/appHooks';
import prettifyResponseData from './model/prettifyResponseData';

export default function Results() {
  //   const defaultValue = `{
  //   name: "Rick"
  // }`;
  const { responseData } = useAppSelector((state) => state.root);
  return (
    <CodeMirror
      value={prettifyResponseData(responseData)}
      extensions={[EditorView.editable.of(false), EditorState.readOnly.of(true)]}
    />
  );
}
