import './tables.scss';
import { useContext, useCallback, useState } from 'react';
import { WorkDataContext } from '../../contexts/WorkDataContext';
import { workTableColumns } from '../../constants';
import { Table } from 'antd';
import WorkDetailsModalMain from '../Modals/WorkDetailsModalMain';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { displayBooleanInput } from '../../restAPI/displayBool';
import { workDetails } from '../../restAPI/workDetails';
import { UserSettingsContext } from '../../contexts/UserSettingsContext';
import '../Inputs/inputs.scss';
import ResetButton from '../WorkInput/ResetButton';
import { ConflictContext } from '../../contexts/ConflictContext';

const WorkTable = () => {
  const { darkMode } = useContext(UserSettingsContext);
  const { authStatus } = useContext(AuthenticationContext);
  const { workValues, setIsWorkDetailsVisibleMain } =
    useContext(WorkDataContext);
  const { isConflict } = useContext(ConflictContext);
  const [workDetailsKey, setWorkDetailsKey] = useState('');
  const workValuesKeys = workValues.keys();

  const datasource = Array.from(workValues.values()).map((value, index) => {
    let detailsKey = workValuesKeys.next().value;
    let lat, lon;

    const details = (value.details = (
      <div
        onClick={() => {
          setWorkDetailsKey(detailsKey);
          setIsWorkDetailsVisibleMain(true);
        }}
      >
        More Details...
      </div>
    ));
    if (authStatus.auth) {
      lat = value.workLocation.latitude;
      lon = value.workLocation.longitude;
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

  const dynamicBorder = useCallback(() => {
    const checkForConflict = Array.from(isConflict.values()).map(
      (date) => date.conflict
    );
    if (checkForConflict.includes(true)) {
      return '-conflict';
    } else {
      return '';
    }
  }, [isConflict]);

  return (
    <div
      className={
        darkMode
          ? `dark-table${dynamicBorder()}`
          : `light-table${dynamicBorder()}`
      }
    >
      <Table dataSource={datasource} columns={dynamicColumns()} />
      {workValues.size === 0 ? (
        ''
      ) : (
        <WorkDetailsModalMain title={`Work Details`}>
          {workDetails(workValues, workDetailsKey)}
        </WorkDetailsModalMain>
      )}
      <div className='form-button'>
        <ResetButton />
      </div>
    </div>
  );
};

export default WorkTable;
