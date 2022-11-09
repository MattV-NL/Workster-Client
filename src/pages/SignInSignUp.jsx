import Home from '../components/Home/Home';
import RegLoginModal from '../components/Modals/RegLoginModal';
import RegFailedModal from '../components/Modals/RegFailedModal';
import LoginFailedModal from '../components/Modals/LoginFailedModal';

const SignInSignUp = () => {
  return (
    <>
      <Home />
      <RegLoginModal />
      <RegFailedModal />
      <LoginFailedModal />
    </>
  );
};

export default SignInSignUp;
