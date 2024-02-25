import React from 'react';
import { isEqual } from 'lodash';

export default function useSelector(fn, store) {
  const [, rerender] = React.useReducer((x) => x + 1, 0);
  const render = () => rerender();

  React.useEffect(function () {
    store.subscribe((prevState, newState) => {
      console.log('p', prevState, '\nn', newState);
      // console.log(!isEqual(prevState, newState))
      const isStateChange = !isEqual(prevState, newState);
      rerender();
    });

    // return () => unsubscribe();
  });

  return fn(store.getState());
}
