import { useContext } from 'react';
import { UserSettingsContext } from '../contexts/UserSettingsContext';

const About = () => {
  const { darkMode } = useContext(UserSettingsContext);
  return (
    <div className={darkMode ? 'dark-page-layout' : 'light-page-layout'}>
      <div>
        My goal with this project was to showcase my ability to build a website
        using React.js framework, along with doing my own deployment with
        Express.js.
      </div>
      <br />
      <div>
        The project itself is designed to allow a user to compare their work
        load with the weather to see if there may be a time when they would be
        working in harsh conditions. The user can create an account and save
        certain information to a database.
      </div>
    </div>
  );
};

export default About;
