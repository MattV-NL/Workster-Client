import { useContext } from "react";
import { InputContext } from "../../contexts/InputContext";

const SubmitButton = () => {
  const { handleSubmit } = useContext(InputContext);
  
  return (
      <div className="submit-button-div">
          <button className="submit-button" onClick={handleSubmit}>Submit</button>
      </div>
  )

}

export default SubmitButton;