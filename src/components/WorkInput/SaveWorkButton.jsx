import { useCallback, useContext } from 'react';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { WorkDataContext } from '../../contexts/WorkDataContext';
import { SERVER_URL } from '../../constants';
import ButtonComp from '../Inputs/Button';

const SaveWorkButton = () => {
  const { authStatus } = useContext(AuthenticationContext);
  const { workValues } = useContext(WorkDataContext);
  const handleClick = useCallback(async () => {
    if (authStatus.auth) {
      console.log('clicked and verified');
      console.log(workValues.values());
      // const workValuesJSON = {

      // }
      // const response = await fetch(SERVER_URL.saveWorkInformation, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(workValuesJSON),
      // });
    } else {
      console.log('clicked, not verified');
    }
  }, [authStatus, workValues]);
  return (
    <div className='button-container'>
      <ButtonComp type='primary' onClick={handleClick}>
        Save Work Info
      </ButtonComp>
    </div>
  );
};

export default SaveWorkButton;
