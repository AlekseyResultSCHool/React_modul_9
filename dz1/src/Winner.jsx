import { useDispatch, useSelector } from 'react-redux';
import { selectWinner } from './selectors';
import PropTypes from 'prop-types';
import { chengeWinnerGame } from './action';

export const Winner = ( props ) => {


	Winner.propTypes = {
		props: PropTypes.array
	}

	let win = null;
	const dispatch = useDispatch();
	const countWinner = useSelector(selectWinner);

	const winner = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	for (let i = 0; i < winner.length; i++) {
		let line = winner[i];

		if (
			props.array[line[0]] === props.countWinner &&
			props.array[line[1]] === props.countWinner &&
			props.array[line[2]] === props.countWinner
		) {
			win = countWinner;
		}
	}
	
	if (win !== null){
		dispatch(chengeWinnerGame(false))
	}

	return (
		<>
			<h2 style={{ textAlign: 'center' }}>"Победитель:" '{win}'</h2>
		</>
	);
};
