import './tables.scss';

const WorkTable = () => {
  return (
    <div className='work-table'>
      <div className='work-table-header-row'>
        <div className='work-header-cells'>Date</div>
        <div className='work-header-cells'>Outside</div>
        <div className='work-header-cells'>Welding</div>
        <div className='work-header-cells'>Scaffolding</div>
        <div className='work-header-cells'>Details</div>
      </div>
      <div className='wetaher-table-body'>
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
