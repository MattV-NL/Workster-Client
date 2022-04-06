const Input = ({ type, value, placeholder, isRequired, handleChange, inputClass }) => (
        <input 
            type={type}
            value={value}
            placeholder={placeholder}
            required={isRequired}
            onChange={handleChange} 
            className={inputClass}/>

);
 

export default Input
