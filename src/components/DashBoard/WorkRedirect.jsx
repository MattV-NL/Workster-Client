import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { paths } from '../../constants';

const WorkRedirect = () => {
  return (
    <Button className='dashboard-item' type='primary' block='true'>
      <Link to={paths.WORK}>Work</Link>
    </Button>
  );
};

export default WorkRedirect;
