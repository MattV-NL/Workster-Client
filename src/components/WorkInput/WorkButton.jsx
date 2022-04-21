import Button from '../Inputs/Button';

const WorkButton = () => {
  const doSomething = () => {
    console.log('hello');
  };
  return <Button onClick={doSomething}>Enter Work Info</Button>;
};

export default WorkButton;
