import { useSelector, useDispatch } from 'react-redux';
import { selectInputValue, selectUrl } from '../selectors';
import { hookIsCreating, hookRefreshTodosFlag } from '../action';


export const useRequestAddTodo = () => {

	const dispatch = useDispatch()
	const inputValue = useSelector(selectInputValue);
	const url = useSelector(selectUrl);

	const requestAddTodo = () => {
		dispatch(hookIsCreating(true))
		fetch(`${url}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: inputValue,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('в список добавлено новое дело:', response);
				dispatch(hookRefreshTodosFlag());
			})
			.finally(() => dispatch(hookIsCreating(false)));
	};
	return {
		requestAddTodo,
	};
};
