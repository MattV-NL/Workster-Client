import { useContext } from "react";
import { InputContext } from "../../contexts/InputContext";

const WeatherButton = () => {
  const { weatherSubmit } = useContext(InputContext);
  
  return (
      <div className="submit-button-container">
          <button 
            className="submit-button" 
            onClick={weatherSubmit}
            >Submit
          </button>
      </div>
  )

}

export default WeatherButton;
