export default function useDispatch(store) {
	return (action) => store.dispatch(action);
}
