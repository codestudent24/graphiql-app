import { useAppSelector } from '../../../../app/appHooks';
import { useFetcher } from './model/useFetcherHook';
import styles from './UI/toolbar.module.scss';

type ToolbarProps = {
  isEditable: boolean;
  setIsEditable: (value: boolean) => void;
};

export default function Toolbar({ isEditable, setIsEditable }: ToolbarProps) {
  const { url, requestData } = useAppSelector((state) => state.root);
  const fetcher = useFetcher();
  return (
    <div className={styles.toolbar}>
      <button
        onClick={() => {
          fetcher(requestData, url);
        }}
      >
        Send
      </button>
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
