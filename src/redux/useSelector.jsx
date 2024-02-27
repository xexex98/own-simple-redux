import React from 'react';
import { isEqual } from 'lodash';

export default function useSelector(selector, store) {
  const [, rerender] = React.useReducer((x) => x + 1, 0);

  React.useEffect(() => {
    const unsubscribe = store.subscribe((prevState, nextState) => {
      const isNotEqual = !isEqual(selector(prevState), selector(nextState));

      if (isNotEqual) {
        rerender();
      }
    });
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return selector(store.getState());
}
