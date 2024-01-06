import { useAppSelector } from '../../../../app/appHooks';
import PrettifyButton from '../PrettifyButton';
import replaceVariables from './model/replaceVariables';
import { useFetcher } from './model/useFetcherHook';
import styles from './UI/toolbar.module.scss';

type ToolbarProps = {
  language: string;
  isEditable: boolean;
  setIsEditable: (value: boolean) => void;
};

export default function Toolbar({ language, isEditable, setIsEditable }: ToolbarProps) {
  const isEn = language === 'EN';

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
        {isEn ? 'Go' : 'Запустить'}
      </button>
      {isEditable && <PrettifyButton language={language} />}
      <button
        onClick={() => {
          setIsEditable(!isEditable);
        }}
      >
        {isEditable ? (isEn ? 'Results' : 'Результаты') : isEn ? 'Editor' : 'Редактор'}
      </button>
    </div>
  );
}
