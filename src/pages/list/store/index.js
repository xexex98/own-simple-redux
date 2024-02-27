import combineReducers from 'src/redux/combineReducer';
import createStore from 'src/redux/createStore';

const initialListState = { list: ['socks'] };
const initialMoneyState = { money: 0, moneyCard: 0 };

function listReducer(state = initialListState, action) {
  switch (action.type) {
    case 'add': {
      return [...state, action.payload];
    }
    default:
      return state;
  }
}

function moneyReducer(state = initialMoneyState, action) {
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

const store = createStore(rootReducer);

export default store;
