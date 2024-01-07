import { useAppDispatch, useAppSelector } from '../../../../app/appHooks';
import { setRequestData } from '../../../../app/rootSlice';
import { prettify } from './model/prettify';

interface PrettifyButtonProps {
  language: string;
}

export default function PrettifyButton({ language }: PrettifyButtonProps) {
  const isEn = language === 'EN';

  const { requestData } = useAppSelector((state) => state.root);
  const dispatch = useAppDispatch();
  return (
    <button
      onClick={() => {
        const prettified = prettify(requestData);
        dispatch(setRequestData(prettified));
      }}
    >
      {isEn ? 'Prettify' : 'Форматировать'}
    </button>
  );
}
