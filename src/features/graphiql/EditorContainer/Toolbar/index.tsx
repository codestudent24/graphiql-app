import { useAppSelector } from '../../../../app/appHooks';
import PrettifyButton from '../PrettifyButton';
import replaceVariables from './model/replaceVariables';
import { useFetcher } from './model/useFetcherHook';
import styles from './UI/toolbar.module.scss';

type ToolbarProps = {
  isEditable: boolean;
  setIsEditable: (value: boolean) => void;
};

export default function Toolbar({ isEditable, setIsEditable }: ToolbarProps) {
  const { url, requestData, variables, headers } = useAppSelector((state) => state.root);
  const fetcher = useFetcher();
  return (
    <div className={styles.toolbar}>
      <button
        onClick={() => {
          const request = replaceVariables(requestData, variables);
          if (request) fetcher(request, headers, url);
        }}
      >
        Go
      </button>
      {isEditable && <PrettifyButton />}
      <button
        onClick={() => {
          setIsEditable(!isEditable);
        }}
      >
        {isEditable ? 'Results' : 'Editor'}
      </button>
    </div>
  );
}
