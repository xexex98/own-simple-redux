import combineReducers from 'src/redux/combineReducer';
import createStore from 'src/redux/createStore';

const initialState = { list: { list: ['socks'] }, money: { money: 0, moneyCard: 0 } };

function listReducer(state = initialState, action) {

  switch (action.type) {
    case 'add': {
      return { ...state, list: [...state.list, action.payload] };
    }
    default:
      return state;
  }
}

function moneyReducer(state = initialState, action) {
  switch (action.type) {
    case 'add_money': {
      return { ...state, money: state.money + action.payload };
    }
    case 'add_money_card': {
      return { ...state, moneyCard: state.moneyCard + action.payload };
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
