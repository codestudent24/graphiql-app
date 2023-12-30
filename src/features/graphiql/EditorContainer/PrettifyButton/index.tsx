import { useAppDispatch, useAppSelector } from '../../../../app/appHooks';
import { setRequestData } from '../../../../app/rootSlice';
import { prettify } from './model/prettify';
import commonStyles from '../../../../shared/common.module.scss';

export default function PrettifyButton() {
  const { requestData } = useAppSelector((state) => state.root);
  const dispatch = useAppDispatch();
  return (
    <button
      className={commonStyles.button}
      onClick={() => {
        const prettified = prettify(requestData);
        dispatch(setRequestData(prettified));
      }}
    >
      Prettify
    </button>
  );
}
