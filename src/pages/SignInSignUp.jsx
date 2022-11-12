import Home from '../components/Home/Home';
import RegLoginModal from '../components/Modals/RegLoginModal';
import RegFailedModal from '../components/Modals/RegFailedModal';
import LoginFailedModal from '../components/Modals/LoginFailedModal';
import LoginSuccessfulModal from '../components/Modals/LoginSuccessfulModal';
import RegistrationSuccessfulModal from '../components/Modals/RegistrationSuccessfulModal';

const SignInSignUp = () => {
  return (
    <>
      <Home />
      <RegLoginModal />
      <RegFailedModal />
      <LoginFailedModal />
      <LoginSuccessfulModal />
      <RegistrationSuccessfulModal />
    </>
  );
};

export default SignInSignUp;
