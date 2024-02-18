//import styles from './button.module.css';
//import classNames from 'classnames'

export const Button = ({ children, onClick, className, disabled}) => {
    return (
		<button  className={className} onClick={onClick} disabled={disabled}>
			{children}
		</button>
	);
};

