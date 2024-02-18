import { useEffect } from 'react';
import { hookIsLoading, hookSortTodos, hookTodos, hookUrl, hookRefreshTodosFlag } from '../action';
import { selectSortTodos, selectUrl, selectFlag } from '../selectors';
import { useSelector, useDispatch } from 'react-redux';


export const useRequestGetTodo = () => {

	const dispatch = useDispatch();
	const sortTodos = useSelector(selectSortTodos);
	const url = useSelector(selectUrl);
	const refreshTodosFlag = useSelector(selectFlag);
	
    useEffect(() => {
		dispatch(hookIsLoading(true));
		fetch(url)
			.then((loadedData) => loadedData.json())
			.then((loadedTodos) => {
				dispatch(hookTodos(loadedTodos));
			})
			.finally(() => dispatch(hookIsLoading(false)));
	}, [refreshTodosFlag]);

	const clickSortTodo = () => {
		dispatch(hookSortTodos(!sortTodos));
    	if (sortTodos === false) {
			dispatch(hookUrl('http://localhost:3005/todos?_sort=title&_order=asc'))
    	}
    	if (sortTodos === true) {
			dispatch(hookUrl('http://localhost:3005/todos'))
    	}
	
		dispatch(hookRefreshTodosFlag(refreshTodosFlag));
	};
	
    return {
		clickSortTodo,
	};
}