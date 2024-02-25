export default function createStore(reducer, initialState) {
  let state = initialState ?? {};
  let listeners = [];

  const subscribe = (fn) => listeners.push(fn);

  const dispatch = (action) => {
    console.log(action, state)
    const prevState = state;
    const newState = reducer(state, action);
    state = newState;
    listeners.forEach((listener) => listener(prevState, newState));
  };

  // const unsubscribe = (fn) => {
  //   const subscriber = listeners.indexOf(fn);
  //   if (subscriber !== -1) {
  //     listeners.splice(subscriber, 1);
  //   }
  // };

  const getState = () => state;

  return {
    dispatch,
    subscribe,
    // unsubscribe,
    getState,
  };
}
