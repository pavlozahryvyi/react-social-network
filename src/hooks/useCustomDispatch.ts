import { useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

export function useCustomDispatch(actions: Array<any>) {
  const dispatch = useDispatch();

  return useMemo(
    () => actions.map((action) => bindActionCreators(action, dispatch)),
    [dispatch, actions]
  );
}
