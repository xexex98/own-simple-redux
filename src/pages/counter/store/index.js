import combineReducers from 'src/redux/combineReducer';
import createStore from '../../../redux/createStore';
import counterReducer from 'src/pages/counter/store/counterReducer';

const initialState = 0;

const rootReducer = combineReducers({
  count: counterReducer,
});

const store = createStore(counterReducer, initialState);

export default store;
