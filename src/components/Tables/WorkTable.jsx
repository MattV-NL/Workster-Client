import './tables.scss';
import { useContext, useCallback, useState } from 'react';
import { WorkDataContext } from '../../contexts/WorkDataContext';
import { workTableColumns } from '../../constants';
import { Table } from 'antd';
import WorkDetailsModal from '../Modals/WorkDetailsModal';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';

let n = 1;
const displayBooleanInput = (checked) => {
  if (typeof checked === 'boolean') {
    return checked ? 'Yes' : 'No';
  }
  return false;
};

const WorkTable = () => {
  const { authStatus } = useContext(AuthenticationContext);
  const { workValues, setIsWorkDetailsVisible } = useContext(WorkDataContext);
  const [workDetailsKey, setWorkDetailsKey] = useState('');
  const workValuesKeys = workValues.keys();

  const workDetails = useCallback(
    (key) => {
      if (!key) {
        return;
      } else {
        const workData = workValues.get(parseInt(key));

        return (
          <>
            <div>
              {workData.isOutside
                ? 'Work will be outside'
                : 'Work will be inside'}
            </div>
            <div>
              {workData.isWelding
                ? 'This job requires welding'
                : 'No welding needed for this job'}
            </div>
            <div>
              {workData.isScaffolding
                ? 'Scaffolding will be required for this job'
                : 'No scaffolding needed for this job'}
            </div>
            <div>{workData.workDetails}</div>
            <div>
              Latitude: {workData.workLocation.latitude} <br /> Longitude:{' '}
              {workData.workLocation.longitude}
            </div>
          </>
        );
      }
    },
    [workValues]
  );

  const datasource = Array.from(workValues.values()).map((value) => {
    let detailsKey = workValuesKeys.next().value;
    let lat = value.workLocation.latitude;
    let lon = value.workLocation.longitude;

    let details = (value.details = (
      <>
        <div
          onClick={() => {
            setWorkDetailsKey(detailsKey);
            setIsWorkDetailsVisible(true);
          }}
        >
          More Details...
        </div>
      </>
    ));
    if (authStatus.auth) {
      return {
        date: value.date,
        isOutside: displayBooleanInput(value.isOutside),
        isScaffolding: displayBooleanInput(value.isScaffolding),
        isWelding: displayBooleanInput(value.isWelding),
        details,
        workLocation: `${lat}, ${lon}`,
      };
    } else {
      return {
        date: value.date,
        isOutside: displayBooleanInput(value.isOutside),
        isScaffolding: displayBooleanInput(value.isScaffolding),
        isWelding: displayBooleanInput(value.isWelding),
        details,
      };
    }
  });

  datasource.map((item) => (item.key = n++));

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
        {workDetails(workDetailsKey)}
      </WorkDetailsModal>
    </div>
  );
};

export default WorkTable;
