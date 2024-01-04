import { useState } from 'react';
import { useAppSelector } from '../../../app/appHooks';
import useUrlHook from './model/useUrlHook';
import styles from './UI/URL.module.scss';
import commonStyles from '../../../shared/common.module.scss';

export default function InputURL() {
  const { url } = useAppSelector((state) => state.root);
  const [input, setInput] = useState<string>(url);
  const handleURL = useUrlHook();
  return (
    <div className={styles.urlContainer}>
      <input
        defaultValue={url}
        placeholder="enter graphql endpoint url"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button className={commonStyles.button} onClick={() => handleURL(input)}>
        submit
      </button>
    </div>
  );
}
