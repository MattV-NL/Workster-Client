import './tables.scss';
import { useContext } from 'react';
import { WorkDataContext } from '../../contexts/WorkDataContext';
import { Link } from 'react-router-dom';
import { workTableColoumns } from '../../constants';
import { Table } from 'antd';

let n = 1;
const displayBooleanInput = (checked) => {
  if (typeof checked === 'boolean') {
    return checked ? 'Yes' : 'No';
  }
  return false;
};

const WorkTable = () => {
  const { workValues } = useContext(WorkDataContext);
  const workValuesKeys = workValues.keys();

  const datasource = Array.from(workValues.values()).map((value) => {
    let details = (value.details = (
      <Link
        to={`/work-details/${workValuesKeys.next().value}`}
        key={value.date}
      >
        More details...
      </Link>
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
