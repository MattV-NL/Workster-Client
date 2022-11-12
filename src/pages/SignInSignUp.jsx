import AuthPage from '../components/Authentication/AuthPage';
import RegLoginModal from '../components/Modals/RegLoginModal';
import RegFailedModal from '../components/Modals/RegFailedModal';
import LoginFailedModal from '../components/Modals/LoginFailedModal';
import LoginSuccessfulModal from '../components/Modals/LoginSuccessfulModal';
import RegistrationSuccessfulModal from '../components/Modals/RegistrationSuccessfulModal';

const SignInSignUp = () => {
  return (
    <>
      <AuthPage />
      <RegLoginModal />
      <RegFailedModal />
      <LoginFailedModal />
      <LoginSuccessfulModal />
      <RegistrationSuccessfulModal />
    </>
  );
};

export default SignInSignUp;
