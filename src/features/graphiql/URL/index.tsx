import { useState } from 'react';
import { useAppSelector } from '../../../app/appHooks';
import useUrlHook from './model/useUrlHook';

export default function InputURL() {
  const { url } = useAppSelector((state) => state.root);
  const [input, setInput] = useState<string>(url);
  const handleURL = useUrlHook();
  return (
    <>
      <input
        defaultValue={url}
        placeholder="enter graphql endpoint url"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={() => handleURL(input)}>submit</button>
    </>
  );
}
