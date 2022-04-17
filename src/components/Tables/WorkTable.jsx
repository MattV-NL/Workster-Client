import './tables.scss';

const WorkTable = () => {
  const workTableHead = [
    'Date',
    'Outside',
    'Welding',
    'Scaffolding',
    'Details',
  ];
  return (
    <div className='work-table'>
      <div className='work-table-header-row'>
        {workTableHead.map((item) => (
          <div key={`${item}`}>{item}</div>
        ))}
      </div>
      <div className='work-table-body'>
        <div className='work-table-row'>
          <div className='work-cells'></div>
          <div className='work-cells'></div>
          <div className='work-cells'></div>
          <div className='work-cells'></div>
          <div className='work-cells'></div>
        </div>
      </div>
    </div>
  );
};

export default WorkTable;
