import { useDebounce } from 'use-debounce';
import { useSelector } from 'react-redux';
import { selectSearchTodos, selectTodos } from '../selectors';

export const useSearchTodos = () => {

	const searchTodos = useSelector(selectSearchTodos);
	const todos = useSelector(selectTodos);
    
	const [filterredTodos] = useDebounce(
		todos.filter((todo) => {
			return todo.title.toLowerCase().trim().includes(searchTodos.toLowerCase().trim());
	}), 1000);

	return {
    	filterredTodos,
	};
}


