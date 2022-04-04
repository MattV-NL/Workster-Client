const Input = ({ type, value, placeholder, isRequired, handleChange }) => (
    <div>
        <input
            type={type}
            value={value}
            placeholder={placeholder}
            required={isRequired}
            onChange={handleChange} />
    </div>

);
 

export default Input
