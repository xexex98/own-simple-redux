import counterReducer from 'src/pages/counter/store/counterReducer';
import createStore from '../../../redux/createStore';

const initialState = 0;

const store = createStore(counterReducer, initialState);

export default store;
