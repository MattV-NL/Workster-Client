import './tables.scss';
import { useContext, useCallback } from 'react';
import { WorkDataContext } from '../../contexts/WorkDataContext';
import { workTableColoumns } from '../../constants';
import { Table } from 'antd';
import WorkDetailsModal from '../Modals/WorkDetailsModal';

let n = 1;
const displayBooleanInput = (checked) => {
  if (typeof checked === 'boolean') {
    return checked ? 'Yes' : 'No';
  }
  return false;
};

const WorkTable = () => {
  const { workValues, setIsWorkDetailsVisible } = useContext(WorkDataContext);
  const workValuesKeys = workValues.keys();

  const workDetails = useCallback(
    (key) => {
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
        </>
      );
    },
    [workValues]
  );

  const datasource = Array.from(workValues.values()).map((value) => {
    let details = (value.details = (
      <>
        <div
          onClick={() => {
            setIsWorkDetailsVisible(true);
          }}
        >
          More Details...
        </div>
        <WorkDetailsModal title={`Work Details for ${value.date}`}>
          {workDetails(workValuesKeys.next().value)}
        </WorkDetailsModal>
      </>
    ));
    return {
      date: value.date,
      isOutside: displayBooleanInput(value.isOutside),
      isScaffolding: displayBooleanInput(value.isScaffolding),
      isWelding: displayBooleanInput(value.isWelding),
      details,
    };
  });

  datasource.map((item) => (item.key = n++));

  const columns = Array.from(workTableColoumns.values());

  return (
    <div className='table'>
      <Table dataSource={datasource} columns={columns} />
    </div>
  );
};

export default WorkTable;
