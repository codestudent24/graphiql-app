import { useAppSelector } from '../../../../app/appHooks';
import PrettifyButton from '../PrettifyButton';
import replaceVariables from './model/replaceVariables';
import { useFetcher } from './model/useFetcherHook';
import styles from './UI/toolbar.module.scss';
import commonStyles from '../../../../shared/common.module.scss';

type ToolbarProps = {
  isEditable: boolean;
  setIsEditable: (value: boolean) => void;
};

export default function Toolbar({ isEditable, setIsEditable }: ToolbarProps) {
  const { url, requestData, variables } = useAppSelector((state) => state.root);
  const fetcher = useFetcher();
  return (
    <div className={styles.toolbar}>
      <button
        className={commonStyles.button}
        onClick={() => {
          const request = replaceVariables(requestData, variables);
          if (request) fetcher(request, url);
        }}
      >
        Go
      </button>
      <PrettifyButton />
      <button
        className={commonStyles.button}
        onClick={() => {
          setIsEditable(!isEditable);
        }}
      >
        {isEditable ? 'Results' : 'Editor'}
      </button>
    </div>
  );
}
