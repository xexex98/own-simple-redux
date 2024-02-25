import { useState } from 'react';
import { Link } from 'react-router-dom';
import store from 'src/pages/list/store';

import useDispatch from 'src/redux/useDispatch';
import useSelector from 'src/redux/useSelector';

const Money = () => {
  const money = useSelector((state) => state.money, store);
  const dispatch = useDispatch(store);

  return (
    <div className="flex gap-4 items-center justify-center">
      <p>Money: {money}</p>
      <button
        className="bg-slate-100 p-2"
        type="button"
        onClick={() => dispatch({ type: 'add_money', payload: 100 })}
      >
        Add
      </button>
    </div>
  );
};

const Input = () => {
  const [el, setEl] = useState('');
  const list = useSelector((state) => state.list, store);
  const dispatch = useDispatch(store);
  
  const handleAdd = () => {
    dispatch({ type: 'add', payload: el });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <p>Shopping list:</p>

      <div className="flex gap-4 items-center justify-center">
        <input
          className="border"
          value={el}
          onChange={(e) => setEl(e.target.value)}
        />
        <button
          className="bg-slate-100 p-2"
          type="button"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>

      {list.map((item, i) => (
        <p key={i}>{item}</p>
      ))}
    </div>
  );
};

export default function List() {
  return (
    <div className="flex flex-col gap-4">
      <Link to={'/'}>
        <button className="p-2 bg-slate-100 w-full">Go to Increment store</button>
      </Link>
      <Money />
      <Input />
    </div>
  );
}
