import { paths } from '../../constants';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import './footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-message'>Developed by Matthew Vey</div>
      <div className='footer-container'>
        <a href={paths.GITHUB}>
          <GithubOutlined />
        </a>
        <a href={paths.LINKEDIN}>
          <LinkedinOutlined />
        </a>
      </div>
    </div>
  );
};

export default Footer;
