import './inputs.scss';
import PropTypes from 'prop-types';

const Button = ({ onClick, children }) => (
	<div className='submit-button-container'>
		<div className='submit-button' onClick={onClick}>
			{children}
		</div>
	</div>
);

Button.propTypes = {
	onClick: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired,
};

export default Button;
