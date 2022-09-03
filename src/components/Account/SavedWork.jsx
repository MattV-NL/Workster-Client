import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { SERVER_URL, workInformationTableColumns } from '../../constants';
import './account.scss';
import { Table } from 'antd';
import { displayBooleanInput } from '../../restAPI/displayBool';
import { DateTime } from 'luxon';
import { DeleteOutlined } from '@ant-design/icons';

const SavedWork = () => {
  const { location_id } = useParams();
  const [workInformation, setWorkInformation] = useState([]);

  useEffect(() => {
    const getSavedWork = async () => {
      const apiURL = `${SERVER_URL.getWorkInformation}${location_id}`;
      const response = await fetch(apiURL);
      setWorkInformation(await response.json());
    };
    getSavedWork();
  }, [location_id]);

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
    }) => {
      const newDate = DateTime.fromISO(date).toFormat('yyyy-MM-dd');
      const createdDate = DateTime.fromISO(created_at).toFormat('yyyy-MM-dd');
      const deleteRow = (deleteIcon = (
        <div
          onClick={() => {
            console.log('delete');
          }}
        >
          <DeleteOutlined />
        </div>
      ));

      return {
        date: newDate,
        isOutside: displayBooleanInput(is_outside),
        isWelding: displayBooleanInput(is_welding),
        isScaffolding: displayBooleanInput(is_scaffolding),
        createdAt: createdDate,
        workDetails: work_details,
        location_id,
        deleteRow,
      };
    }
  );
  datasource.map((item, index) => (item.key = index));

  return (
    <div className='page-layout'>
      <Table dataSource={datasource} columns={workInformationTableColumns} />
    </div>
  );
};

export default SavedWork;
