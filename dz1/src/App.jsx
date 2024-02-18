import { useState, React } from 'react';
import { Field } from './Field';
import { Winner } from './Winner';
import styles from './Style.module.css';
import { useSelector, useDispatch } from "react-redux";
import { selectWinnerGame, selectWinner, selectDate, selectMove, selectCount } from './selectors';
import { chengeWinner, chengeMove, ressetGame } from './action';

export const App = () => {

	const dispatch = useDispatch();
	const data = useSelector(selectDate);
	const move = useSelector(selectMove);
	const count = useSelector(selectCount);
	const countWinner = useSelector(selectWinner);
	const winnerGame = useSelector(selectWinnerGame);
	const [array, setArray] = useState(Array(9).fill(null));

	if (array[data] === null  && winnerGame === true) {
		array[data] = count % 2 === 0 ? 'O' : 'X';
		dispatch(chengeMove(count % 2 === 0 ? 'X' : 'O'));
        dispatch(chengeWinner(count % 2 === 0 ? 'O' : 'X'));
	}

	const resset = () => {
		setArray(Array(9).fill(null));
		dispatch(ressetGame())
	};

	return (
		<div className={styles.container}>
			<h2 style={{ textAlign: 'center' }}>"Сейчас ХОД:" '{move}'</h2>
			<Field array={array} />
			<Winner countWinner={countWinner} array={array}/>
		 	<button className={!winnerGame? styles.cencel : styles.cencelLight} onClick={resset}>		 
		 		Начать заново
		 	</button>
		 </div>
	);
};
