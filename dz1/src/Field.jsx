import { React } from 'react';
import styles from './Style.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectWinnerGame } from './selectors';
import { chengeAttributeData, chengeCount } from './action';


export const Field = (props) => {

	const fields = [0, 1, 2, 3, 4, 5, 6, 7, 8];
	const winnerGame = useSelector(selectWinnerGame);
	const dispatch = useDispatch();
	
	Field.propTypes = {
		props: PropTypes.array,
		onClick: PropTypes.func
	}
	
	const Click = (event) => {
		dispatch(chengeCount(1));
		dispatch(chengeAttributeData(event.target.getAttribute('data')))
	};

	return (
		<>
			<div className={styles.field} onClick={Click}>
				{fields.map((item) => (
					<div key={item} className={winnerGame? styles.fields : styles.fieldsLight} data={item}>
						{props.array[item]}
					</div>
				))}
			</div>
		</>
	);
};
