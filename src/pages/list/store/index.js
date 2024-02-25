import combineReducers from 'src/redux/combineReducer';
import createStore from 'src/redux/createStore';

const initialState = { list: ['socks'], money: 0 };

function listReducer(state = initialState, action) {
  switch (action.type) {
    case 'add': {
      return [...state, action.payload];
    }
    default:
      return state;
  }
}

function moneyReducer(state = 0, action) {
  switch (action.type) {
    case 'add_money': {
      return state + action.payload;
    }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  list: listReducer,
  money: moneyReducer,
});

const store = createStore(rootReducer, initialState);

export default store;