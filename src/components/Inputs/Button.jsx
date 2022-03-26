const Button = ({handleClick}) => {
  return (
      <div className="submit-button-container">
          <button 
            className="submit-button" 
            onClick={handleClick}>
                Submit
          </button>
      </div>
  )
  
}

export default Button
