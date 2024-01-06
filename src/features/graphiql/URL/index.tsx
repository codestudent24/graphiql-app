/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { BookOutlined } from '@ant-design/icons';
import { useAppSelector } from '../../../app/appHooks';
import useUrlHook from './model/useUrlHook';
import styles from './UI/URL.module.scss';
import commonStyles from '../../../shared/common.module.scss';
import { useSchemaFetcher } from '../Documentation/model/getShema';

interface InputURLProps {
  handleDocsIconClick: (prop?: boolean) => void;
}

export default function InputURL({ handleDocsIconClick }: InputURLProps) {
  const { url } = useAppSelector((state) => state.root);
  const [input, setInput] = useState<string>(url);
  const handleURL = useUrlHook();
  const handleSchema = useSchemaFetcher();
  const [isDocsIconVisible, setIsDocsIconVisible] = useState(false);

  useEffect(() => {
    handleSchema(url).then(() => {
      setIsDocsIconVisible(true);
    });
  }, [url]);

  const handleIconClick = () => {
    handleDocsIconClick();
  };

  const handleSubmit = () => {
    if (input !== url) {
      setIsDocsIconVisible(false);
    }
    handleDocsIconClick(false);
    handleURL(input);

    handleSchema(input);
  };

  return (
    <div className={styles.urlContainer}>
      {isDocsIconVisible && <BookOutlined className={styles.docsIcon} title="Docs" onClick={handleIconClick} />}
      <input
        defaultValue={url}
        placeholder="enter graphql endpoint url"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button className={commonStyles.button} onClick={handleSubmit}>
        submit
      </button>
    </div>
  );
}
