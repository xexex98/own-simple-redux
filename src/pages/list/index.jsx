import { useState } from 'react';
import { Link } from 'react-router-dom';
import store from 'src/pages/list/store';
import useDispatch from 'src/redux/useDispatch';
import useSelector from 'src/redux/useSelector';

const Money = () => {
  const money = useSelector((state) => state.money.money, store);
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

const MoneyCard = () => {
  const moneyCard = useSelector((state) => state.money.moneyCard, store);
  const dispatch = useDispatch(store);

  return (
    <div className="flex gap-4 items-center justify-center">
      <p>Money Card: {moneyCard}</p>
      <button
        className="bg-slate-100 p-2"
        type="button"
        onClick={() => dispatch({ type: 'add_money_card', payload: 100 })}
      >
        Add
      </button>
    </div>
  );
};

const Input = () => {
  const [el, setEl] = useState('');
  const list = useSelector((state) => state.list.list, store);
  const dispatch = useDispatch(store);

  const handleAdd = () => {
    if (!el) return;
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
      <div className='flex flex-col border w-1/2 items-center'>
        {list?.map((item, i) => (
          <p key={i} className='border-b w-full text-center p-2'>{i + 1}. {item}</p>
        ))}
      </div>
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
      <MoneyCard />
      <Input />
    </div>
  );
}
