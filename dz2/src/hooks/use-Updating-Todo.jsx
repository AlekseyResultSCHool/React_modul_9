import { useSelector, useDispatch } from 'react-redux';
import { selectInputValue, selectData, selectUrl } from '../selectors';
import { hookIsUpdating, hookRefreshTodosFlag } from '../action';

export const useRequestUpdatingTodo = () => {

	const dispatch = useDispatch();
	const dataTodo = useSelector(selectData);
	const inputValue = useSelector(selectInputValue);
	const url = useSelector(selectUrl);

    const requesUpdateTodo = () => {
		dispatch(hookIsUpdating(true))
		fetch(`${url}/${dataTodo}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: inputValue,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('список обновлен:', response);
				dispatch(hookRefreshTodosFlag());
			})
			.finally(() => dispatch(hookIsUpdating(false)));
	};
    return {
		requesUpdateTodo,
	};
}