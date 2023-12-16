import { useAppDispatch } from '../../../../app/appHooks';
import { changeURL } from '../../../../app/rootSlice';

export default function useUrlHook() {
  const dispatch = useAppDispatch();

  return function (URL: string) {
    dispatch(changeURL(URL));
  };
}
