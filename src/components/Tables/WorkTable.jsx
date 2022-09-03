import './tables.scss';
import { useContext, useCallback, useState } from 'react';
import { WorkDataContext } from '../../contexts/WorkDataContext';
import { workTableColumns } from '../../constants';
import { Table } from 'antd';
import WorkDetailsModal from '../Modals/WorkDetailsModal';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { displayBooleanInput } from '../../restAPI/displayBool';
import { workDetails } from '../../restAPI/workDetails';

const WorkTable = () => {
  const { authStatus } = useContext(AuthenticationContext);
  const { workValues, setIsWorkDetailsVisible } = useContext(WorkDataContext);
  const [workDetailsKey, setWorkDetailsKey] = useState('');
  const workValuesKeys = workValues.keys();

  const datasource = Array.from(workValues.values()).map((value, index) => {
    let detailsKey = workValuesKeys.next().value;
    let lat = value.workLocation.latitude;
    let lon = value.workLocation.longitude;

    const details = (value.details = (
      <div
        onClick={() => {
          setWorkDetailsKey(detailsKey);
          setIsWorkDetailsVisible(true);
        }}
      >
        More Details...
      </div>
    ));
    if (authStatus.auth) {
      return {
        date: value.date,
        isOutside: displayBooleanInput(value.isOutside),
        isScaffolding: displayBooleanInput(value.isScaffolding),
        isWelding: displayBooleanInput(value.isWelding),
        details,
        workLocation: `${lat}, ${lon}`,
        key: index,
      };
    } else {
      return {
        date: value.date,
        isOutside: displayBooleanInput(value.isOutside),
        isScaffolding: displayBooleanInput(value.isScaffolding),
        isWelding: displayBooleanInput(value.isWelding),
        details,
        key: index,
      };
    }
  });

  const dynamicColumns = useCallback(() => {
    if (authStatus.auth) {
      const newWorkTableColumns = Array.from(workTableColumns.values());
      return newWorkTableColumns;
    } else {
      const newWorkTableColumns = new Map(workTableColumns);
      newWorkTableColumns.delete('workLocation');
      return Array.from(newWorkTableColumns.values());
    }
  }, [authStatus]);

  const columns = dynamicColumns();

  return (
    <div className='table work-table'>
      <Table dataSource={datasource} columns={columns} />
      <WorkDetailsModal title={`Work Details`}>
        {workDetails(workValues, workDetailsKey)}
      </WorkDetailsModal>
    </div>
  );
};

export default WorkTable;
