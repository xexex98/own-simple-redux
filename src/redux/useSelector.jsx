import { isEqual } from 'lodash';
import React from 'react';

export default function useSelector(fn, store) {
  const [, rerender] = React.useReducer((x) => x + 1, 0);

  React.useEffect(() => {
    const unsubscribe = store.subscribe((previousState, currentState) => {
      const prevState = fn(previousState);
      const newState = fn(currentState);
      const isStateChange = !isEqual(prevState, newState);

      if (isStateChange) {
        rerender();
      }
    });

    return () => unsubscribe();
  });

  return fn(store.getState());
}
