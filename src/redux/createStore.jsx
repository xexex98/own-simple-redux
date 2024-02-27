export default function createStore(reducer, initialState) {
  let state = initialState ?? {};
  let listeners = new Set();

  const subscribe = (fn) => {
    listeners.add(fn);

    return () => listeners.delete(fn);
  };

  const dispatch = (action) => {
    const prevState = structuredClone(state);
    const nextState = reducer(state, action);

    state = nextState;

    listeners.forEach((listener) => listener(prevState, nextState));
  };

  const getState = () => state;

  return {
    dispatch,
    subscribe,
    getState,
  };
}
