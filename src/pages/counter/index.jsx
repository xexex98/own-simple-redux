import useDispatch from 'src/redux/useDispatch';
import useSelector from '../../redux/useSelector';
import { Link } from 'react-router-dom';
import store from 'src/pages/counter/store';

export default function Counter() {
  const value = useSelector((state) => state, store);
  const dispatch = useDispatch(store);

  return (
    <div className='list'>
      <Link to={'/list'}>
        <button>Go to Decrement store</button>
      </Link>
      <br />
      <br />
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <p>{value}</p>
    </div>
  );
}
