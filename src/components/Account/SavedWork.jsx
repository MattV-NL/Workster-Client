import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { SERVER_EP, workInformationTableColumns } from '../../constants';
import './account.scss';
import { Table } from 'antd';
import { displayBooleanInput } from '../../restAPI/displayBool';
import { DateTime } from 'luxon';
import { DeleteOutlined } from '@ant-design/icons';
import DeleteWorkDataModal from '../Modals/DeleteWorkDataModal';
import { WorkDataContext } from '../../contexts/WorkDataContext';
import { UserSettingsContext } from '../../contexts/UserSettingsContext';
import WorkDetailsModalProfile from '../Modals/WorkDetailsModalProfile';
import { workDetailsProfile } from '../../restAPI/workDetailsProfile';

const SavedWork = () => {
  const { darkMode } = useContext(UserSettingsContext);
  const { setIsWorkDetailsVisibleProfile } = useContext(WorkDataContext);
  const { location_id } = useParams();
  const [workInformation, setWorkInformation] = useState([]);
  const { setDeleteWorkModalVisible, deleteWorkModalVisible } =
    useContext(WorkDataContext);
  const [workDetailsKey, setWorkDetailsKey] = useState(null);

  useEffect(() => {
    const getSavedWork = async () => {
      const apiURL = `${SERVER_EP.getWorkInformation}/${location_id}`;
      const response = await fetch(apiURL);
      setWorkInformation(await response.json());
    };
    getSavedWork();
  }, [location_id, deleteWorkModalVisible]);

  const workInfoMap = new Map(
    workInformation.map((item) => [item.information_id, item])
  );

  const datasource = Array.from(workInfoMap.values()).map(
    ({
      date,
      is_outside,
      is_welding,
      is_scaffolding,
      created_at,
      work_details,
      location_id,
      deleteIcon,
      information_id,
    }) => {
      const newDate = DateTime.fromISO(date).toFormat('yyyy-MM-dd');
      const createdDate = DateTime.fromISO(created_at).toFormat('yyyy-MM-dd');
      const deleteRowIcon = (deleteIcon = (
        <>
          <DeleteOutlined
            onClick={() => {
              setDeleteWorkModalVisible(true);
            }}
          />
          <DeleteWorkDataModal children={information_id} />
        </>
      ));
      const details = (
        <div
          onClick={() => {
            setWorkDetailsKey(information_id);
            setIsWorkDetailsVisibleProfile(true);
          }}
        >
          More Details...
        </div>
      );

      return {
        date: newDate,
        isOutside: displayBooleanInput(is_outside),
        isWelding: displayBooleanInput(is_welding),
        isScaffolding: displayBooleanInput(is_scaffolding),
        createdAt: createdDate,
        workDetails: details,
        location_id,
        deleteRowIcon,
      };
    }
  );
  datasource.map((item, index) => (item.key = index));

  return (
    <div className={darkMode ? 'dark-table' : 'light-table'}>
      <Table dataSource={datasource} columns={workInformationTableColumns} />
      <WorkDetailsModalProfile title={'Work Details'}>
        {workDetailsProfile(workInfoMap, workDetailsKey)}
      </WorkDetailsModalProfile>
    </div>
  );
};

export default SavedWork;
