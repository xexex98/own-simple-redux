import useDispatch from 'src/redux/useDispatch';
import useSelector from '../../redux/useSelector';
import { Link } from 'react-router-dom';
import store from 'src/pages/counter/store';

const Count = () => {
  const value = useSelector((state) => state.value, store);
  const dispatch = useDispatch(store);
  return (
    <div className='flex items-center justify-center gap-3'>
      <button
        className="bg-blue-200 p-2"
        onClick={() => dispatch({ type: 'increment' })}
      >
        Increment
      </button>
      <p className='text-lg'>{value}</p>
      <button
        className="bg-blue-200 p-2"
        onClick={() => dispatch({ type: 'decrement' })}
      >
        Decrement
      </button>
    </div>
  );
};

export default function Counter() {
  return (
    <div className='flex flex-col gap-4'>
      <Link to={'/list'}>
        <button className="p-2 bg-slate-100 w-full">Go to Decrement store</button>
      </Link>
      <Count />
    </div>
  );
}
