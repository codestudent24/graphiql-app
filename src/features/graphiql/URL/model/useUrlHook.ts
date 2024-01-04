import { useAppDispatch } from '../../../../app/appHooks';
import { setURL } from '../../../../app/rootSlice';

export default function useUrlHook() {
  const dispatch = useAppDispatch();

  return function (URL: string) {
    dispatch(setURL(URL));
  };
}
