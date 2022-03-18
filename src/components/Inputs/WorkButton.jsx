import { useContext } from "react";
import { InputContext } from "../../contexts/InputContext";

const WorkButton = () => {
  const { workSubmit } = useContext(InputContext);
  
  return (
      <div className="submit-button-div">
          <button className="submit-button" onClick={workSubmit}>Submit</button>
      </div>
  )

}

export default WorkButton;