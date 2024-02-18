import  React from 'react';
import { Button, Container } from './components';
import styles from './style.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsCreating, selectIsDeleting, selectIsUpdating, selectIsLoading, selectSortTodos } from './selectors';
import { useRequestAddTodo, useRequestUpdatingTodo, useRequestDeleteTodo, useRequestGetTodo, useSearchTodos } from './hooks';
import { appInputValue, appData, appSearchTodos } from './action';

export const App = () => {

	let inputTextValue = React.createRef();
	const dispatch = useDispatch();
	const isCreating = useSelector(selectIsCreating);
	const isDeleting = useSelector(selectIsDeleting);
	const isUpdating = useSelector(selectIsUpdating);
	const isLoading = useSelector(selectIsLoading);
	const sortTodos = useSelector(selectSortTodos);

	const { clickSortTodo } = useRequestGetTodo();
	const { requesUpdateTodo } = useRequestUpdatingTodo();
	const { requestAddTodo } = useRequestAddTodo();
	const { requesDeleteTodo } = useRequestDeleteTodo();
	const { filterredTodos } = useSearchTodos();

	const clickTodo = ({ target }) => {
		inputTextValue.current.value = target.text;
		dispatch(appInputValue(inputTextValue.current.value));
		dispatch(appData(target.getAttribute('data')));
	};

	return (
		<>
			<Container>
				<h1 className={styles.header}>Список важных дел</h1>
				<input
					type="text"
					placeholder="Поиск....."
					className={styles.input}
					onChange={(event) => dispatch(appSearchTodos(event.target.value))}
				/>
				{isLoading ? (
					<div className={styles.loader}></div>
				) : (
					filterredTodos.map((item) => (
						<li key={item.id}>
							<a href="#" onClick={clickTodo} data={item.id}>
								{item.title}
							</a>
						</li>
					))
				)}
				<input type="text" 
					className={styles.input} 
					ref={inputTextValue} 
					onChange={(event) => dispatch(appInputValue(event.target.value))}
				/>
				<Button className={styles.button} disabled={isCreating} onClick={requestAddTodo}>Добавить дело</Button>
				<Button className={styles.button} disabled={isUpdating} onClick={requesUpdateTodo}>Изменить дело</Button>
				<Button className={styles.button} disabled={isDeleting} onClick={requesDeleteTodo}>Удалить дело</Button>
				<Button onClick={clickSortTodo}	className={!sortTodos ? styles.button : styles.buttonSort}>Сортировка А-Я</Button>
			</Container>
		</>
	);
};

