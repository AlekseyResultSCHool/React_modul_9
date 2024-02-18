import { useSelector, useDispatch } from 'react-redux';
import { selectData, selectUrl} from '../selectors';
import { hookIsDeleting, hookRefreshTodosFlag } from '../action';

export const useRequestDeleteTodo = () => {

	const dispatch = useDispatch()
	const dataTodo = useSelector(selectData);
	const url = useSelector(selectUrl);

    const requesDeleteTodo = () => {
		dispatch(hookIsDeleting(true));
		fetch(`${url}/${dataTodo}`, {
			method: 'DELETE',
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('дело удалено:', response);
				dispatch(hookRefreshTodosFlag());
			})
			.finally(() => dispatch(hookIsDeleting(false)));
	};
    return {
		requesDeleteTodo,
	};
}