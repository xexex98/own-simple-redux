export default function createStore(reducer, initialState) {
  let state = initialState ?? {};
  let listeners = [];

  const subscribe = (fn) => {
    listeners.push(fn);

    return () => {
      const subscriber = listeners.indexOf(fn);

      if (subscriber !== -1) {
        listeners.splice(subscriber, 1);
      }
    };
  };

  const dispatch = (action) => {
    const prevState = state;
    const newState = reducer(state, action);

    // console.log('p', prevState, '\nn', newState);

    state = newState;

    listeners.forEach((listener) => listener(prevState, newState));
  };

  const getState = () => state;

  return {
    dispatch,
    subscribe,
    getState,
  };
}
