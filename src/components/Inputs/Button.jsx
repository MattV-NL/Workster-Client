import './inputs.scss';

const Button = ({ handleClick, name }) => (
	<div className='submit-button-container'>
		<div className='submit-button' onClick={handleClick}>
			{name}
		</div>
	</div>
);

export default Button;
